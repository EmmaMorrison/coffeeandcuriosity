
//The below code was to create slide animations that would show and hide the details in the contact details list, on the Contact Us page. However, while the code works, it did not allow for the email and web page links to work. I've kept it in to show some of the jQuery I've been working on...

////JQuery for the hide/show animation on the Contact Us page
$(document).ready(function(){
   $('h3').on('click', function(event) {
       $(this).closest('.outer').find('.inner').slideToggle(800);  
       event.stopPropagation();
       event.preventDefault();
    });
});

    


//JQuery for the slide down animation of the registration form on the Membership page

$('.mainArticle').click('.btn register-button', function(event) {
    event.preventDefault();
    $(this).find('#registerFormDiv').slideDown(800); 
});


//function to confirm users choice when clicking the 'Cancel' button on the Membership page
function cancelRegistration() {
    if(confirm('Do you want to cancel registration?\nPress \'OK\' to go back to the homepage.')===true) {
        window.location.href="index.html";
    } else {
        var e = window.event;
        e.preventDefault();
    }       
}
document.getElementById("cancel").addEventListener('click', cancelRegistration);

//Function for validating the Membership form
function validateForm() {

    var valid = true;
    var fname = document.forms["registerForm"]["firstName"].value;
    var sname = document.forms["registerForm"]["lastName"].value;
    var address = document.forms["registerForm"]["address1"].value;
    var suburb = document.forms["registerForm"]["suburb"].value;
    var pcode = document.forms["registerForm"]["postcode"].value;
    var country = document.forms["registerForm"]["country"].value;
    var phone = document.forms["registerForm"]["contactNumber"].value;
    var email = document.forms["registerForm"]["email"].value;
    var email2 = document.forms["registerForm"]["confirmEmail"].value;

    if (fname == null || fname == "") {
        $('#fnameSpan').html(" Please enter your first name");
        valid = false;
    } else {
        $('#fnameSpan').html("*");
    }

    if (sname == null || sname == "") {
        $('#snameSpan').html(" Please enter your surname");
        valid = false;
    } else {
        $('#snameSpan').html("*");
    }

    if (address == null || address == "") {
        $('#add1Span').html(" Your address is required");
        valid = false;
    } else {
        $('#add1Span').html("*");
    }

    if (suburb == null || suburb == "") {
        $('#suburbSpan').html(" Your suburb is required");
        valid = false;
    } else {
        $('#suburbSpan').html("*");
    }

    if (pcode == null || pcode == "") {
        $('#postcodeSpan').html(" Postcode is required");
        valid = false;
    } else if (!/^[0-9]+$/.test(pcode)) {
        $('#postcodeSpan').html(" Please enter numbers only");
        valid = false;
    } else {
        $("#postcodeSpan").html("*");
    }

    if (country == null || country == "0") {
        $('#countrySpan').html(" Please select your country");
        valid = false;
    } else {
        $('#countrySpan').html("*");
    }

    if (phone == null || phone == "") {
        $('#phonenumSpan').html(" Please enter your phone number");
        valid = false;
    } else if (!/^\D*0(\D*\d){9}\D*$/.test(phone)){
        $('#phonenumSpan').html(" A valid phone number is required");
        valid = false;
    }else {
        $('#phonenumSpan').html("*");
    }

    if (email == null || email == "") {
        $('#emailSpan').html(" Please enter your email");
        valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        $('#emailSpan').html(" Please enter a valid email address");
        valid = false;
    } else {
        $('#emailSpan').html("*");
    }

    if (email2 == "") {
        $('#confirmEmailSpan').html(" Please reenter your email");
        valid = false;
    } else if (email2 != email) {
        $('#confirmEmailSpan').html("This does not match above email");
        valid = false;
    } else { 
        $('#confirmEmailSpan').html("*");
    }      
    return valid;
    
}
//function to submit registration for Membership form, once data is validated, and store it in local storage
function submitRegister() {
    if (validateForm() == true) {
        if ($('#selectTitle').val() == 0) {
            localStorage.setItem('title', "");
        } else {
            localStorage.setItem('title', $('#selectTitle').val());
        }
        localStorage.setItem('fname', $('#firstName').val());
        localStorage.setItem('sname', $('#lastName').val());
        localStorage.setItem('address1', $('#address1').val());
        localStorage.setItem('address2', $('#address2').val());
        localStorage.setItem('suburb', $('#suburb').val());
        localStorage.setItem('postcode', $('#postcode').val());
        localStorage.setItem('country', $('#country').val());
        localStorage.setItem('phone', $('#contactNumber').val());
        localStorage.setItem('email1', $('#email').val());
        window.location = "registerConfirm.html";
    }
    
}
//binding event to the Submit button on the Membership form
$(document).ready(function () {
    $("#register").on('click', submitRegister);

});


//JS to toggle the survey forms visibility
function overlay() {
    el = document.getElementById("surveyFormOverlay");
    el.style.visibility = "visible";
}


//function for validating survey form
var selectedGender;
function validateSurvey() {

    var valid = true;
    var age = document.forms["surveyForm"]["age"].value;
    var gender = $('input:radio[name="gender"]:checked');
    var category = document.forms["surveyForm"]["bookCategory"].value;
    var rating = document.forms["surveyForm"]["rating"].value;
  
    if (age == null || age == "") {
        $('#ageSpan').html(" Please enter your age");
        valid = false;
    } else if (!/^[0-9]+$/.test(age)) {
        $('#ageSpan').html(" Please enter numbers only");
        valid = false;
    } else {
        $('#ageSpan').html("");
    }
    if(gender.length == 0) {
        $('#genderSpan').html(" Please make a selection");
        valid = false;
    } else {
        selectedGender = gender.val();
        $('#genderSpan').html("");
    }
    if (category == "Unselected") {
        $('#categorySpan').html(" Please make a selection");
        valid = false;
    } else {
        $('#categorySpan').html("");
    }
    return valid;

}

function submitSurvey() {
    if (validateSurvey() == true) {
        localStorage.setItem('ageSurvey', $('#age').val());
        localStorage.setItem('genderSurvey', selectedGender);
        localStorage.setItem('categorySurvey', $('#bookCategory').val());
        localStorage.setItem('ratingSurvey', $('#rating').val());
        window.location = "surveyConfirm.html";
    }
}

    $(document).ready(function () {
        $("#submitSurvey").on('click',submitSurvey);

    });

