class Media {
    url: string;
    timestamp: number;
    likes: number;
    comments: number;
    caption: string;
    image: string;
}

export class User {
    id: number;
    username: string;
    picture: string;
    fullName: string;
    isPrivate: boolean;
    followBack: boolean;
    media: Media[];
}