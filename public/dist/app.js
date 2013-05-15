minispade.register('application/Application.js', function() {
window.App = Ember.Application.create();
minispade.require('router/Router.js');
minispade.require('models/YoutubeModel.js');
minispade.require('controllers/YoutubeController.js');
minispade.require('views/YoutubeView.js');

});

minispade.register('controllers/YoutubeController.js', function() {

minispade.require('models/YoutubeModel.js');

/*
This state manager represents the current state of associated
videos playing through connected/associated views
NOTE: this may not represent the viewers actual state
if the application allows the controller to drive in unison
otherwise autonomous views
*/
App.YoutubeStateManager = Ember.StateManager.extend({

  initialState: 'noplayer',
  noplayer: Ember.State.extend(),
  ready: Ember.State.extend(),
  ended: Ember.State.extend(),
  playing: Ember.State.extend(),
  paused: Ember.State.extend(),
  buffering: Ember.State.extend(),

  changeState: function (manager, controller, state, stateName) {
    manager.transitionTo(stateName);    
    controller.set('_playerState', state);
  },

});


App.YoutubeController = Ember.ObjectController.extend({

  youtubeReady: false,
  
  //volume attrs
  isMuted: false,
  volume: 50,
  volumeChoices: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
  
  //attributes related to form inputs
  newVideoUrl: "",
  videoId: "Ga99hMi7wfY",
  formSeekPosition: 0,
  seekPosition: 0,


  /*
  these methods are the intended interface for the rest of your app
  these methods simply send messages to the state machine which in turn
  transitions and changes the '_playerState' attribute on this controller
  */
  play: function () { this._updateState(1); },

  pause: function () { this._updateState(2); },

  stop: function () { this._updateState(5); }, 

  mute: function () { this.set('isMuted', true); },

  unmute: function () { this.set('isMuted', false); },


  seekTo: function(seconds) { 
    this.set('seekPosition', this.get('formSeekPosition'));
  },

  restart: function () {
    this.set('seekPosition', 0);
  },

  //load a video by providing a youtube url
  load: function(url) {
    var model = this.get('model')
      , id;

    if (url === "") { return }
    if (url.indexOf("youtube.com") === -1) { return; }
    
    id = this.get('newVideoUrl').split('=')[1];

    this.set('videoId', id);
  },

  /*
  if you override these calls be sure to call this._super()
  */
  //called when the video is ready for playing
  onReady: function() { this.set('youtubeReady', true); },

  //called if video has ended 
  onEnded: function() {},

  //called if video becomes playing
  onPlaying: function() {},

  //called if video becomes paused
  onPaused: function() {},

  //called if video becomes stopped
  onStopped: function() {},

  //called if video becomes buffering 
  onBuffering: function() {},


  /*
  The entire state machine should NOT be overridden.  If you want to interact
  with the youtube player/players, do so by using the public api methods such 
  as 'play', 'pause', 'seek' etc
  */
  //maps emitted youtube player states to human-readable names 
  _stateMapping: {
    '-1': 'ready',
    0: 'ended',
    1: 'playing',
    2: 'paused',
    3: 'buffering',
  },

  _stateManager: App.YoutubeStateManager.create(), 

  //never change this directly
  _playerState: null,

  _updateState: function (state) {
    var stateName = this.get('_stateMapping')[state];

    this.get('_stateManager').send('changeState', this, state, stateName);
  }, 

  //this observer will listen for changes in state and trigger methods
  _listenForStateChange: function () {
    var state = this.get('_playerState')
      , stateName = this.get('_stateMapping')[state]
      , methodName;

    //sanity checking incase this state doesn't exist or youtube isnt ready
    if (!stateName) { return }
  
    methodName = "on" + Ember.String.capitalize(stateName);

    this.send(methodName); 
  }.observes('_playerState'),

});

});

minispade.register('models/YoutubeModel.js', function() {
/*
this is a video model.  the youtube controller instance in your app
should have its content set to one of these
youtubeview instances will look for data from this object to create the player
*/
App.YoutubeModel = Ember.Object.extend({

  height: 480,
  width: 640,
  videoUrl: "",
  autohide: 1,
  autoplay: 0,
  controls: 0,
  disablekb: 1,
  enablejsapi: 1,
  fs: 0,
  iv_load_policy: 3,
  modestbranding: 1,
  rel: 0,
  showinfo: 0,

});


});

minispade.register('router/Router.js', function() {
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
    this.render("source/controllers/YoutubeController", {
      into: 'application',
      outlet: 'code',
    }); 
  },

});

App.YoutubeYtviewRoute = Ember.Route.extend({

  renderTemplate: function (controller, model) {
    this.render("source/views/YoutubeView", {
      into: 'application',
      outlet: 'code',
    }); 
  },

});

App.YoutubeYtmodelRoute = Ember.Route.extend({

  renderTemplate: function (controller, model) {
    this.render("source/models/YoutubeModel", {
      into: 'application',
      outlet: 'code',
    }); 
  },

});

App.YoutubeYtrouterRoute = Ember.Route.extend({

  renderTemplate: function (controller, model) {
    this.render("source/router/Router", {
      into: 'application',
      outlet: 'code',
    }); 
  },

});

App.YoutubeYtappRoute = Ember.Route.extend({

  renderTemplate: function (controller, model) {
    this.render("source/application/Application", {
      into: 'application',
      outlet: 'code',
    }); 
  },

});

});

