class User {
    
    constructor(thing) {
        for(var prop in thing) {
            if(thing.hasOwnProperty(prop)) {
                this[prop] = thing[prop];
            }
        }
    }
    username() {
        return this.username;
    }
    email() {
        return this.email;
    }
    toString() {
        return '[' + this.username + ',' + this.email + ']';
    }
}

var nacho = new User('nacho', 'cheesy123', 'nacho@gmail.com');
var bucky = new User('bucky', 'blueeyebucky', 'bucky@gmail.com');
var buckyTwin = new User('bucky', 'blueeyebucky', 'bucky@gmail.com');

console.log(nacho.toString());
console.log(bucky.toString());
console.log(bucky === nacho);
console.log(bucky === buckyTwin);

var user = new User({
    username: 'spongebob',
    password: 'blahblahblah',
    email: 'spongebob@gmail.com'
});
user.username = 'hacked';
console.log(user);
