chrome.storage.sync.get({
  name
}, function(items) {
  let name = items.name;
  let email = items.email;
  let phone = items.phone;
  let company = items.company;
  let linkedin = items.linkedin;
  let twitter = items.twitter;
  let website = items.website;
  let gender = items.gender;
  let race = items.race;
  let veteran = items.veteran;
  let disability = items.disability;
  console.log(name);
  $( "input[name='name']" ).val(name);
});
$("body").append('Test');
