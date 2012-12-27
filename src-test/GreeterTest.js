TestCase("GreeterTest", {
    setUp: function () {
        'use strict';
        this.greeter = new myapp.Greeter();
    },
    "test greet": function () {
        'use strict';
        assertEquals("Hello World!", this.greeter.greet("World"));
    },
    "test greet null": function () {
        'use strict';
        assertNull(this.greeter.greet(null));
    }
});