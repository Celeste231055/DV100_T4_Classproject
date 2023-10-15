$(document).ready(function() {
    
    //-------------------------------------------------------------------------------------
    //sign up form
    //when form is submitted prevent default behavior. Do this instead.

    $('#signUp').submit(function(event) {

        event.preventDefault();

        if(this.checkValidity() === false) {
            event.stopPropagation();
        } else {
            // add stuff to local storage here
            window.location.href = '../pages/browse.html';
        }

        $(this).addClass('was-validated');
    });
});