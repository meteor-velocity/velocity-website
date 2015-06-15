var template = Template.section;

template.onCreated(function () {
  var self = this;

  self.getContentTemplate = function () {
    var name = self.data.name + '__' + Session.get('framework');

    return Template[name] ? name : null;
  }
})

template.helpers({
  contentTemplate: function () {
    var self = Template.instance();

    return self.getContentTemplate();
  }
})
