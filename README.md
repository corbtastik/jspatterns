
## Module Pattern (module.js)

* Keep pieces of code independent of other components
* Modules are kinda like JavaScript "classes"
* Modules encapsulate
* Modules allow for public and private access
* Modules should be immediately-invoked-function-expressions for private scopes

## Revealing Module Pattern (modulerevealing.js)

* Very similar to Module Pattern
* Module exports an object literal that reveals what it wants to outside world
* Disadvantages
  * You can't access private variables in export object
  * You can't override functions in export object

## Prototype Pattern (prototype.js)

* Relies on prototypical inheritance
* Objects created by cloning the prototype
* User where performance is critical
* Uses a constructor function

## Revealing Prototype Pattern (prototyperevealing.js)  

* Same as Prototype
* See Revealing Module Pattern bullet points - same applies here

## Observer Pattern (observer.js)
