GreeterTest = TestCase("GreeterTest");

GreeterTest.prototype.setUp = function(){};
GreeterTest.prototype.tearDown = function(){};

GreeterTest.prototype.testGreet = function() {
    var greeter = new myapp.Greeter();
    assertEquals("Hello World!", greeter.greet("World"));
};
