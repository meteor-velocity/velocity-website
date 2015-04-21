Meteor.startup(function() {
  analytics.load('HvxTXJGBNjx5bKBDQ3dTAUonbnOqyHLb');
});

Router.onRun(function() {
  analytics.page();
});

