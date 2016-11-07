var Subject = function() {
    this.observers = [];
}

Subject.prototype = {
    register: function(observer) {
        this.observers.push(observer);
        console.log(this.observers);
    },
    unregister: function(observer) {
        var index = this.observers.indexOf(observer);
        if(index > -1) {
            this.observers.splice(index, 1);
            console.log(this.observers);
        }
    },
    notifyAll: function() {
        for(var i = 0; i < this.observers.length; i++) {
            this.observers[i].notify();
        }
    },
    toString: function() {
        return '[' + this.observers.length + ']';
    }
};

var Observer = function(id) {
    this.id = id;
}

Observer.prototype = {
    notify: function() {
        console.log('Observer: ' + this.id + ' has been notified');
    }
};

var subject = new Subject();
var observer1 = new Observer('bucky');
var observer2 = new Observer('nacho');
var observer3 = new Observer('micky');

subject.register(observer1);
subject.register(observer2);
subject.register(observer3);

subject.notifyAll();

subject.unregister(observer3);

subject.notifyAll();
