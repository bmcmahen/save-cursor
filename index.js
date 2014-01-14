var selection = window.getSelection();

/**
 * save cursor pos/selection
 */

exports.save = function(){
  if (selection.getRangeAt && selection.rangeCount){
   exports.savedRange = selection.getRangeAt(0);   
  }
};

/**
 * restore cursor pos/selection
 */

exports.restore = function(){
  if (exports.savedRange){
    selection.removeAllRanges();
    selection.addRange(exports.savedRange);
  }
};

module.exports = exports;