minispade.register('views/ApplicationView.js', function() {

});

minispade.register('views/YoutubeView.js', function() {
/*
This class is responsible for loading the youtubeplayer api
and spawning an instance of a ytplayer object
It listens to changes on its controller's attributes to 
affect the ytplayer object
*/
App.YoutubeView = Ember.View.extend({

  iframeId: "ytplayer",
  classNames: ['fixedplayer'],

  //called before this element is to be inserted into the DOM
  didInsertElement: function () {
    var self = this
      , $window = Ember.$(window);

    this.createYoutubePlayer();

    //set jquery event to handle window resize
    $window.resize(self.resizeListener.bind(self));
   
    //call once to set correct size 
    self.resizeListener();
  },

  //called when view is being removed
  willDestroyElement: function () {
    var $window = Ember.$(window);

    //nullify the ytplayer instance
    this.set('ytplayer', null);
    
    //remove jquery listener
    $window.unbind('resize', this.resizeListener);    
    
  },

  //this function responds to window resize
  resizeListener: function () {
    var ytplayer = this.get('ytplayer')
      , height
      , width;

    if (!ytplayer) { return; }
    
    width = $(window).width() * (4/12);
    height = width * (480/640);
    ytplayer.setSize(width, height); 
  },

  //when we insert the element, we add our YT player object
  createYoutubePlayer: function () {
    var ytController = this.get('controller');

    //do we have a youtube video model to load?
    if (!ytController.get('model')) { return; }
    var model = ytController.get('model')
      , iframeId = this.get('iframeId')
      , iframe = document.getElementById(iframeId);

    var yt = new YT.Player(iframe, {
      events: {
        onReady: this.sendStateChange.bind(this),
        onStateChange: this.sendStateChange.bind(this),
        onError: this.handleError.bind(this),
      }, 
    });
  
    this.set('ytplayer', yt);

  },

  
  /*
  this handles state-change events emitted by the player
  these are useful to control for the user changing the state
  of your player directly through the player UI
  we broadcast to the controller our new state so that the controller
  may optionally respond
  */
  sendStateChange: function (event) {
    var state = event.data
      , ytController = this.get('controller'); 

    ytController._updateState(state);
  },

  handleError: function(event) {
    var ytController = this.get('controller');
    alert('an error occurred with that video');
  },


  /*
  Here we define a ton of observers that react to changes in the controller's
  model and update the ytplayer object for this view accordingly.
  */

  //we observe the state of the controller and determine our view's response
  //by default, the view and controller's state are linked
  stateHasChanged: function () {
    var actionMapping = {
      1: 'playVideo',
      2: 'pauseVideo',
    } 
    var state = this.get('controller._playerState'),
      action = actionMapping[state],
      ytplayer = this.get('ytplayer');

    //sanity checking
    if (!ytplayer) { return; }
    if (!action) { return; }        
    
    //call the appropriate behavior on the youtube player
    ytplayer[action]();
  }.observes('controller._playerState'),

  
  dimensionsHaveChanged: function () {
    var ytplayer = this.get('ytplayer')
      controller = this.get('controller')
      height = controller.get('model.height')
      width = controller.get('model.width');
    
    if (!ytplayer) { return; }    

    //player must be atleast 200x200 and not larger than window
    width = (width < 200) ? 200 : width;
    width = (width > window.width) ? window.width : width;
    height = (height < 200) ? 200 : height;
    height = (height > window.height) ? window.height : height;

    ytplayer.setSize(width, height);
  }.observes('controller.model.height', 'controller.model.width'),


  videoHasChanged: function () {
    var ytplayer = this.get('ytplayer')
      , videoId = this.get('controller.videoId');

    if (!ytplayer) { return; }

    this.get('ytplayer').cueVideoById(videoId);
  }.observes('controller.videoId'),  
  

  //for the moment, if these settings change we create a new yt player
  settingsHaveChanged: function() {
    var ytplayer = this.get('ytplayer');
    
    if (!ytplayer) { return; }  
  
    this.createYoutubePlayer(); 
  }.observes( 'controller.model.autohide', 'controller.model.autoplay',
              'controller.model.controls', 'controller.model.disablekb',
              'controller.model.enablejsapi', 'controller.model.fs',
              'controller.model.iv_load_policy', 
              'controller.model.modestbranding',
              'controller.model.rel', 'controller.model.showinfo' ),


  volumeHasChanged: function () {
    var ytplayer = this.get('ytplayer')
      , volume = this.get('controller.volume');

    if (!ytplayer) { return; }

    //volume must be between 0 and 100
    volume = (volume < 0) ? 0 : volume;
    volume = (volume > 100) ? 100 : volume;
  
    ytplayer.setVolume(volume);
  }.observes('controller.volume'),


  muteHasChanged: function () {
    var ytplayer = this.get('ytplayer')
      , isMuted = this.get('controller.isMuted');

    if (!ytplayer) { return; }

    if (isMuted) { ytplayer.mute(); }
    else { ytplayer.unMute(); }
  }.observes('controller.isMuted'),

  seekPositionHasChanged: function () {
    var ytplayer = this.get('ytplayer')
      , seekPosition = this.get('controller.seekPosition');

    if (!ytplayer) { return; }

    ytplayer.seekTo(seekPosition, true); 
  }.observes('controller.seekPosition'),

});

});
