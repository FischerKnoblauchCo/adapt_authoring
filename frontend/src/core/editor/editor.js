// LICENCE https://github.com/adaptlearning/adapt_authoring/blob/master/LICENSE
define(function(require) {
  var Origin = require('core/app/origin');
  var EditorData = require('./global/editorDataLoader');
  // load in the submodules
  require([
    './article/index',
    './block/index',
    './component/index',
    './config/index',
    './contentObject/index',
    './course/index',
    './extensions/index',
    './menuSettings/index',
    './theme/index'
  ]);
  // loads editor data
  Origin.on('app:dataReady login:changed', EditorData.preload);
  Origin.on('router:editor editor:refreshData', EditorData.load);
  Origin.on('editor:resetData', EditorData.reset);
});
