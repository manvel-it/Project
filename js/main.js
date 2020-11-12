// side-menu

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

// navbar animation

$(window).scroll(function(){
	if($(document).scrollTop()>30){
		$('.top-menu').addClass('nav-color');
	}
	else{
		$('.top-menu').removeClass('nav-color');
	}
});


$(window).scroll(function(){
	if($(document).scrollTop()>30){
		$('.another-menu').addClass('another-color');
	}
	else{
		$('.another-menu').removeClass('another-color');
	}
});

// post

x=false

$('#read').click(function(){
	if (x==false) {
		$('.lorem').show(1000);
		x=true;
	}
	else{
		$('.lorem').hide(1000);
		x=false;
	}
})


// scroll to top btn

$(window).scroll(function(){
	if($(document).scrollTop()>50){
		$('.go').addClass('go-block');
	}
	else{
		$('.go').removeClass('go-block');
	}
});


// scroll to top animation

$(document).ready(function(){
    $('.scrollToTop').click(function(){
        $('html, body').animate({scrollTop : 0},1000);
        return false;
    });

});

 $(document).ready(function() { 
    $(".scrollToBottom").click(function() { 
        $("html, body").animate({ 
            scrollTop: $( 
              'html, body').get(0).scrollHeight 
        }, 2000); 
    }); 
});

// blog

y=false

$("#post").click(function(){
	if(y==false){
		$('.post-2').show(500);
		$('.post-3').show(500);
		y=true;
	}
	else{
		$('.post-2').hide(500);
		$('.post-3').hide(500);
		y=false;
	}
})

z=false

$("#post-1").click(function(){
	if(z==false){
		$('.post-4').show(500);
		$('.post-5').show(500);
		z=true;
	}
	else{
		$('.post-4').hide(500);
		$('.post-5').hide(500);
		z=false;
	}
})