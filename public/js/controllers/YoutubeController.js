App.YoutubeController = Ember.Controller.extend({

  //youtube domain
  domain: "http://www.youtube.com/apiplayer/",
  //id of the targetvideo
  //activate javascript controls if desired
  targetElId: 'ytplayer',  
  youtubeReady: false,

  /*
  inject this controller onto the App object...this is a hack
  to allow our global 'onYoutubeReady' event tell our controller
  that it is loaded/ready for interaction
  */
  init: function () {
    this._super();
    Ember.set('App.ytControllerRef', this);
  },

  //concatenated src url for video
  videoSrc: function () {
    var sourceString = "";

    sourceString += this.get('domain');
    sourceString +="?enablejsapi=1";
    sourceString +="&playerapiid=";
    sourceString +=this.get('targetElId');
    sourceString +="&controls=0";
    sourceString +="&disablekb=1";
    sourceString +="&iv_load_policy=3";
    sourceString +="&rel=0";

    return sourceString;

  }.property('domain', 'targetElId'),

  //if youtubeReady then find element in the DOM
  findElement: function () {
    if (this.get('youtubeReady')) {
      this.set('ytEl', document.getElementById(this.get('targetElId')));
      this.get('ytEl').addEventListener("onStateChange", 
                                        "App.ytControllerRef.handleStateChange", 
                                        false);
    } else {
      this.set('ytEl', null); 
    } 
  }.observes('youtubeReady'),

  /*
  this handles state-change events emitted by the player
  these are useful to control for the user changing the state
  of your player in ways you did not intend
  */
  eventHandlers: {
    0: 'videoEnded',
    1: 'videoBecamePlaying',
    2: 'videoBecamePaused',
    3: 'videoBecameBuffering',
    5: 'videoBecameStopped' 
  },

  handleStateChange: function(state) {
    var handler = this.eventHandlers[state];
    //check if handler exists for state and call if it is defined
    if (handler) {
      if (this[handler]) {
        this[handler].call(this);
      } else {
        throw new Ember.Error("no handler named ", handler, 
                              " found on ", this);
      }
    }
  },

  //called if video has ended 
  videoEnded: function() {
    //do something when a video has loaded and isn't started
    this.set('playerStatus', 'ended');
    return;
  },

  //called if video becomes playing
  videoBecamePlaying: function() {
    //do something if your video became playing
    this.set('playerStatus', 'playing');
    return;
  },

  //called if video becomes paused
  videoBecamePaused: function() {
    //do something if your video became paused 
    this.set('playerStatus', 'paused');
    return;
  },

  //called if video becomes stopped
  videoBecameStopped: function() {
    //do something if your video became stopped 
    this.set('playerStatus', 'stopped');
    return;
  },

  //called if video becomes buffering 
  videoBecameBuffering: function() {
    //do something if your video became stopped 
    this.set('playerStatus', 'buffering');
    return;
  },

  /*
  these methods are intended to be the interface of this controller
  if your app needs to affect the state of the player, it should do 
  so through these methods
  */
  play: function () {
    if (this.get('ytEl')) { this.get('ytEl').playVideo() }
  },
  pause: function () {
    if (this.get('ytEl')) { this.get('ytEl').pauseVideo() }
  },
  stop: function () {
    if (this.get('ytEl')) { this.get('ytEl').stopVideo() }
  },
  mute: function () {
    if (this.get('ytEl')) { this.get('ytEl').mute() }
  },
  unmute: function () {
    if (this.get('ytEl')) { this.get('ytEl').unMute() }
  },
  //seeks to 0seconds
  restart: function() {
    if (this.get('ytEl')) { 
      this.get('ytEl').seekTo(0, true) 
    }
  },

  //seeks to a provided seconds value
  seekTo: function(seconds) {
    if (this.get('ytEl')) { 
      this.get('ytEl').seekTo(seconds, true) 
    }
  },

  //load a video by providing a youtube url
  load: function(url) {
    if (!url) { return }
    this.get('ytEl').loadVideoById(url.split("?v=")[1]); 
  },

});
