function save_options() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var company = document.getElementById('company').value;
    var linkedin = document.getElementById('linkedin').value;
    var twitter = document.getElementById('twitter').value;
    var website = document.getElementById('website').value;
    chrome.storage.sync.set({
        name: name,
        email: email,
        phone: phone,
        company: company,
        linkedin: linkedin,
        twitter: twitter,
        website: website
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
      twitter,
      website
    }, function(items) {
        document.getElementById('name').value = items.name;
        document.getElementById('email').value = items.email;
        document.getElementById('phone').value = items.phone;
        document.getElementById('company').value = items.company;
        document.getElementById('linkedin').value = items.linkedin;
        document.getElementById('twitter').value = items.twitter;
        document.getElementById('website').value = items.website;
    });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);
