//function to confirm users choice when clicking the 'Cancel' button on the Membership page
function cancelRegistration() {
    if(confirm('Do you want to go back to the homepage?')===true) {
        window.location.href="Index.html";
    } else {
        var e = window.event;
        e.preventDefault();
    }
}
document.getElementById("cancel").addEventListener('click', cancelRegistration);


// function validateForm() {
//
//     var valid = true;
//     var name = document.forms["contactForm"]["name"].value;
//     var company = document.forms["contactForm"]["company"].value;
//     var email = document.forms["contactForm"]["email"].value;
//
//     if (name == null || name == "") {
//         $('#nameSpan').html(" Please enter your name");
//         valid = false;
//     } else {
//         $('#fnameSpan').html("*");
//     }
//
//     if (sname == null || sname == "") {
//         $('#snameSpan').html(" Please enter your surname");
//         valid = false;
//     } else {
//         $('#snameSpan').html("*");
//     }
//
//
//
//     if (email == null || email == "") {
//         $('#emailSpan').html(" Please enter your email");
//         valid = false;
//     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
//         $('#emailSpan').html(" Please enter a valid email address");
//         valid = false;
//     } else {
//         $('#emailSpan').html("*");
//     }
//
//
//     return valid;
//
// }
