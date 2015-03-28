Template.getStarted.rendered = function () {
  $('.tab-pane:first').addClass('active')
  $('.nav-tabs li:first').addClass('active')
}

Template.getStarted.helpers({
  frameworks: function () {
    return [
      {
        name: "Mocha",
        slug: "mocha",
        description: "Integration testing with mocha syntax.",
        install: [
          "$ meteor add mike:mocha",
          "$ meteor"
        ]
      },
      {
        name: "Jasmine",
        slug: "jasmine",
        description: "Integration and unit testing with jasmine syntax.",
        install: [
          "$ meteor add sanjo:jasmine",
          "$ meteor add velocity:html-reporter",
          "$ meteor"
        ]
      },
      {
        name: "Nightwatch",
        slug: "nightwatch",
        description: "Acceptance testing via browser automation",
        install: [
          "$ meteor add velocity:nightwatch-framework",
          "$ meteor"
        ]
      },
      {
        name: "Cucumber",
        slug: "cucumber",
        description: "Gherkin sytax testing for Meteor using Cucumber.js",
        install: [
          "$ meteor add xolvio:cucumber",
          "$ meteor"
        ]
      },
      {
        name: "Robot Framework",
        slug: "robotframework",
        description: "Acceptance testing using Robot Framework",
        install: [
          "$ meteor add rsbatech:robotframework",
          "$ meteor"
        ]
      }

    ];
  }
});
