

$('.openNav').on('click',function(){
   
//   $('.left-side').animate({width:'toggle',paddingInline:'toggle'},1000);
   $('.left-side').css({'display':'block'});
	$('.home-content').animate({width:'70%'},500)
	

});
$('.closebtn').on('click',function(){
   
	$('.left-side').css({'display':'none'});
	$('.home-content').animate({width:'100%'},500)


});

$('.link-item').on('click',function(e){
    let currentancor=$(e.target).attr('href');
    let ancorOffset=$(currentancor).offset().top;
    $('html,body').animate({scrollTop:ancorOffset} , 3000);
   
});
$('.title').on('click',function(e){
    $(e.target).next('.innerDuration').slideToggle(1000);
})


//Down Counter
function makeTimer() {
		let endTime = new Date("23 October 2023 9:56:00 ");			
			endTime = (Date.parse(endTime) / 1000);
			let now = new Date();
			now = (Date.parse(now) / 1000);

			let timeLeft = endTime - now;

			let days = Math.floor(timeLeft / 86400); 
			let hours = Math.floor((timeLeft - (days * 86400)) / 3600);
			let minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
			let seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
  
			if (hours < "10") { hours = "0" + hours; }
			if (minutes < "10") { minutes = "0" + minutes; }
			if (seconds < "10") { seconds = "0" + seconds; }

			$(".day").html(days + "<span> D</span>");
			$(".hour").html(hours + "<span> h</span>");
			$(".minutes").html(minutes + "<span> m</span>");
			$(".seconds").html(seconds + "<span> s</span>");		

	}

	setInterval(function() { makeTimer(); }, 1000);




    // To countdown the remaining Character

    let maxLength = 100;
$('textarea').keyup(function() {
  let length = $(this).val().length;
   length = maxLength-length;
 if(length<=0){
    $('#chars').text("your available character finished");
   }else{
    $('#chars').text(length);
   }
  
});