Router.configure
 layoutTemplate: 'layout'

Router.onAfterAction ->
  hashSplit = @url.split '#'
  if hashSplit.length == 1
    window?.scrollTo 0, 0
  else
    Meteor.setTimeout (->
      window?.scrollTo 0, $('#' + hashSplit[1]).offset()?.top
    ), 0

Router.route '/', (-> @render 'home'),
  name: 'home'

Router.route '/contact', (-> @render 'contact'),
  name: 'contact'

# Router.route '/getting-started'
# Router.route '/resources'
# Router.route '/about'
# Router.route '/screencast'
Router.route '/blog-login'
