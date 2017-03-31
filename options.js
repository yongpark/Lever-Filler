function save_options() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var company = document.getElementById('company').value;
    var linkedin = document.getElementById('linkedin').value;
    var github = document.getElementById('github').value;
    var portfolio = document.getElementById('portfolio').value;
    var twitter = document.getElementById('twitter').value;
    var website = document.getElementById('website').value;
    var gender = document.getElementById('gender').value;
    var race = document.getElementById('race').value;
    var veteran = document.getElementById('veteran').value;
    var disability = document.getElementById('disability').value;
    chrome.storage.sync.set({
        name: name,
        email: email,
        phone: phone,
        company: company,
        linkedin: linkedin,
        github: github,
        portfolio: portfolio,
        twitter: twitter,
        website: website,
        gender: gender,
        race: race,
        veteran: veteran,
        disability: disability
    }, function() {
        // Update status to let user know options were saved.
        var status = document.getElementById('status');
        status.textContent = 'Options saved.';
        setTimeout(function() {
            status.textContent = '';
        }, 750);
    });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
    // Use default value color = 'red' and likesColor = true.
    chrome.storage.sync.get({
      name,
      email,
      phone,
      company,
      linkedin,
      github,
      portfolio,
      twitter,
      website,
      gender,
      race,
      veteran,
      disability
    }, function(items) {
      console.log(items);
        document.getElementById('name').value = items.name;
        document.getElementById('email').value = items.email;
        document.getElementById('phone').value = items.phone;
        document.getElementById('company').value = items.company;
        document.getElementById('linkedin').value = items.linkedin;
        document.getElementById('github').value = items.github;
        document.getElementById('portfolio').value = items.portfolio;
        document.getElementById('twitter').value = items.twitter;
        document.getElementById('website').value = items.website;
        document.getElementById('gender').value = items.gender;
        document.getElementById('race').value = items.race;
        document.getElementById('veteran').value = items.veteran;
        document.getElementById('disability').value = items.disability;
    });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);
