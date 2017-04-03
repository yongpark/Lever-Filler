jQuery.fn.exists = function(){ return this.length > 0; };
if ($('.content-wrapper.application-page').exists()){

  chrome.storage.sync.get(null, function(items) {
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
    $( "input[name='name']" ).val(name);
    $( "input[name='email']" ).val(email);
    $( "input[name='phone']" ).val(phone);
    $("input[name='org']").val(company);
    $("input[name='urls[LinkedIn]']").val(linkedin);
    $("input[name='urls[GitHub]']").val(github);
    $("input[name='urls[Portfolio]']").val(portfolio);
    $("input[name='urls[Twitter]']").val(twitter);
    $("input[name='urls[Other]']").val(website);
    $("select[name='eeo[gender]']").val(gender);
    $("select[name='eeo[race]']").val(race);
    $("select[name='eeo[veteran]']").val(veteran);
    $("select[name='eeo[disability]']").val(disability);
  });
}


//
// chrome.storage.sync.get({
//   name,
//   email
// }, function(items) {
//   let name = items.name;
//   let email = items.email;
//   let phone = items.phone;
//   let company = items.company;
//   let linkedin = items.linkedin;
//   let github = items.github;
//   let portfolio = items.portfolio;
//   let twitter = items.twitter;
//   let website = items.website;
//   let gender = items.gender;
//   let race = items.race;
//   let veteran = items.veteran;
//   let disability = items.disability;
//   console.log(items);
//   $( "input[name='name']" ).val(name);
//   $( "input[name='email']" ).val(email);
//   $( "input[name='phone']" ).val(phone);
//   $("input[name='org']").val(company);
//   $("input[name='urls[LinkedIn]']").val(linkedin);
//   $("input[name='urls[GitHub]']").val(github);
// });
