App.Router.map( function () {

  this.resource('youtube', function () {
    this.route('ytcontroller', { path: "/ytcontroller" });
    this.route('ytview', { path: "/ytview" });
    this.route('ytmodel', { path: "/ytmodel" });
    this.route('ytrouter', { path: "/ytrouter" });
    this.route('ytapp', { path: "/ytapp" });
  });

});

App.IndexRoute = Ember.Route.extend({
  redirect: function () {
    this.replaceWith('youtube');
  },
});

App.YoutubeIndexRoute = Ember.Route.extend({

  renderTemplate: function (controller, model) {
    this.render("youtube-index", {
      into: 'application',
      outlet: 'code',
    });
  },

});

App.YoutubeRoute = Ember.Route.extend({

  model: function (params) {
    return App.YoutubeModel.create({
      videoUrl: "http://www.youtube.com/watch?v=XjTSpgAm8QM",
    });
  },  
  
  renderTemplate: function (controller, model) {
    this.render("youtube", {
      into: 'application',
      outlet: 'player',
      controller: controller
    });

    this.render("youtube-controls", {
      into: 'application',
      outlet: 'footer',
      controller: 'youtube'
    });
  },

});

App.YoutubeYtcontrollerRoute = Ember.Route.extend({

  renderTemplate: function (controller, model) {
    this.render("source/YoutubeController", {
      into: 'application',
      outlet: 'code',
    }); 
  },

});

App.YoutubeYtviewRoute = Ember.Route.extend({

  renderTemplate: function (controller, model) {
    this.render("source/YoutubeView", {
      into: 'application',
      outlet: 'code',
    }); 
  },

});

App.YoutubeYtmodelRoute = Ember.Route.extend({

  renderTemplate: function (controller, model) {
    this.render("source/YoutubeModel", {
      into: 'application',
      outlet: 'code',
    }); 
  },

});

App.YoutubeYtrouterRoute = Ember.Route.extend({

  renderTemplate: function (controller, model) {
    this.render("source/Router", {
      into: 'application',
      outlet: 'code',
    }); 
  },

});

App.YoutubeYtappRoute = Ember.Route.extend({

  renderTemplate: function (controller, model) {
    this.render("source/Application", {
      into: 'application',
      outlet: 'code',
    }); 
  },

});
