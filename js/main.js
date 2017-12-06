$(document).ready(function (){
//gallery page hide show Gallery
// based on what link the user clicks

  var displayGallery = function(whichGallery){
    // hide all galleries no matter what

    $("#photoGallery, #songGallery").hide();
    //select a gallery to displayGallery
    //var toDisplay=document.getElementById("photoGallery");
  //  console.log(toDisplay);
    //display it
    $(whichGallery).show();
  };

  $(".nav-gallery a").on("click",function(event){
    event.preventDefault();
    // get the attribute of "this"
    var clicked = $(this).attr("href");
    console.log(clicked);
    displayGallery(clicked);
  })

  // make an on click function to alert the user with a
  // string relaying thier booking request.

  var date = document.getElementById("date").value ;
  var time = document.getElementById("time").value ;
  var venue = document.getElementById("venue").value;
  var duration = document.getElementById("duration").value;
  var gig = document.getElementById("gig").value;
  var done = document.getElementById("button");
  var email = document.getElementById("email").value;

  //anonymous function to run
  var theOrder = function(){
    //function to create the alert when clicked
    $(done).on("click", function( ){ // get the information in the feilds and alert a string to the DOM
      date = $("#date").val();
      time = $("#time").val();
      duration = $("#duration").val();
      gig = $("#gig").val();
      email = $("#email").val();

        alert( "Thank you!!!! You have sent Suave an invitation as a(n) " + gig +  " for " + date + " at " + time + " for " + duration + ". Expect a confirmation email to " + email + "." )
    });
  };

  theOrder();

});
