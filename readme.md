# Mahidhar Task Run App
This is the running code for the assignment given. I've searched across for the API which meets your expectations but couldn't find one, hence I had to built the backend by myself for providing the search, sort and filter functionality. 

## Installation 
* npm install 
* node index.js

## API Documentation
# Allowed HTTPs requests: 
    GET  -  Get a list of users

#API's 
1. To get all the users, 
    GET  -  '/users' - returns all users. 
2. To get users based on search,
    GET  -  '/users/filter?search='
3. To get users based on sorting,
    GET  -  '/users/sort?sortBy=&order='

#Running locally
1. Start the server locally using "node index.js" in backend directory.
2. Open react project and run "npm start". Check it out in browser.