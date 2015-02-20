 /* Print out message(s) */

 'use strict';

 /************************************
  *               MODULES                  *
  ************************************/
 /* Node dependencies */
 var chalk = require('chalk');
 /* End Modules */


 /************************************
  *        LOCAL VARIABLES        *
  ************************************/
 // Change separator color back to default; assuming white is default
 var separator = chalk.white(', ');
 /* End Global Variables */


 function printMessage(username, badgeCount, points, subj) {
     var message = '';

     // Print user's profile info
     message = chalk.green(username) + ' has ' + chalk.cyan(badgeCount) + ' total badges and ' + chalk.cyan(points) + ' points in ' + chalk.blue(subj);
     // Send message to be output by error handler in catch block
     console.log(message);
 }

 // Subject was not found
 function printSubjectError(subject, subjectsArr) {
     // Create new error
     var se = new Error('Subject Not Found');

     se.name = 'SubjectError';
     se.message = 'The subject, ' + chalk.blue(subject) + ', does not exist. Please choose a valid subject.Subjects are case senitive.Here is a subject list :\n' + chalk.blue(subjectsArr.join(', '));

     // Print the error
     printError(se);
 }

 // User was not found
 function printUserError(unknownUsers) {
     // Create new error
     var ue = new Error('User Not Found');
     var message = '';

     ue.name = 'UserError';

     message += 'Unbable to retrieve the profile for ';
     // Display the users that were not found and convert array to string
     message += chalk.green(unknownUsers.join(separator));
     // If statusCode is 200 (because at least one username was correctly returned)
     //     we make an assumption that if a username isn't found it's because it
     //     doesn't exist, i.e. Not Found error code message
     //     Similar to if no results were found and using http.STATUS_CODES[response.statusCode]
     message += ' (' + chalk.red('Not Found') + '). Please check the spelling or try again later.';

     ue.message = message;
     //Print the error
     printError(ue);
 }

 //Print out Error messages
 function printError(error) {
     console.error(chalk.red(error.name + ':') + ' ' + error.message);
 }

 // Expose methods
 module.exports.printMessage = printMessage;
 module.exports.printSubjectError = printSubjectError;
 module.exports.printUserError = printUserError;
 module.exports.printError = printError;