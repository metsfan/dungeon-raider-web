var userController = new UserController()
var homeController = new HomeController()

var Home = Backbone.Router.extend({

    routes: function() {
        return {

            "":                    "index",

            // Spells
            "user/login" :      $.proxy(userController.login, userController),
            "user/register" :         $.proxy(userController.register, userController),
        }
    },

    index: function() {
        Template.load("home", {}, "#content")
    },

    navigate: function(fragment, options) {
        if (options) {
            if (options.args) {
                $.cookie("postData", JSON.stringify(options.args));
                $.cookie("postUrl", fragment);
            } else {
                $.removeCookie("postData");
            }
        }

        Backbone.Router.prototype.navigate.apply(this, arguments);
    },

    _extractParameters: function(route, fragment) {
        var args = Backbone.Router.prototype._extractParameters.apply(this, arguments);

        var postUrl = $.cookie("postUrl");
        if (postUrl != fragment) {
            $.removeCookie("postData");
        }

        var params = {}
        var backArg = args.pop();
        if (backArg != null) {
            var qstringParams = Util.parseQueryString(backArg);
            _.extend(params, qstringParams);
        }

        var postData = $.cookie("postData");
        if (postData) {
            _.extend(params, JSON.parse(postData));
        }

        args.push(params);

        return args;
    }


});

$(document).ready(function() {
    app = new Home();
    Template.load("sidebar", {}, "#sidebar");

    Backbone.history.start();

    //Network.debug = 1;

    //app.navigate("");
});