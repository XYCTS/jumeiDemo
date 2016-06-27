 window.onload = function() {

   $('.h_bottom_l li a').click(function(event) {
     $(this).addClass('selected');
     $(this).parent().siblings().children().removeClass('selected');
   });
   $('.nav li a').click(function(){
   	 $(this).addClass('actived');
     $(this).parent().siblings().children().removeClass('actived');
   })
 }
