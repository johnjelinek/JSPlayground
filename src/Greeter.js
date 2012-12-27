if (myapp === undefined) {
    var myapp = {};
}

myapp.Greeter = function () {
    "use strict";
};

myapp.Greeter.prototype.greet = function (name) {
    "use strict";
    return (name > '') ? "Hello " + name + "!" : null;
};
