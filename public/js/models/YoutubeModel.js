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

