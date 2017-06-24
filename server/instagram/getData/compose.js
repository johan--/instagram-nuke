'use strict';

const { V1: Client } = require('instagram-private-api');
const {store, timer} = require('../utils');

// sometimes the timestamps are in seconds, sometimes in milliseconds
const normTime = (ts) => (ts < 1000000000000) ? ts * 1000 : ts;

const collateMedia = (media) => media
    .map(medium => medium.getParams())
    .filter(post => post.mediaType === 1)
    .sort((a, b) => normTime(b.deviceTimestamp) - normTime(a.deviceTimestamp))
    .slice(0, 5)
    .map(medium => ({
        url: medium.webLink,
        timestamp: normTime(medium.deviceTimestamp),
        likes: medium.likeCount,
        comments: medium.commentCount,
        caption: medium.caption,
        image: medium.images.sort((a, b) => b.width - a.width)[0].url
    }));

const collateUser = (user, relationship, media) => {
    let params = user.getParams();
    return {
        id: params.id,
        username: params.username,
        picture: params.picture,
        fullName: params.fullName,
        isPrivate: params.isPrivate,
        followers: params.followerCount,
        following: params.followingCount,
        biography: params.biography,
        followBack: relationship.getParams().followedBy,
        media: collateMedia(media)
    };
};

module.exports = () => {
    let users = store.get('raw', 'users');
    let relat = store.get('raw', 'relationships');
    let media = store.get('raw', 'media');
    return store.set('composed', Object.keys(users)
        .map(un => collateUser(users[un], relat[un], media[un])))
}
