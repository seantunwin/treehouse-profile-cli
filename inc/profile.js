/* Retrieve a teamtreehouse.com user's profile info */

'use strict';

/************************************
 *               MODULES                  *
 ************************************/
/* Local dependencies */
var mout = require('./mout.js');

/* Node dependencies */
var http = require('http');
/* End Modules */


/************************************
 *        LOCAL VARIABLES        *
 ************************************/
// Array for users not returned
var unknownUsers = [];
// Boolean for printed subject error message
var unknownSubjectHasPrinted = false;
// Counter for looping through provied users array
var counter = 0;
/* End Local Variables */


function get(username, subject, numUsers) {
    if (unknownSubjectHasPrinted) {
        return false;
    }
    //connect to API URL(http://teamtreehouse.com/username.json)
    var req = http.get('http://teamtreehouse.com/' + username + '.json', function(response) {
        // Response content
        var body = '';
        // Boolean for valid subject
        var isSubject = false;
        // A user's returned profile
        var profile = {};
        // Array for existing subjects
        var subjectsArr = [];

        counter++;
        //Read the data from the response
        response.on('data', function(chunk) {
            body += chunk;
        });

        //Parse the data
        response.on('end', function() {
            // Increase the counter as we iterate through the users array
            if (response.statusCode === 200) {
                try {
                    // Store the returned profile
                    profile = JSON.parse(body);
                    // Store a list of current subjects
                    subjectsArr = Object.keys(profile.points).splice(1);

                    // Check existing subjects to verify if subject is valid
                    for (var i = 0; i <= subjectsArr.length; i++) {
                        // Valid subject
                        if (subjectsArr[i] === subject) {
                            isSubject = true;
                        }
                    }

                    // Print error message of unknown subject
                    if (!isSubject && !unknownSubjectHasPrinted) {
                        mout.printSubjectError(subject, subjectsArr);
                        unknownSubjectHasPrinted = true;
                        return false;
                    }

                    if (isSubject && !unknownSubjectHasPrinted) {
                        // Everything has been validated
                        //Print the data out
                        mout.printMessage(username, profile.badges.length, profile.points[subject], subject);

                        // Print error message of unknown users if there are any
                        if (counter === numUsers && unknownUsers.length > 0) {
                            mout.printUserError(unknownUsers, numUsers);
                        }
                    }

                } catch (error) {
                    //Parsing Error
                    mout.printError(error);
                }

            // Username not found
            } else {
                if (username !== '' || username !== 'undefined') {
                    // Add falsey username to array
                    unknownUsers.push(username);
                }
                // This needs to be here in case all users are not found
                // Print error message of unknown users if there are any
                if (counter === numUsers && unknownUsers.length > 0) {
                    mout.printUserError(unknownUsers, numUsers);
                }
            }
        });

        //Connection Error
        req.on('error', function(e) {
            mout.printError(e);
        });
    });
}

// Expose methods
module.exports.get = get;