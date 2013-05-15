Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, stack2, hashTypes, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  
  data.buffer.push("Ember-Youtube");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("App Code");
  }

function program5(depth0,data) {
  
  
  data.buffer.push("Router Code");
  }

function program7(depth0,data) {
  
  
  data.buffer.push("Controller Code");
  }

function program9(depth0,data) {
  
  
  data.buffer.push("View Code");
  }

function program11(depth0,data) {
  
  
  data.buffer.push("Model Code");
  }

  data.buffer.push("<div class=\"container-fluid\">\n\n  <header class=\"navbar navbar-fixed-top\">\n    <div class=\"navbar-inner\">\n      <ul class=\"nav\">\n        <li>");
  hashTypes = {};
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo),stack1 ? stack1.call(depth0, "youtube", options) : helperMissing.call(depth0, "linkTo", "youtube", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("</li>\n        <li>");
  hashTypes = {};
  options = {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo),stack1 ? stack1.call(depth0, "youtube.ytapp", options) : helperMissing.call(depth0, "linkTo", "youtube.ytapp", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("</li>\n        <li>");
  hashTypes = {};
  options = {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["STRING"],hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo),stack1 ? stack1.call(depth0, "youtube.ytrouter", options) : helperMissing.call(depth0, "linkTo", "youtube.ytrouter", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("</li>\n        <li>");
  hashTypes = {};
  options = {hash:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["STRING"],hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo),stack1 ? stack1.call(depth0, "youtube.ytcontroller", options) : helperMissing.call(depth0, "linkTo", "youtube.ytcontroller", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("</li>\n        <li>");
  hashTypes = {};
  options = {hash:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["STRING"],hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo),stack1 ? stack1.call(depth0, "youtube.ytview", options) : helperMissing.call(depth0, "linkTo", "youtube.ytview", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("</li>\n        <li>");
  hashTypes = {};
  options = {hash:{},inverse:self.noop,fn:self.program(11, program11, data),contexts:[depth0],types:["STRING"],hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo),stack1 ? stack1.call(depth0, "youtube.ytmodel", options) : helperMissing.call(depth0, "linkTo", "youtube.ytmodel", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("</li>\n        <li><a href=\"https://github.com/4South/ember-youtube\">\n          Ember-Youtube on Github\n        </a></li>\n      </ul>\n      ");
  hashTypes = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.outlet),stack1 ? stack1.call(depth0, "header", options) : helperMissing.call(depth0, "outlet", "header", options))));
  data.buffer.push("\n    </div>\n  </header>\n\n  <section class=\"row-fluid middle\">\n    <div class=\"span4 player\">\n      ");
  hashTypes = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.outlet),stack1 ? stack1.call(depth0, "player", options) : helperMissing.call(depth0, "outlet", "player", options))));
  data.buffer.push("\n    </div>\n    <div class=\"span8 code\">\n      ");
  hashTypes = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.outlet),stack1 ? stack1.call(depth0, "code", options) : helperMissing.call(depth0, "outlet", "code", options))));
  data.buffer.push("\n    </div>\n\n  <footer class=\"navbar navbar-fixed-bottom\">\n    <div class=\"navbar-inner\">\n      ");
  hashTypes = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.outlet),stack1 ? stack1.call(depth0, "footer", options) : helperMissing.call(depth0, "outlet", "footer", options))));
  data.buffer.push("\n    </div>\n  </footer>\n\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["source/application/Application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  


  data.buffer.push("<pre><code>window.App = Ember.Application.create();\n\nrequire(<span class=\"string\">'router/Router.js'</span>);\nrequire(<span class=\"string\">'models/YoutubeModel.js'</span>);\nrequire(<span class=\"string\">'controllers/YoutubeController.js'</span>);\nrequire(<span class=\"string\">'views/YoutubeView.js'</span>);\n</code></pre>");
  
});

