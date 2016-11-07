// var User = function(username, password, email) {
//     this.username = username;
//     this.password = password;
//     this.email = email;
// };
//
// User.prototype = function() {
//     var getUsername = function() {
//         return this.username;
//     };
//
//     var getEmail = function() {
//         return this.email;
//     };
//
//     var toString = function() {
//         return '[' + this.username + ',' + this.email + ']';
//     };
//
//     // NOTE: this would be a problem because of name collisions
//     //       you cant have a property and function with same name
//     return {
//         username: getUsername,
//         email: getEmail,
//         toString: toString
//     }
// }();

var User = function(username, password, email) {
  this._username = username;
  this._password = password;
  this._email = email;
}

User.prototype = function() {

  var getUsername = function() {
    return this._username;
  };

  var getEmail = function() {
    // Apply brake pads
    return this._email;
  };

  var toString = function() {
      return '[' + this._username + ',' + this._email + ']';
  };

  return {
    username: getUsername,
    email: getEmail,
    toString: toString
  }

}();

var nacho = new User('nacho', 'cheese123', 'nacho@gmail.com');
console.log(nacho.toString());
console.log(nacho.username());
console.log(nacho.email());
console.log(User.toString());
console.log(User.prototype);
