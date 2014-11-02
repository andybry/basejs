basejs
======

An OOJS implementation allowing classes to be developed in a consistent manner.

## Problem

The problem this library overcomes is the fact that JavaScript does not supply a consistent way of creating objects.

## Usage

First include the Base.js library from the js folder. Then the following basic patterns can be used:

### 1. Creating a class

To create a basic class:

```javascript
var MyClass = Base.createClass({
  myMethod: function() {
    // code for method goes here
  }
});
```