Ember.TEMPLATES["source/controllers/YoutubeController"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  


  data.buffer.push("<pre><code>require(<span class=\"string\">'models/YoutubeModel.js'</span>);\n\n<span class=\"comment\">/*\nThis state manager represents the current state of associated\nvideos playing through connected/associated views\nNOTE: this may not represent the viewers actual state\nif the application allows the controller to drive in unison\notherwise autonomous views\n*/</span>\nApp.YoutubeStateManager = Ember.StateManager.extend({\n\n  initialState: <span class=\"string\">'noplayer'</span>,\n  noplayer: Ember.State.extend(),\n  ready: Ember.State.extend(),\n  ended: Ember.State.extend(),\n  playing: Ember.State.extend(),\n  paused: Ember.State.extend(),\n  buffering: Ember.State.extend(),\n\n  changeState: <span class=\"function\"><span class=\"keyword\">function</span> <span class=\"params\">(manager, controller, state, stateName)</span> {</span>\n    manager.transitionTo(stateName);    \n    controller.set(<span class=\"string\">'_playerState'</span>, state);\n  },\n\n});\n\n\nApp.YoutubeController = Ember.ObjectController.extend({\n\n  youtubeReady: <span class=\"literal\">false</span>,\n  \n  <span class=\"comment\">//volume attrs</span>\n  isMuted: <span class=\"literal\">false</span>,\n  volume: <span class=\"number\">50</span>,\n  volumeChoices: [<span class=\"number\">0</span>, <span class=\"number\">10</span>, <span class=\"number\">20</span>, <span class=\"number\">30</span>, <span class=\"number\">40</span>, <span class=\"number\">50</span>, <span class=\"number\">60</span>, <span class=\"number\">70</span>, <span class=\"number\">80</span>, <span class=\"number\">90</span>, <span class=\"number\">100</span>],\n  \n  <span class=\"comment\">//attributes related to form inputs</span>\n  newVideoUrl: <span class=\"string\">\"\"</span>,\n  videoId: <span class=\"string\">\"Ga99hMi7wfY\"</span>,\n  formSeekPosition: <span class=\"number\">0</span>,\n  seekPosition: <span class=\"number\">0</span>,\n\n\n  <span class=\"comment\">/*\n  these methods are the intended interface for the rest of your app\n  these methods simply send messages to the state machine which in turn\n  transitions and changes the '_playerState' attribute on this controller\n  */</span>\n  play: <span class=\"function\"><span class=\"keyword\">function</span> <span class=\"params\">()</span> {</span> <span class=\"keyword\">this</span>._updateState(<span class=\"number\">1</span>); },\n\n  pause: <span class=\"function\"><span class=\"keyword\">function</span> <span class=\"params\">()</span> {</span> <span class=\"keyword\">this</span>._updateState(<span class=\"number\">2</span>); },\n\n  stop: <span class=\"function\"><span class=\"keyword\">function</span> <span class=\"params\">()</span> {</span> <span class=\"keyword\">this</span>._updateState(<span class=\"number\">5</span>); }, \n\n  mute: <span class=\"function\"><span class=\"keyword\">function</span> <span class=\"params\">()</span> {</span> <span class=\"keyword\">this</span>.set(<span class=\"string\">'isMuted'</span>, <span class=\"literal\">true</span>); },\n\n  unmute: <span class=\"function\"><span class=\"keyword\">function</span> <span class=\"params\">()</span> {</span> <span class=\"keyword\">this</span>.set(<span class=\"string\">'isMuted'</span>, <span class=\"literal\">false</span>); },\n\n\n  seekTo: <span class=\"keyword\">function</span>(seconds) { \n    <span class=\"keyword\">this</span>.set(<span class=\"string\">'seekPosition'</span>, <span class=\"keyword\">this</span>.get(<span class=\"string\">'formSeekPosition'</span>));\n  },\n\n  restart: <span class=\"function\"><span class=\"keyword\">function</span> <span class=\"params\">()</span> {</span>\n    <span class=\"keyword\">this</span>.set(<span class=\"string\">'seekPosition'</span>, <span class=\"number\">0</span>);\n  },\n\n  <span class=\"comment\">//load a video by providing a youtube url</span>\n  load: <span class=\"keyword\">function</span>(url) {\n    <span class=\"keyword\">var</span> model = <span class=\"keyword\">this</span>.get(<span class=\"string\">'model'</span>)\n      , id;\n\n    <span class=\"keyword\">if</span> (url === <span class=\"string\">\"\"</span>) { <span class=\"keyword\">return</span> }\n    <span class=\"keyword\">if</span> (url.indexOf(<span class=\"string\">\"youtube.com\"</span>) === -<span class=\"number\">1</span>) { <span class=\"keyword\">return</span>; }\n    \n    id = <span class=\"keyword\">this</span>.get(<span class=\"string\">'newVideoUrl'</span>).split(<span class=\"string\">'='</span>)[<span class=\"number\">1</span>];\n\n    <span class=\"keyword\">this</span>.set(<span class=\"string\">'videoId'</span>, id);\n  },\n\n  <span class=\"comment\">/*\n  if you override these calls be sure to call this._super()\n  */</span>\n  <span class=\"comment\">//called when the video is ready for playing</span>\n  onReady: <span class=\"keyword\">function</span>() { <span class=\"keyword\">this</span>.set(<span class=\"string\">'youtubeReady'</span>, <span class=\"literal\">true</span>); },\n\n  <span class=\"comment\">//called if video has ended </span>\n  onEnded: <span class=\"keyword\">function</span>() {},\n\n  <span class=\"comment\">//called if video becomes playing</span>\n  onPlaying: <span class=\"keyword\">function</span>() {},\n\n  <span class=\"comment\">//called if video becomes paused</span>\n  onPaused: <span class=\"keyword\">function</span>() {},\n\n  <span class=\"comment\">//called if video becomes stopped</span>\n  onStopped: <span class=\"keyword\">function</span>() {},\n\n  <span class=\"comment\">//called if video becomes buffering </span>\n  onBuffering: <span class=\"keyword\">function</span>() {},\n\n\n  <span class=\"comment\">/*\n  The entire state machine should NOT be overridden.  If you want to interact\n  with the youtube player/players, do so by using the public api methods such \n  as 'play', 'pause', 'seek' etc\n  */</span>\n  <span class=\"comment\">//maps emitted youtube player states to human-readable names </span>\n  _stateMapping: {\n    <span class=\"string\">'-1'</span>: <span class=\"string\">'ready'</span>,\n    <span class=\"number\">0</span>: <span class=\"string\">'ended'</span>,\n    <span class=\"number\">1</span>: <span class=\"string\">'playing'</span>,\n    <span class=\"number\">2</span>: <span class=\"string\">'paused'</span>,\n    <span class=\"number\">3</span>: <span class=\"string\">'buffering'</span>,\n  },\n\n  _stateManager: App.YoutubeStateManager.create(), \n\n  <span class=\"comment\">//never change this directly</span>\n  _playerState: <span class=\"literal\">null</span>,\n\n  _updateState: <span class=\"function\"><span class=\"keyword\">function</span> <span class=\"params\">(state)</span> {</span>\n    <span class=\"keyword\">var</span> stateName = <span class=\"keyword\">this</span>.get(<span class=\"string\">'_stateMapping'</span>)[state];\n\n    <span class=\"keyword\">this</span>.get(<span class=\"string\">'_stateManager'</span>).send(<span class=\"string\">'changeState'</span>, <span class=\"keyword\">this</span>, state, stateName);\n  }, \n\n  <span class=\"comment\">//this observer will listen for changes in state and trigger methods</span>\n  _listenForStateChange: <span class=\"function\"><span class=\"keyword\">function</span> <span class=\"params\">()</span> {</span>\n    <span class=\"keyword\">var</span> state = <span class=\"keyword\">this</span>.get(<span class=\"string\">'_playerState'</span>)\n      , stateName = <span class=\"keyword\">this</span>.get(<span class=\"string\">'_stateMapping'</span>)[state]\n      , methodName;\n\n    <span class=\"comment\">//sanity checking incase this state doesn't exist or youtube isnt ready</span>\n    <span class=\"keyword\">if</span> (!stateName) { <span class=\"keyword\">return</span> }\n  \n    methodName = <span class=\"string\">\"on\"</span> + Ember.String.capitalize(stateName);\n\n    <span class=\"keyword\">this</span>.send(methodName); \n  }.observes(<span class=\"string\">'_playerState'</span>),\n\n});\n</code></pre>");
  
});

