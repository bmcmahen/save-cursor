var selection = window.getSelection;

/**
 * save cursor pos/selection
 */

exports.save = function(){
  return selection().getRangeAt(0);
};

/**
 * restore cursor pos/selection
 */

exports.restore = function(range){
  var s = selection();
  s.removeAllRanges();
  s.addRange(range);
};

module.exports = exports;
