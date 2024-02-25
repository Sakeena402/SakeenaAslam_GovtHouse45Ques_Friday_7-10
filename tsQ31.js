//Qno31: No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
var usernames = ['admin', 'Areeb', 'Amna', 'Sakeena', 'Ahmed'];
function printMessage() {
    if (usernames.length != 0) {
        for (var _i = 0, usernames_1 = usernames; _i < usernames_1.length; _i++) {
            var username = usernames_1[_i];
            if (username === 'admin') {
                console.log('Hello admin, would you like to see a status report?');
            }
            else {
                console.log("Hello ".concat(username, ", thank you for logging in again."));
            }
        }
    }
    else {
        console.log('you do not have any users');
    }
}
printMessage();
usernames.length = 0;
console.log('\n now i have empied the array\n');
printMessage();
/*
tsc tsQ31.ts
node tsQ31.js
*/
