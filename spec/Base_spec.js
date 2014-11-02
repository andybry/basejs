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

    it('should initialise instances using the initialization method', function() {
      var Person = Base.createClass({
        _init: function(firstName, surname) {
          this._firstName = firstName;
          this._surname = surname;
          return this;
        },
        getName: function() {
          return this._firstName + ' ' + this._surname;
        }
      });
      var instance = Person.createInstance('Andy', 'Bryant');
      expect(instance.getName()).toEqual('Andy Bryant');
    });
    
    describe('Ability to create classes with superclasses', function() {

      describe('given a parent class', function () {
        it('should create a class which inherits methods from the parent', function () {
          var ParentClass = Base.createClass({
            parentMethod: function () {
            }
          });
          var ChildClass = Base.createClass(ParentClass, {});
          var instance = ChildClass.createInstance();
          var prototype = Object.getPrototypeOf(instance);
          expect(Object.getPrototypeOf(prototype).parentMethod).toBe(ParentClass.parentMethod);
        });
      });

    });

  });

});