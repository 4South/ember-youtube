App.Router.map( function () {

  this.resource('youtube', function () {
    this.route('ytcontroller', { path: "/ytcontroller" });
    this.route('ytview', { path: "/ytview" });
    this.route('ytmodel', { path: "/ytmodel" });
  });

});

App.IndexRoute = Ember.Route.extend({
  redirect: function () {
    this.replaceWith('youtube');
  },
});

App.YoutubeRoute = Ember.Route.extend({

  model: function (params) {
    return App.YoutubeModel.create({
      videoUrl: "http://www.youtube.com/watch?v=XjTSpgAm8QM",
    });
  },  
  
  renderTemplate: function (controller, model) {
    console.log('ytroute rt fired');
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
