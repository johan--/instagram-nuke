# Instagram Nuke

Simple tool for evaluating and auditing your instagram followings, and mass-unfollowing.

## How to set up
### Requirements
* Node.js - 7+

### Run the server
```
npm i
node server
```
Server will run on port 5000, so can be access at [http://localhost:5000](http://localhost:5000)

### How to make changes to the frontend
```
cd site
npm i -g @angular/cli
npm i
ng serve --open
# this will use an example data set, and unfollowing wont work
# after you've finished making changes, build the dist like so:
ng build --env=local
# and then run the main server as usual:
cd ..
node server
```

## How to use
1. go to [http://localhost:5000](http://localhost:5000)
   * keep an eye on the terminal where the server is running (will give you progress information)
2. enter your instagram username and password
3. use the checkbox to determine whether you want to refresh the data
   * If not selected, the server will use the saved results for the last load for this username, if available
   * Selecting 'refresh' will scrape the latest data, whether a saved result exists or not.
4. click 'submit'
5. in the terminal, if new data is being loaded, you will see the tasks that are currently being executed.
   * loading new data may take some time, depending upon how many followings you have
6. use the paginated table to view the users that you follow, along with their latest 5 photos
7. use the checkbox in the first column to select which users you want to unfollow
8. when ready, click 'unfollow' to unfollow the users you have selected. again, see terminal to see status

## About the project
This is not a masterclass in UX design, software design, code efficiency or security. It's just something I felt like throwing together, and was an excuse to play around with some Angular 2. I've made it public as others may want to use it.
