var RegisterView = Backbone.View.extend({
    render: function() {
        Template.load("register", {}, "#content", {
            callback: function() {
                $("#register-submit").click($.proxy(function(e) {
                    e.stopPropagation()

                    var formData = {
                        "username" : $("#username").val(),
                        "email" : $("#email").val(),
                        "password" : $("#password").val(),
                        "first_name" : $("#first_name").val(),
                        "last_name" : $("#last_name").val()
                    }

                    Network.send("/user/register", "POST", {
                        "data" : formData,
                        "success" : function() {
                            app.navigate("", {trigger: true});
                        }
                    });

                    return false
                }, this));
            }
        });
    }
});