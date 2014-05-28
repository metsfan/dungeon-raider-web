/**
Home Controller.

Routes for the main website
*/

var HomeController = BaseController.extend({

    index: function() {
        this.render("HomeView");
    }


});