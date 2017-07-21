$(document).ready(function (){

    $('#contactForm').on('submit', submitContactForm);
});
function submitContactForm (){
    event.preventDefault();
    var x = $('#email')[0];
    var y = $("#name").val();
    var z = $('#city').val();
   
    if (y == "") {
        alert("Name must be filled");
        return false;
    } else if (x =="") {
        alert("Email must be filled")
    }
      else if( z== ""){
        alert("City must be filled")
      
    } else {
        $(this).fadeOut();
        $("#success").fadeIn();
    //alert("Thank you for contacting us!")
    }
}