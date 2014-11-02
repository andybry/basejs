# basejs

An OOJS implementation allowing classes to be developed in a consistent manner.

## Problem

The problem this library overcomes is the fact that JavaScript does not supply a consistent way of creating classes and objects.

## Usage

First include the Base.js library from the js folder. For IE8 and below you will also need to provide a polyfill for the Object.create method (and the Object.getPrototypeOf method for running the tests).

Then the following basic patterns can be used:

### 1. Creating a class

To create a basic class:

```javascript
var MyClass = Base.createClass({
  myMethod: function() {
    // code for method goes here
  }
});
```

Then to instantiate an instance of the class:

```javascript
var myInstance = MyClass.createInstance();
myInstance.myMethod();
```

The `createInstance` method is added automatically.


### 2. Creating a class with an instantiation method

If you provide an `_init` method, then any arguments passed to the `createInstance` method will be passed through
to the `_init` method. The `_init` method is also responsible for returning the instance that you are creating.

```javascript
var MyClass = Base.createClass({
  _init: function(firstName, surname) {
    // initialisation code goes here, e.g.
    this._firstName = firstName;
    this._surname = surname;
    return this;
  },
  myMethod: function() {
    // method code goes here, e.g.
    return this._firstName + ' ' + this._surname;
  }
});
```

Then to use the parameters when initialising:

```javascript
var myInstance = MyClass.createInstance('Andy', 'Bryant');
var name = myInstance.myMethod();
```
