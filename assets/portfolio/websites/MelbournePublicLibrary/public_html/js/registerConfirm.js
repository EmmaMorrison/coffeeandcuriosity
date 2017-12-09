

function getMemberNum(min, max) {
    var memNum = Math.random() * (max - min) + min;
    return Math.floor(memNum);
}


$(document).ready(function () {
    $('#memNumSpanRC').html(getMemberNum(102030, 10203040));
    $('#titleSpanRC').html(localStorage.title);
    $('#fnameSpanRC').html(localStorage.fname);
    $('#snameSpanRC').html(localStorage.sname);
    $('#address1SpanRC').html(localStorage.address1);
    $('#address2SpanRC').html(localStorage.address2);
    $('#suburbSpanRC').html(localStorage.suburb);
    $('#pcodeSpanRC').html(localStorage.postcode);
    $('#countrySpanRC').html(localStorage.country);
    $('#phoneSpanRC').html(localStorage.phone);
    $('#emailSpanRC').html(localStorage.email1);
});