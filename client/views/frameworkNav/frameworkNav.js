// Listen for clicks, set Session variable

Template.frameworkNav.events({
  'click .js-framework-switch': function(e) {
    e.preventDefault();

    // Activate button
    $('.js-framework-switch').removeClass('active');

    var button = $(e.target);
    button.addClass('active');

    // Reset activeFramework
    var framework = button.data('framework');
    Session.set('framework', framework);
  }
});

Template.frameworkNav.onRendered(function() {
  Session.setDefault('framework', 'jasmine')

  framework = Session.get('framework');
  $('[data-framework="' + framework + '"]').addClass('active');
});
