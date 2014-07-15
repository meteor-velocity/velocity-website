Router.configure({
   layoutTemplate: 'layout'  //can be any template name
 });


Router.map(function () {
  this.route('home', {
    path: '/',
  });
  this.route('getting-started');
  this.route('user-guide');
  this.route('plugins');
  this.route('about');
});