Ember.TEMPLATES["source/models/YoutubeModel"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  


  data.buffer.push("<pre><code><span class=\"comment\">/*\nthis is a video model.  the youtube controller instance in your app\nshould have its content set to one of these\nyoutubeview instances will look for data from this object to create the player\n*/</span>\nApp.YoutubeModel = Ember.Object.extend({\n\n  height: <span class=\"number\">480</span>,\n  width: <span class=\"number\">640</span>,\n  videoUrl: <span class=\"string\">\"\"</span>,\n  autohide: <span class=\"number\">1</span>,\n  autoplay: <span class=\"number\">0</span>,\n  controls: <span class=\"number\">0</span>,\n  disablekb: <span class=\"number\">1</span>,\n  enablejsapi: <span class=\"number\">1</span>,\n  fs: <span class=\"number\">0</span>,\n  iv_load_policy: <span class=\"number\">3</span>,\n  modestbranding: <span class=\"number\">1</span>,\n  rel: <span class=\"number\">0</span>,\n  showinfo: <span class=\"number\">0</span>,\n\n});\n\n</code></pre>");
  
});

Ember.TEMPLATES["source/router/Router"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  


  data.buffer.push("<pre><code>App.Router.map( <span class=\"function\"><span class=\"keyword\">function</span> <span class=\"params\">()</span> {</span>\n\n  <span class=\"keyword\">this</span>.resource(<span class=\"string\">'youtube'</span>, <span class=\"function\"><span class=\"keyword\">function</span> <span class=\"params\">()</span> {</span>\n    <span class=\"keyword\">this</span>.route(<span class=\"string\">'ytcontroller'</span>, { path: <span class=\"string\">\"/ytcontroller\"</span> });\n    <span class=\"keyword\">this</span>.route(<span class=\"string\">'ytview'</span>, { path: <span class=\"string\">\"/ytview\"</span> });\n    <span class=\"keyword\">this</span>.route(<span class=\"string\">'ytmodel'</span>, { path: <span class=\"string\">\"/ytmodel\"</span> });\n    <span class=\"keyword\">this</span>.route(<span class=\"string\">'ytrouter'</span>, { path: <span class=\"string\">\"/ytrouter\"</span> });\n    <span class=\"keyword\">this</span>.route(<span class=\"string\">'ytapp'</span>, { path: <span class=\"string\">\"/ytapp\"</span> });\n  });\n\n});\n\nApp.IndexRoute = Ember.Route.extend({\n  redirect: <span class=\"function\"><span class=\"keyword\">function</span> <span class=\"params\">()</span> {</span>\n    <span class=\"keyword\">this</span>.replaceWith(<span class=\"string\">'youtube'</span>);\n  },\n});\n\nApp.YoutubeIndexRoute = Ember.Route.extend({\n\n  renderTemplate: <span class=\"function\"><span class=\"keyword\">function</span> <span class=\"params\">(controller, model)</span> {</span>\n    <span class=\"keyword\">this</span>.render(<span class=\"string\">\"youtube-index\"</span>, {\n      into: <span class=\"string\">'application'</span>,\n      outlet: <span class=\"string\">'code'</span>,\n    });\n  },\n\n});\n\nApp.YoutubeRoute = Ember.Route.extend({\n\n  model: <span class=\"function\"><span class=\"keyword\">function</span> <span class=\"params\">(params)</span> {</span>\n    <span class=\"keyword\">return</span> App.YoutubeModel.create({\n      videoUrl: <span class=\"string\">\"http://www.youtube.com/watch?v=XjTSpgAm8QM\"</span>,\n    });\n  },  \n  \n  renderTemplate: <span class=\"function\"><span class=\"keyword\">function</span> <span class=\"params\">(controller, model)</span> {</span>\n    <span class=\"keyword\">this</span>.render(<span class=\"string\">\"youtube\"</span>, {\n      into: <span class=\"string\">'application'</span>,\n      outlet: <span class=\"string\">'player'</span>,\n      controller: controller\n    });\n\n    <span class=\"keyword\">this</span>.render(<span class=\"string\">\"youtube-controls\"</span>, {\n      into: <span class=\"string\">'application'</span>,\n      outlet: <span class=\"string\">'footer'</span>,\n      controller: <span class=\"string\">'youtube'</span>\n    });\n  },\n\n});\n\nApp.YoutubeYtcontrollerRoute = Ember.Route.extend({\n\n  renderTemplate: <span class=\"function\"><span class=\"keyword\">function</span> <span class=\"params\">(controller, model)</span> {</span>\n    <span class=\"keyword\">this</span>.render(<span class=\"string\">\"source/controllers/YoutubeController\"</span>, {\n      into: <span class=\"string\">'application'</span>,\n      outlet: <span class=\"string\">'code'</span>,\n    }); \n  },\n\n});\n\nApp.YoutubeYtviewRoute = Ember.Route.extend({\n\n  renderTemplate: <span class=\"function\"><span class=\"keyword\">function</span> <span class=\"params\">(controller, model)</span> {</span>\n    <span class=\"keyword\">this</span>.render(<span class=\"string\">\"source/views/YoutubeView\"</span>, {\n      into: <span class=\"string\">'application'</span>,\n      outlet: <span class=\"string\">'code'</span>,\n    }); \n  },\n\n});\n\nApp.YoutubeYtmodelRoute = Ember.Route.extend({\n\n  renderTemplate: <span class=\"function\"><span class=\"keyword\">function</span> <span class=\"params\">(controller, model)</span> {</span>\n    <span class=\"keyword\">this</span>.render(<span class=\"string\">\"source/models/YoutubeModel\"</span>, {\n      into: <span class=\"string\">'application'</span>,\n      outlet: <span class=\"string\">'code'</span>,\n    }); \n  },\n\n});\n\nApp.YoutubeYtrouterRoute = Ember.Route.extend({\n\n  renderTemplate: <span class=\"function\"><span class=\"keyword\">function</span> <span class=\"params\">(controller, model)</span> {</span>\n    <span class=\"keyword\">this</span>.render(<span class=\"string\">\"source/router/Router\"</span>, {\n      into: <span class=\"string\">'application'</span>,\n      outlet: <span class=\"string\">'code'</span>,\n    }); \n  },\n\n});\n\nApp.YoutubeYtappRoute = Ember.Route.extend({\n\n  renderTemplate: <span class=\"function\"><span class=\"keyword\">function</span> <span class=\"params\">(controller, model)</span> {</span>\n    <span class=\"keyword\">this</span>.render(<span class=\"string\">\"source/application/Application\"</span>, {\n      into: <span class=\"string\">'application'</span>,\n      outlet: <span class=\"string\">'code'</span>,\n    }); \n  },\n\n});\n</code></pre>");
  
});

