chrome.storage.sync.get({
  name
}, function(items) {
  let name = items.name;
  let email = items.email;
  let phone = items.phone;
  let company = items.company;
  let linkedin = items.linkedin;
  let github = items.github;
  let portfolio = items.portfolio;
  let twitter = items.twitter;
  let website = items.website;
  let gender = items.gender;
  let race = items.race;
  let veteran = items.veteran;
  let disability = items.disability;
  console.log(name);
  $( "input[name='name']" ).val(name);
  $( "input[name='name']" ).val(email);
  $( "input[name='phone']" ).val(phone);
  $("input[name='org']").val(company);
  $("input[name='urls[LinkedIn]']").val(linkedin);
  $("input[name='urls[GitHub]']").val(github);
});
$("body").append('Test');
