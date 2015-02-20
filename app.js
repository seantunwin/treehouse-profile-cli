'use strict';

/************************************
 *               MODULES                  *
 ************************************/
/* Local dependecies */
var profile = require('./inc/profile.js');
/* End Modules */


/************************************
 *        LOCAL VARIABLES        *
 ************************************/
// Store String of potential subject
var subject = process.argv[2];
// Store Array of potential users
var users = process.argv.slice(3);
// Users array length
var usersLen = (users instanceof Array) ? users.length : 0;
/* End Local Variables */


// App was initialized with at least 2 argument (subject and user)
if (subject && usersLen > 0) {
    // Loop through each user, get their info and output
    for (var user = 0; user < usersLen; user++) {
        profile.get(users[user], subject, usersLen);
    }
    // Failed to be properly initialiezed
} else {
    console.warn('Please use the format: "node app.js <subject> <username [... other usernames]>"');
}