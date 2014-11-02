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
    if(parentProvided) {
      newClass = Object.create(prototype);
    }
    newClass.createInstance = this.createInstance;
    var needsDefaultInit = typeof newClass._init == 'undefined';
    if(needsDefaultInit) {
      newClass._init = this._init;
    }
    return newClass;
  }

};