describe('Base', function() {

  describe('Ability to create classes without superclasses', function() {

    it('should create classes from a template', function() {
      var template = {
        myMethod: function() {}
      };
      var newClass = Base.createClass(template);
      var instance = newClass.createInstance();
      expect(instance.myMethod).toBe(template.myMethod);
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

  });

  describe('Ability to create classes with superclasses', function() {

    describe('given a parent class', function () {

      it('should create a class which inherits methods from the parent', function () {
        var parentTemplate = {
          parentMethod: function () {
          }
        };
        var ParentClass = Base.createClass(parentTemplate);
        var ChildClass = Base.createClass(ParentClass, {});
        var instance = ChildClass.createInstance();
        expect(instance.parentMethod).toBe(parentTemplate.parentMethod);
      });

      it('should create a class which has the methods of the child', function() {
        var template = {
          childMethod: function () {
          }
        };
        var ChildClass = Base.createClass({}, template);
        var instance = ChildClass.createInstance();
        expect(instance.childMethod).toBe(template.childMethod);
      });
    });

  });

});