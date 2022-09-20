exports.func = function() {
  var height = document.getElementsByTagName("html")[0].scrollHeight;
  window.parent.postMessage(["setHeight", height], "*");
};