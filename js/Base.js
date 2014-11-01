var Base = {

  createInstance: function() {
    return Object.create(this);
  },

  createClass: function(prototype) {
    var newClass = prototype;
    newClass.createInstance = this.createInstance;
    return newClass;
  }

};