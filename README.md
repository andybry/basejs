# basejs [![Build Status](https://travis-ci.org/andybry/basejs.svg?branch=master)](https://travis-ci.org/andybry/basejs) [![Sauce Test Status](https://saucelabs.com/browser-matrix/basejs.svg)](https://saucelabs.com/u/basejs)

An OOJS implementation allowing classes to be developed in a consistent manner.

## Problem

The problem this library overcomes is the fact that JavaScript does not supply a consistent way of creating classes and objects.

## Usage

First include the Base.js library from the js folder. For IE8 and below (as well as any other ES3 browsers) you will also need to provide the polyfill for the Object.create method, which can be found in the js/polyfills/Object.create.js file.

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

If an `_init` method is not provided then the default from Base itself is used. This just returns the newly created instance.

### 3. Creating a class with inheritance

When you create a class with the `createClass` method, there is the option to pass in a parent class as the first argument. The class that is created will then automatically contain any methods from the parent (via the prototype chain), provided the method is not overridden in the child class.

```javascript
var ParentClass = Base.createClass({
  parentMethod: function() {
    // code goes here
  }
});

var ChildClass = Base.createClass(ParentClass, {
  childMethod: function() {
    // code goes here
  }
});
```

Then the class can be used as above:

```javascript
var myInstance = ChildClass.createInstance();
myInstance.parentMethod();
myInstance.childMethod();
```

The `_init` method can be used with inheritance too by creating an `_init` method in either the parent class or the child.
