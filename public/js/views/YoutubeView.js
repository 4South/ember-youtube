App.YoutubeView = Ember.View.extend({

  //height and width of the embedded youtube swf
  height: 480,
  width: 640,

  /*
  set a property on the globally available "App" object...
  this is a hack and should be changed
  */
  willInsertElement: function() {
    window.onYouTubePlayerReady = function (id) {
      App.ytControllerRef.set('youtubeReady', true);
    }
  },

  //when we insert the element, we embed the swf object
  didInsertElement: function () {

    var elId = this.get('controller.targetElId');

    window.swfobject.embedSWF(
      this.get('controller.videoSrc'),
      elId,
      this.get('width'), 
      this.get('height'), 
      "10", 
      null, null, 
      { allowScriptAccess: 'always' },
      { id: elId }
    );
  },
});
