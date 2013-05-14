window.App = Ember.Application.create();

require('router/Router.js');
require('models/YoutubeModel.js');
require('controllers/YoutubeController.js');
require('views/YoutubeView.js');

App.deferReadiness();

window.onYouTubeIframeAPIReady = function () {
  App.advanceReadiness();
}
