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
$('.example1button').click(function(clickitem) {
	$(this).siblings('.example1').text('Throw Text On Image');
   // $(this).css("backgound", $(this).val() + "green");
   })

$('.example1button').mouseout(function() {
  	$(this).siblings('.example1').text('');
});
// EXAMPLE 1 END

// EXAMPLE 2 BEGIN
$('.example2button').click(function(clickitem) {
	$(this).siblings('.example2').css("background", $(this).val() + "#3c4043")
   })
$('.example2button').mouseout(function() {
  	$(this).siblings('.example2').css("background", $(this).val() + "#92a3b0");
});
// EXAMPLE 2 END

// EXAMPLE 3 BEGIN
$('.example3button').click(function(clickitem) {
	$(this).siblings('.example3').addClass('example2extraclass');
   });

// EXAMPLE 3 END

