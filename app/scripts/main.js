// $('.example1button').hover(function() {
//     var item = items.map(function(item) 
//   {
//     return item.price;
//   })

//    $(this).addClass("contenthover");
//    $(this).text("Title Goes Here");
//    $(this).css("font-size", $(this).val() + "30px");
//    $(this).css("text-align", $(this).val() + "right");

// });

// $('.box1').mouseout(function() {
//   $(this).text("");
// });
//    $(this).append('<div style="background-image: url('+ clickitem.Images[1].url_170x135 +')" class="box1"></div>')


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

// $('.example4button').mouseout(function() {
//   	$(this).siblings('.example4').text('Go');
// });
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
  	 $(this).siblings('.example6').animate({opacity: 0.5,
    left: "-=50"});
    });
// EXAMPLE 6 END
