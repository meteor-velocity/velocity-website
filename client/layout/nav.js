var navItems = [
  {
    route: 'getting-started',
    title: 'Getting Started',
    icon: 'child',
    children: [
      {
        route: 'getting-started',
        hash: 'whytest',
        title: 'Why Test?'
      },
      {
        route: 'getting-started',
        hash: 'seeanexample',
        title: 'See an Example',
        class: 'indent'
      },
      {
        route: 'getting-started',
        hash: 'testframeworks',
        title: 'Test Frameworks',
        class: 'separator'
      },
      {
        route: 'getting-started',
        hash: 'mocha',
        title: 'Mocha',
        class: 'indent'
      },
      {
        route: 'getting-started',
        hash: 'jasmine',
        title: 'Jasmine',
        class: 'indent'
      },
      {
        route: 'getting-started',
        hash: 'testingpackageswithtinytestandmunit',
        title: 'TinyTest',
        class: 'indent'
      },
      {
        route: 'getting-started',
        hash: 'reporters',
        title: 'Reporters',
        class: 'separators'
      },
      {
        route: 'getting-started',
        hash: 'htmlreporter',
        title: 'HTML Reporter',
        class: 'indent'
      },
      {
        route: 'getting-started',
        hash: 'whatothertestscanirun',
        title: 'What other tests can I run?',
        class: 'separator'
      },
      {
        route: 'getting-started',
        hash: 'whyaretheresomanykindsoftests',
        title: 'Why are there so many kinds of tests?'
      },
    ]
  },
  {
    route: 'resources',
    title: 'Resources',
    icon: 'graduation-cap'
  },
  {
    route: 'about',
    title: 'About',
    icon: 'users'
  }
];

Template.nav.rendered = function () {
  var pos = $('.nav-main>.nav').position();
  Session.set('navPos', pos);
}

Template.nav.helpers({
  navItems: function () {
    return navItems;
  },
  navHeight: function () {
    var navPos = Session.get('navPos');
    var winHeight = Session.get('windowHeight');
    var winWidth = Session.get('windowWidth');
    if(winWidth > 991 && navPos){
      var newVal = winHeight - navPos.top;
      return ' height: ' + newVal + 'px; ';
    }
  },
  activeIfTemplateIs: function (template) {
    var currentRoute = Router.current();
    var linkPath = '/' + template;
    return currentRoute &&
      linkPath === currentRoute.route.path() ? 'active ' : '';
  },
  activeChild: function () {
    var currentRoute = Router.current();
    var linkPath = '/' + this.route;
    if(currentRoute && linkPath === currentRoute.route.path()){
      var withId = $('#main [id]');
      var hashes = withId.map(function() { return this.id; });
      var scrollPos = Session.get('scrollY');
      var hashPos = 0, curHashIndex = 0;
      while (hashPos < scrollPos) {
        if(curHashIndex >= withId.length){
          break;
        }
        hashPos = withId.eq(curHashIndex).offset().top;
        curHashIndex++;
      }
      if(curHashIndex > 0 && this.hash === hashes[curHashIndex - 1]){
        return 'active ';
      }
    }
  }
});

// Reactive window height
$(window).on('resize', function () {
  Session.set('windowHeight', window.innerHeight);
  Session.set('windowWidth', window.innerWidth);
}).trigger('resize');

// Reactive scroll response
$(window).on('scroll', function () {
  // Cross browser work-around from:
  //  https://developer.mozilla.org/en-US/docs/Web/API/Window.scrollY
  var supportPageOffset = window.pageXOffset !== undefined;
  var isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");

  var x = supportPageOffset ? window.pageXOffset : isCSS1Compat ?
    document.documentElement.scrollLeft : document.body.scrollLeft;
  var y = supportPageOffset ? window.pageYOffset : isCSS1Compat ? 
    document.documentElement.scrollTop : document.body.scrollTop;
  Session.set('scrollX', x);
  Session.set('scrollY', y);
}).trigger('scroll');