Ember.TEMPLATES["source/views/ApplicationView"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  


  data.buffer.push("<pre><code></code></pre>");
  
});

Ember.TEMPLATES["source/views/YoutubeView"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  


  data.buffer.push("<pre><code><span class=\"comment\">/*\nThis class is responsible for loading the youtubeplayer api\nand spawning an instance of a ytplayer object\nIt listens to changes on its controller's attributes to \naffect the ytplayer object\n*/</span>\nApp.YoutubeView = Ember.View.extend({\n\n  iframeId: <span class=\"string\">\"ytplayer\"</span>,\n  classNames: [<span class=\"string\">'fixedplayer'</span>],\n\n  <span class=\"comment\">//called before this element is to be inserted into the DOM</span>\n  didInsertElement: <span class=\"function\"><span class=\"keyword\">function</span> <span class=\"params\">()</span> {</span>\n    <span class=\"keyword\">var</span> self = <span class=\"keyword\">this</span>\n      , $window = Ember.$(window);\n\n    <span class=\"keyword\">this</span>.createYoutubePlayer();\n\n    <span class=\"comment\">//set jquery event to handle window resize</span>\n    $window.resize(self.resizeListener.bind(self));\n   \n    <span class=\"comment\">//call once to set correct size </span>\n    self.resizeListener();\n  },\n\n  <span class=\"comment\">//called when view is being removed</span>\n  willDestroyElement: <span class=\"function\"><span class=\"keyword\">function</span> <span class=\"params\">()</span> {</span>\n    <span class=\"keyword\">var</span> $window = Ember.$(window);\n\n    <span class=\"comment\">//nullify the ytplayer instance</span>\n    <span class=\"keyword\">this</span>.set(<span class=\"string\">'ytplayer'</span>, <span class=\"literal\">null</span>);\n    \n    <span class=\"comment\">//remove jquery listener</span>\n    $window.unbind(<span class=\"string\">'resize'</span>, <span class=\"keyword\">this</span>.resizeListener);    \n    \n  },\n\n  <span class=\"comment\">//this function responds to window resize</span>\n  resizeListener: <span class=\"function\"><span class=\"keyword\">function</span> <span class=\"params\">()</span> {</span>\n    <span class=\"keyword\">var</span> ytplayer = <span class=\"keyword\">this</span>.get(<span class=\"string\">'ytplayer'</span>)\n      , height\n      , width;\n\n    <span class=\"keyword\">if</span> (!ytplayer) { <span class=\"keyword\">return</span>; }\n    \n    width = $(window).width() * (<span class=\"number\">4</span>/<span class=\"number\">12</span>);\n    height = width * (<span class=\"number\">480</span>/<span class=\"number\">640</span>);\n    ytplayer.setSize(width, height); \n  },\n\n  <span class=\"comment\">//when we insert the element, we add our YT player object</span>\n  createYoutubePlayer: <span class=\"function\"><span class=\"keyword\">function</span> <span class=\"params\">()</span> {</span>\n    <span class=\"keyword\">var</span> ytController = <span class=\"keyword\">this</span>.get(<span class=\"string\">'controller'</span>);\n\n    <span class=\"comment\">//do we have a youtube video model to load?</span>\n    <span class=\"keyword\">if</span> (!ytController.get(<span class=\"string\">'model'</span>)) { <span class=\"keyword\">return</span>; }\n    <span class=\"keyword\">var</span> model = ytController.get(<span class=\"string\">'model'</span>)\n      , iframeId = <span class=\"keyword\">this</span>.get(<span class=\"string\">'iframeId'</span>)\n      , iframe = document.getElementById(iframeId);\n\n    <span class=\"keyword\">var</span> yt = <span class=\"keyword\">new</span> YT.Player(iframe, {\n      events: {\n        onReady: <span class=\"keyword\">this</span>.sendStateChange.bind(<span class=\"keyword\">this</span>),\n        onStateChange: <span class=\"keyword\">this</span>.sendStateChange.bind(<span class=\"keyword\">this</span>),\n        onError: <span class=\"keyword\">this</span>.handleError.bind(<span class=\"keyword\">this</span>),\n      }, \n    });\n  \n    <span class=\"keyword\">this</span>.set(<span class=\"string\">'ytplayer'</span>, yt);\n\n  },\n\n  \n  <span class=\"comment\">/*\n  this handles state-change events emitted by the player\n  these are useful to control for the user changing the state\n  of your player directly through the player UI\n  we broadcast to the controller our new state so that the controller\n  may optionally respond\n  */</span>\n  sendStateChange: <span class=\"function\"><span class=\"keyword\">function</span> <span class=\"params\">(event)</span> {</span>\n    <span class=\"keyword\">var</span> state = event.data\n      , ytController = <span class=\"keyword\">this</span>.get(<span class=\"string\">'controller'</span>); \n\n    ytController._updateState(state);\n  },\n\n  handleError: <span class=\"keyword\">function</span>(event) {\n    <span class=\"keyword\">var</span> ytController = <span class=\"keyword\">this</span>.get(<span class=\"string\">'controller'</span>);\n    alert(<span class=\"string\">'an error occurred with that video'</span>);\n  },\n\n\n  <span class=\"comment\">/*\n  Here we define a ton of observers that react to changes in the controller's\n  model and update the ytplayer object for this view accordingly.\n  */</span>\n\n  <span class=\"comment\">//we observe the state of the controller and determine our view's response</span>\n  <span class=\"comment\">//by default, the view and controller's state are linked</span>\n  stateHasChanged: <span class=\"function\"><span class=\"keyword\">function</span> <span class=\"params\">()</span> {</span>\n    <span class=\"keyword\">var</span> actionMapping = {\n      <span class=\"number\">1</span>: <span class=\"string\">'playVideo'</span>,\n      <span class=\"number\">2</span>: <span class=\"string\">'pauseVideo'</span>,\n    } \n    <span class=\"keyword\">var</span> state = <span class=\"keyword\">this</span>.get(<span class=\"string\">'controller._playerState'</span>),\n      action = actionMapping[state],\n      ytplayer = <span class=\"keyword\">this</span>.get(<span class=\"string\">'ytplayer'</span>);\n\n    <span class=\"comment\">//sanity checking</span>\n    <span class=\"keyword\">if</span> (!ytplayer) { <span class=\"keyword\">return</span>; }\n    <span class=\"keyword\">if</span> (!action) { <span class=\"keyword\">return</span>; }        \n    \n    <span class=\"comment\">//call the appropriate behavior on the youtube player</span>\n    ytplayer[action]();\n  }.observes(<span class=\"string\">'controller._playerState'</span>),\n\n  \n  dimensionsHaveChanged: <span class=\"function\"><span class=\"keyword\">function</span> <span class=\"params\">()</span> {</span>\n    <span class=\"keyword\">var</span> ytplayer = <span class=\"keyword\">this</span>.get(<span class=\"string\">'ytplayer'</span>)\n      controller = <span class=\"keyword\">this</span>.get(<span class=\"string\">'controller'</span>)\n      height = controller.get(<span class=\"string\">'model.height'</span>)\n      width = controller.get(<span class=\"string\">'model.width'</span>);\n    \n    <span class=\"keyword\">if</span> (!ytplayer) { <span class=\"keyword\">return</span>; }    \n\n    <span class=\"comment\">//player must be atleast 200x200 and not larger than window</span>\n    width = (width &lt; <span class=\"number\">200</span>) ? <span class=\"number\">200</span> : width;\n    width = (width &gt; window.width) ? window.width : width;\n    height = (height &lt; <span class=\"number\">200</span>) ? <span class=\"number\">200</span> : height;\n    height = (height &gt; window.height) ? window.height : height;\n\n    ytplayer.setSize(width, height);\n  }.observes(<span class=\"string\">'controller.model.height'</span>, <span class=\"string\">'controller.model.width'</span>),\n\n\n  videoHasChanged: <span class=\"function\"><span class=\"keyword\">function</span> <span class=\"params\">()</span> {</span>\n    <span class=\"keyword\">var</span> ytplayer = <span class=\"keyword\">this</span>.get(<span class=\"string\">'ytplayer'</span>)\n      , videoId = <span class=\"keyword\">this</span>.get(<span class=\"string\">'controller.videoId'</span>);\n\n    <span class=\"keyword\">if</span> (!ytplayer) { <span class=\"keyword\">return</span>; }\n\n    <span class=\"keyword\">this</span>.get(<span class=\"string\">'ytplayer'</span>).cueVideoById(videoId);\n  }.observes(<span class=\"string\">'controller.videoId'</span>),  \n  \n\n  <span class=\"comment\">//for the moment, if these settings change we create a new yt player</span>\n  settingsHaveChanged: <span class=\"keyword\">function</span>() {\n    <span class=\"keyword\">var</span> ytplayer = <span class=\"keyword\">this</span>.get(<span class=\"string\">'ytplayer'</span>);\n    \n    <span class=\"keyword\">if</span> (!ytplayer) { <span class=\"keyword\">return</span>; }  \n  \n    <span class=\"keyword\">this</span>.createYoutubePlayer(); \n  }.observes( <span class=\"string\">'controller.model.autohide'</span>, <span class=\"string\">'controller.model.autoplay'</span>,\n              <span class=\"string\">'controller.model.controls'</span>, <span class=\"string\">'controller.model.disablekb'</span>,\n              <span class=\"string\">'controller.model.enablejsapi'</span>, <span class=\"string\">'controller.model.fs'</span>,\n              <span class=\"string\">'controller.model.iv_load_policy'</span>, \n              <span class=\"string\">'controller.model.modestbranding'</span>,\n              <span class=\"string\">'controller.model.rel'</span>, <span class=\"string\">'controller.model.showinfo'</span> ),\n\n\n  volumeHasChanged: <span class=\"function\"><span class=\"keyword\">function</span> <span class=\"params\">()</span> {</span>\n    <span class=\"keyword\">var</span> ytplayer = <span class=\"keyword\">this</span>.get(<span class=\"string\">'ytplayer'</span>)\n      , volume = <span class=\"keyword\">this</span>.get(<span class=\"string\">'controller.volume'</span>);\n\n    <span class=\"keyword\">if</span> (!ytplayer) { <span class=\"keyword\">return</span>; }\n\n    <span class=\"comment\">//volume must be between 0 and 100</span>\n    volume = (volume &lt; <span class=\"number\">0</span>) ? <span class=\"number\">0</span> : volume;\n    volume = (volume &gt; <span class=\"number\">100</span>) ? <span class=\"number\">100</span> : volume;\n  \n    ytplayer.setVolume(volume);\n  }.observes(<span class=\"string\">'controller.volume'</span>),\n\n\n  muteHasChanged: <span class=\"function\"><span class=\"keyword\">function</span> <span class=\"params\">()</span> {</span>\n    <span class=\"keyword\">var</span> ytplayer = <span class=\"keyword\">this</span>.get(<span class=\"string\">'ytplayer'</span>)\n      , isMuted = <span class=\"keyword\">this</span>.get(<span class=\"string\">'controller.isMuted'</span>);\n\n    <span class=\"keyword\">if</span> (!ytplayer) { <span class=\"keyword\">return</span>; }\n\n    <span class=\"keyword\">if</span> (isMuted) { ytplayer.mute(); }\n    <span class=\"keyword\">else</span> { ytplayer.unMute(); }\n  }.observes(<span class=\"string\">'controller.isMuted'</span>),\n\n  seekPositionHasChanged: <span class=\"function\"><span class=\"keyword\">function</span> <span class=\"params\">()</span> {</span>\n    <span class=\"keyword\">var</span> ytplayer = <span class=\"keyword\">this</span>.get(<span class=\"string\">'ytplayer'</span>)\n      , seekPosition = <span class=\"keyword\">this</span>.get(<span class=\"string\">'controller.seekPosition'</span>);\n\n    <span class=\"keyword\">if</span> (!ytplayer) { <span class=\"keyword\">return</span>; }\n\n    ytplayer.seekTo(seekPosition, <span class=\"literal\">true</span>); \n  }.observes(<span class=\"string\">'controller.seekPosition'</span>),\n\n});\n</code></pre>");
  
});

