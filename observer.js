var Subject = function() {
    var observers = [];

    var subscribeObserver = function(observer) {
        observers.push(observer);
    };

    var unsubscribeObserver = function(observer) {
        var index = observers.indexOf(observer);
        if(index > -1) {
            observers.splice(index, 1);
        }
    };

    var notifyObserver = function(observer) {
        var index = observers.indexOf(observer);
        if(index > -1) {
            observers[index].notify(index);
        }
    };

    var notifyAllObserver = function() {
        for(var i = 0; i < observers.length; i++) {
            observers[i].notify(i);
        }
    };

    return {
        subscribe: subscribeObserver,
        unsubscribe: unsubscribeObserver,
        notify: notifyObserver,
        notifyAll: notifyAllObserver
    }
};

var Observer = function() {
    var notify = function(index) {
        console.log('Observer ' + index + ' is notified!');
    };

    return {
        notify: notify
    }
};

// create the Subject that has capabilities to register Observers
var subject = new Subject();

// 3 observers that we'll register with Subject
var observer1 = new Observer();
var observer2 = new Observer();
var observer3 = new Observer();

// register Observers with Subject
subject.subscribe(observer1);
subject.subscribe(observer2);
subject.subscribe(observer3);

// Subject notifies one specific Observer
subject.notify(observer2);

// Notify all Observers currently registered
subject.notifyAll();
