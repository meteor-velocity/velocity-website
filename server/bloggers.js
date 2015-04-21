Accounts.onCreateUser(function (options, user) {
  var githubUser = _.find(
    HTTP.get('https://api.github.com/orgs/meteor-velocity/members',
      {headers: {'User-Agent': 'Meteor/1.0'}}).data,
    function (githubUser) {
      return user.services.github.username === githubUser.login
    });
  user.profile = {
    name: githubUser.login
  };
  return user;
});

Accounts.onLogin(function (obj) {

  // if a user gets this far, it means they passed the member login logic above, so make them an
  // author
  Roles.addUsersToRoles(obj.user._id, ['mdblog-author']);

});