Ember.TEMPLATES["youtube-controls"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, hashTypes, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, hashTypes, options;
  data.buffer.push("\n  <form class=\"navbar-form pull-left\">\n\n    <button class=\"btn btn-primary\" ");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "play", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n      <i class=\"icon-play icon-white\"></i>\n    </button>\n\n    <button class=\"btn btn-primary\" ");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "pause", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n      <i class=\"icon-pause icon-white\"></i>\n    </button>\n\n    ");
  hashTypes = {'contentBinding': "STRING",'valueBinding': "STRING",'classNames': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Select", {hash:{
    'contentBinding': ("volumeChoices"),
    'valueBinding': ("volume"),
    'classNames': ("span1")
  },contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push("\n\n    <button class=\"btn btn-primary\" ");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "mute", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n      <i class=\"icon-volume-off icon-white\"></i>\n    </button>\n\n    <button class=\"btn btn-primary\" ");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "unmute", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n      <i class=\"icon-volume-up icon-white\"></i>\n    </button>\n\n    <button class=\"btn btn-primary\" ");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "restart", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n      <i class=\"icon-repeat icon-white\"></i>\n    </button>\n\n    ");
  hashTypes = {'value': "ID",'placeholder': "STRING",'classNames': "STRING",'type': "STRING"};
  options = {hash:{
    'value': ("formSeekPosition"),
    'placeholder': ("time(s)"),
    'classNames': ("span1"),
    'type': ("text")
  },contexts:[],types:[],hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n    <button class=\"btn btn-primary\" ");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "seekTo", "formSeekPosition", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n      <i class=\"icon-eye-open icon-white\"></i>\n      seek\n    </button>\n\n    ");
  hashTypes = {'value': "ID",'placeholder': "STRING",'type': "STRING",'classNames': "STRING"};
  options = {hash:{
    'value': ("newVideoUrl"),
    'placeholder': ("youtube video url"),
    'type': ("text"),
    'classNames': ("span3")
  },contexts:[],types:[],hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n    <button class=\"btn btn-primary\" ");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "load", "newVideoUrl", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n      <i class=\"icon-globe icon-white\"></i>\n      load\n    </button>\n    \n  </form>\n");
  return buffer;
  }

  hashTypes = {};
  stack1 = helpers['if'].call(depth0, "youtubeReady", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["youtube-index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  


  data.buffer.push("<div class=\"hero-unit\">\n  <h1>Ember-Youtube</h1>\n  <h3>JS-driven youtube players wrapped in Emberisms</h3>\n  <p> The javascript code is available as links in the header of this page.\n      The syntax-highlighted source files are automatically produced by a \n      custom grunt.js task that is soon-to-be-released.\n  <p>\n    <a class=\"btn btn-warning btn-large\">\n      ember-youtube on github\n    </a>\n  </p>\n  <footer>\n    Steve Kane \n    <a href=\"http://twitter.com/stv_kn\">@stv_kn</a>\n    4South Studios\n  </footer>\n</div>\n");
  
});

Ember.TEMPLATES["youtube"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', hashTypes, escapeExpression=this.escapeExpression;


  data.buffer.push("<iframe type=\"text/html\"\n  frameborder=0\n  ");
  hashTypes = {'id': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'id': ("view.iframeId")
  },contexts:[],types:[],hashTypes:hashTypes,data:data})));
  data.buffer.push("\n  ");
  hashTypes = {'width': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'width': ("controller.content.width")
  },contexts:[],types:[],hashTypes:hashTypes,data:data})));
  data.buffer.push("\n  ");
  hashTypes = {'height': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'height': ("controller.content.height")
  },contexts:[],types:[],hashTypes:hashTypes,data:data})));
  data.buffer.push("\n  src=\"http://www.youtube.com/embed/Ga99hMi7wfY?enablejsapi=1&autohide=1&autoplay=0&controls=0&disablekb=1&fs=0&iv_load_policy=3&modestbranding=1&rel=0&showinfo=0\"\n>\n</iframe>\n");
  return buffer;
  
});