/**
User Controller.

Anything pertaining to users
*/

var UserController = BaseController.extend({

    login: function() {
        //this.render("LoginView");
    },

    register: function() {
        this.render("RegisterView");
    }
});