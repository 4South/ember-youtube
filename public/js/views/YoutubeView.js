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

    if (!ytplayer) { return }
    
    width = $(window).width() * (4/12);
    height = width * (480/640);
    Ember.run(ytplayer.setSize(width, height)); 
  },

  //when we insert the element, we add our YT player object
  createYoutubePlayer: function () {
    var ytController = this.get('controller');

    //do we have a youtube video model to load?
    if (!ytController.get('model')) { return }
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
    if (!ytplayer) { return }
    if (!action) { return }        
    
    //call the appropriate behavior on the youtube player
    ytplayer[action]();
  }.observes('controller._playerState'),

  
  dimensionsHaveChanged: function () {
    var ytplayer = this.get('ytplayer')
      controller = this.get('controller')
      height = controller.get('model.height')
      width = controller.get('model.width');
    
    if (!ytplayer) { return }    

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

    if (!ytplayer) { return }

    this.get('ytplayer').cueVideoById(videoId);
  }.observes('controller.videoId'),  
  

  //for the moment, if these settings change we create a new yt player
  settingsHaveChanged: function() {
    var ytplayer = this.get('ytplayer');
    
    if (!ytplayer) { return }  
  
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

    if (!ytplayer) { return }

    //volume must be between 0 and 100
    volume = (volume < 0) ? 0 : volume;
    volume = (volume > 100) ? 100 : volume;
  
    ytplayer.setVolume(volume);
  }.observes('controller.volume'),


  muteHasChanged: function () {
    var ytplayer = this.get('ytplayer')
      , isMuted = this.get('controller.isMuted');

    if (!ytplayer) { return }

    if (isMuted) { ytplayer.mute() }
    else { ytplayer.unMute() }
  }.observes('controller.isMuted'),

  seekPositionHasChanged: function () {
    var ytplayer = this.get('ytplayer')
      , seekPosition = this.get('controller.seekPosition');

    if (!ytplayer) { return }

    ytplayer.seekTo(seekPosition, true); 
  }.observes('controller.seekPosition'),

});
