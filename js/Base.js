var Base = {

  createInstance: function() {
    var instance = Object.create(this);
    return instance._init.apply(instance, arguments);
  },

  _init: function() {
    return this;
  },

  createClass: function(prototype) {
    var newClass = prototype;
    var parentProvided = typeof arguments[1] != 'undefined';
    var child;
    if(parentProvided) {
      child = arguments[1];
      newClass = Object.create(prototype);
      for(var methodName in child) {
        newClass[methodName] = child[methodName];
      }
    }
    newClass.createInstance = this.createInstance;
    var needsDefaultInit = typeof newClass._init == 'undefined';
    if(needsDefaultInit) {
      newClass._init = this._init;
    }
    return newClass;
  }

};