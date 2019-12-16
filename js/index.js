$(window).on("load", function() {
  $("#start")
    .delay(500)
    .fadeOut("slow", function() {
      $(this).remove();
    });
});

function initMap() {
  var pict = { lat: 18.4575421, lng: 73.8486396 };
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: pict
  });
  var marker = new google.maps.Marker({
    position: pict,
    map: map
  });
}

$(document).ready(function() {
  // Add smooth scrolling to all links
  $("a").on("click", function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top
        },
        800,
        function() {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    } // End if
  });
});

$(document).ready(function() {
  $(".icon").click(function() {
    $(".nav-hide").show();
    $(".nav-links").addClass("animated fadeInUp");
    $(".menu").hide();
    $(".close").show();
  });

  $(".close").click(function() {
    $(".nav-hide").hide(200);
    $(".menu").show();
  });

  $(".nav-menu a").click(function() {
    $(".nav-hide").hide(200);
    $(".menu").show();
  });
});
