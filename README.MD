IRON TEMPLE WORKOUT TRACKER

Link: https://iron-temple-heroku.herokuapp.com/

Tech used: 
-	JavaScript (including NodeJS)
-	MongoDB
-	CSS
-	HTML
-	Styling done using Bootstrap
-	Passport authentication middleware
-	Express


App outline:
-	Users can use this online web app to track their workouts. Only by logging in (or registering if they don’t already have an account), will they be able to log their workouts. 
-	Inside the app, users will be able to name their workouts, add exercises including details about the sets, weights, and reps performed. They are also able to look through past workouts and edit or delete as they please, with all changes being saved to the database.  


Implementation: 
-	Login/register/start page: 
    •	Each page was given its own EJS file and corresponding styling using bootstrap and CSS, with routers (using get/post requests) to help with function. The login and register functions are performed using the Passport authentication middleware. Refer to the auth.js to see full implementation. 
-	Home/index page:
    •	The home/index page was given its own EJS file and corresponding styling using bootstrap and CSS, with routers (using get/post requests) to help send users to their desired pages (add workouts, previous workouts etc). Forms were used to name the workout, with data passed along through the routes. See workouts.js (controllers) lines 17-25 to see full implementation. 
-	Delete:
    •	The delete page was given its own EJS file and corresponding styling using bootstrap and CSS, with routers (using get/post requests) to redirect users back to the home/index page.  Database manipulations using mongoose methods were used to remove the workout from the app’s database. See workouts.js (controllers) lines 111-121 to see full implementation. 
-	Edit/add exercises:
    •	These two pages work very similarly. They were both given their own EJS files with corresponding styling using bootstrap and CSS, with routers (using get/post requests) to redirect users back to the home/index page (for edit) and back to current workouts (for add exercises).  Database manipulations using mongoose methods were used to update the Exercises model and push into the Workouts model. Furthermore, front end JS was used to dynamically add reps and weight, this was done using event listeners and DOM manipulation (see front-end.js). See workouts.js (controllers) lines 49-78 and 79-108 to see full implementation. 
-	Show completed exercises page: 
    •	The show completed exercises page was given its own EJS file with corresponding styling with bootstrap and CSS with routers being used to redirect users back to the home page or to the edit pages.  Data about the workouts was displayed through he use of MongoDB’s database access methods. See workouts.js (controllers) lines 125-133 to see full implementation. 

Improvements/changes:
-	Let users be able to create and store different workout templates where they are able to view data from their previous uses of the certain template. 
-	Let each user have an individual database, instead of all users having access to the same database (therefore, being able to see other individuals data). 
-	Using Cloudniary, a function where users can upload short videos/images during their workouts as logs or to check their form on exercises. 
