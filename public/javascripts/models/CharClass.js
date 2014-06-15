var CharClass = Backbone.Model.extend({

});

var CharClassCollection = Backbone.Collection.extend({
    model: CharClass,

    url: apiURL + "/classes"
});

CharClass.classes = {
    1: {
        id: 1,
        name: "Global",
    },
    2: {
        id: 2,
        name: "Warrior",
    },
    3: {
        id: 3,
        name: "Mage",
    },
    4: {
        id: 4,
        name: "Assassin",
    },
    5: {
        id: 5,
        name: "Hunter",
    },
    6: {
        id: 6,
        name: "Priest"
    }
}