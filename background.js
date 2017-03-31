chrome.storage.sync.get({
  name
}, function(items) {
  console.log(items);
});
$("body").append('Test');
