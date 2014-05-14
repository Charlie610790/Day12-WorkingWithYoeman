// EXAMPLE 1 BEGIN
$('.example1button').click(function() {
	$(this).siblings('.example1').text('Throw Text On Image');
   // $(this).css("backgound", $(this).val() + "green");
});

$('.example1button').mouseout(function() {
  	$(this).siblings('.example1').text('');
    });
// EXAMPLE 1 END

// EXAMPLE 2 BEGIN
$('.example2button').click(function() {
	$(this).siblings('.example2').css("background", $(this).val() + "#3c4043");
});

$('.example2button').mouseout(function() {
  	$(this).siblings('.example2').css("background", $(this).val() + "#92a3b0");
    });
// EXAMPLE 2 END

// EXAMPLE 3 BEGIN
$('.example3button').click(function() {
	$(this).siblings('.example3').addClass('example3extraclass');
});

$('.example3button').mouseout(function() {
  	  $(this).siblings('.example3').removeClass('example3extraclass');
     });
// EXAMPLE 3 END

// EXAMPLE 4 BEGIN
$('.example4button').click(function() {
	$('.go').after('Red Sox');
});
// EXAMPLE 4 END

// EXAMPLE 5 BEGIN
$('.example5button').click(function() {
	$('.redSox').before('Go');
});
// EXAMPLE 5 END

// EXAMPLE 6 BEGIN
$('.example6button').click(function() {
	$(this).siblings('.example6').animate({opacity: 0.5,
    left: "+=50"});
});
$('.example6button').mouseout(function() {
  	 $(this).siblings('.example6').animate({opacity: 1,
    left: "-=50"});
    });
// EXAMPLE 6 END

// EXAMPLE 7 BEGIN
$('.example7button').click(function() {
  $(this).siblings('.example7').animate({opacity: 0.5,
    left: "+=50"}).delay (1800);
});
$('.example7button').mouseout(function() {
     $(this).siblings('.example7').animate({opacity: 1,
    left: "-=50"}).delay (1800);
    });
// EXAMPLE 7 END

// EXAMPLE 8 BEGIN
$('.example8button').click(function() {
  $('.yankees').empty();
});
// EXAMPLE 8 END

// EXAMPLE 9 BEGIN
$('.example9button').click(function() {
  $('.example9').hide("slow").delay(3600);
});
$('.example9button').click(function() {
  $('.example9').show("slow");
});
// EXAMPLE 9 END

// EXAMPLE 10 BEGIN
$('.example10button').click(function() {
  $('.example10').not(".colorgreen").css( "background", "red");
});
// EXAMPLE 10 END

// EXAMPLE 11 BEGIN
$('.example11button').click(function() {
  $('.example11').prepend('<b>Hello</b>');
});
// EXAMPLE 11 END

// EXAMPLE 12 BEGIN
$('.example12button').click(function() {
  $('.example12').remove();
});
// EXAMPLE 12 END

// EXAMPLE 13 BEGIN
$('.example13button').click(function() {
  $('.example13').children('.child').css("background", $(this).val() + "#89b0ce");
});
// EXAMPLE 13 END

// EXAMPLE 14 BEGIN
$('.example14button').click(function() {
  $('.example14inside').parent('.example14').css("background", $(this).val() + "#89b0ce");
});
// EXAMPLE 14 END

// EXAMPLE 15 BEGIN
$('.example15button').click(function() {
  $('.prevTwo').prev().css("background", $(this).val() + "#89b0ce");
});
// EXAMPLE 15 END