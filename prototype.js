var User = function(username, password, email) {
    this.username = username;
    this.password = password;
    this.email = email;
}

// User.prototype.getUsername = function () {
//     return this.username;
// };
//
// User.prototype.getEmail = function() {
//     return this.email;
// };
//
// User.prototype.toString = function() {
//      return '[' + this.username + ',' + this.email + ']';
// }

// This format is synonymous with the format above
User.prototype = {
    getUsername: function() {
        return this.username;
    },
    getEmail: function () {
        return this.email;
    },
    toString: function() {
        return '[' + this.username + ',' + this.email + ']';
    }
};

var bucky = new User('blueeyebucky',
    'iLOVEtreats123',
    'blueeyebucky@gmail.com');

console.log(bucky.toString());
console.log(bucky.getUsername());
console.log(bucky.getEmail());
