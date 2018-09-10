$(function scrolly(){
     //Keep track of last scroll
     var lastScroll = 0;
     $(window).scroll(function(event){
         //Sets the current scroll position
         var st = $(this).scrollTop();
         //Determines up-or-down scrolling


         if (st > lastScroll){
            //Replace this with your function call for downward-scrolling
           //Maybe some timeout?
          // setTimeout( function () {
           $('.navi-bar').addClass('fixedAtTop');
          // }, 800);
         }else{
           $('.navi-bar').removeClass('fixedAtTop');
         }
         //Updates scroll position
         lastScroll = st;

         if(st == 0){
           $('.navi-bar').removeClass('fixedAtTop');
         }
     });
   $('.navi-bar').hover(function(){
     $(this).removeClass('fixedAtTop');
   });
 });


$(document).ready(function(){
	var contentSection = $('.article-text');
	var navigation = $('.in-page-navi');



	//when a nav link is clicked, smooth scroll to the section
	navigation.on('click', 'a', function(event){
		event.preventDefault(); //prevents previous event
		smoothScroll($(this.hash));
	});

	//update navigation on scroll...
	$(window).on('scroll', function(){
		updateNavigation();
	})
	//...and when the page starts
	updateNavigation();

	/////FUNCTIONS
	function updateNavigation(){
		contentSection.each(function(){
			var sectionName = $(this).attr('id');
			var navigationMatch = $("#anchor-" + sectionName);

			if( ($(this).offset().top < $(window).scrollTop() + window.innerHeight/2) &&
				  ($(this).offset().top + $(this).innerHeight() - window.innerHeight/2 > $(window).scrollTop()) )
				{
					navigationMatch.addClass('anchor-active');
				}else{
				navigationMatch.removeClass('anchor-active');
			}
		});
	}


	function smoothScroll(target){
		$('body,html').animate({
			scrollTop: target.offset().top}, 400);
	}

  $(window).scroll(function(){
      if($(this).scrollTop()>650) {
          $('.article-logo').attr('src','assets/portfolio_logo_old.svg');
      }
      else {
          $('.article-logo').attr('src','assets/portfolio_logo_white.svg');
      }
  })

});
