var HomeView = Backbone.View.extend({
    render: function() {
        Template.load("home", {}, "#content")
    }
});