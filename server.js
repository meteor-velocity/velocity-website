if (Meteor.isServer) {
  Router.route('serverRedirect', {
    where: 'server',
    path: '/',
    action: function () {
      this.response.writeHead(301, {'Location': 'http://xolv.io/velocity-announcement'});
      this.response.end();
    }
  });
}
