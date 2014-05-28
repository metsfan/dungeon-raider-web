var Spell = Backbone.Model.extend({
    urlRoot: apiURL + "/spell",
});

var SpellCollection = Backbone.Collection.extend({
    model: Spell,

    url: apiURL + "/spells"
});

