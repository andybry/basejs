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
    newClass.createInstance = this.createInstance;
    if(typeof newClass._init == 'undefined') {
      newClass._init = this._init;
    }
    return newClass;
  }

};