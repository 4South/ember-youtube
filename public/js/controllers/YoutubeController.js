require('models/YoutubeModel.js');

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
