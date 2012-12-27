TestCase("LoaderTest", {
    setUp: function () {
        'use strict';
        this.loader = new myapp.Loader();
    },
    "test load": function () {
        'use strict';
        /*:DOC += <h2 class="greeting">Hello!</h2> */
        var greeting = document.getElementsByClassName('greeting')[0];
        assertNotUndefined(greeting);
        this.loader.load();
        assertEquals('Hello Johnny!', greeting.innerText);
    }
});
