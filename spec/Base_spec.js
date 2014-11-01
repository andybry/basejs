describe('Base', function() {

  describe('Ability to create classes', function() {
    it('should create classes from prototypes', function() {
      var prototype = {
        myMethod: function() {}
      };
      var newClass = Base.createClass(prototype);
      var instance = newClass.createInstance();
      expect(Object.getPrototypeOf(instance).myMethod).toBe(prototype.myMethod);
    });
  });

});