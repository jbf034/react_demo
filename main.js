require.ensure(["./firstScript.js"], function(require){
  var a = require("./firstScript.js");
});
require(["./secondScript.js"], function(require){

});