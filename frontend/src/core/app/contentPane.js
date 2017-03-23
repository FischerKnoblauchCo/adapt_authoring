// LICENCE https://github.com/adaptlearning/adapt_authoring/blob/master/LICENSE
define(function(require) {
  var Origin = require('core/app/origin');
  var ContentPaneView = require('./views/contentPaneView');

  var contentPaneView;

  Origin.contentPane = {
    setView: function(ViewClass, options) {
      contentPaneView.setView(new ViewClass(options));
    }
  };

  Origin.on('app:dataReady', function() {
    contentPaneView = new ContentPaneView();
    $('.app-inner').append(contentPaneView.$el);
  });
});
