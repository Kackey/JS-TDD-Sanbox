/**
 * Created by hidekazu.kakinuma on 13/12/28.
 */
myapp = {};
myapp.Greeter = function() { };
myapp.Greeter.prototype.greet = function(name) {
    return "Hello " + name + "!";
};