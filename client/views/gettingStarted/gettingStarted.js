Template.gettingStarted.onRendered = function () {
  Session.set('activeFramework', 'jasmine');
}

Template.gettingStarted.helpers({
  frameworks: function() {
    return [
      {
        name: "Jasmine",
        slug: "jasmine"
      },
      {
        name: "Mocha",
        slug: "mocha"
      },
      {
        name: "Cucumber",
        slug: "cucumber"
      },
      {
        name: "Casper",
        slug: "casper"
      }
    ];
  }
});
