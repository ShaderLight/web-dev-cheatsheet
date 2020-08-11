var person = {
    name: "Phil",
    favouriteLanguage: "PHP",
    introduction: function() {
        return this.name + "'s favourite programming language is " + this.favouriteLanguage;
    }
};