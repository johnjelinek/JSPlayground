// Loader object
myapp.Loader = function () {
    'use strict';
};

// load process
myapp.Loader.prototype.load = function () {
    'use strict';
    var greeter = new myapp.Greeter(),
        elements = document.getElementsByClassName("greeting");

    for (var i = 0; i < elements.length; i++) {
        var el = elements[i];
        el.innerText = greeter.greet("Johnny");
    }
};

// document ready
document.addEventListener("DOMContentLoaded", ready, false);

// launch event
function ready() {
    'use strict';
    var loader = new myapp.Loader();
    loader.load();
}