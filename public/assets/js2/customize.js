
 

 
 
$(document).ready(function() {
	  var owl = $('#banner_slider');
	  owl.owlCarousel({
		margin: 0,
		autoplay:true,
		dots: true,
		nav: false,
		center: false,
		loop: true,
		navText : ['<i class="bi bi-chevron-left"></i>','<i class="bi bi-chevron-right"></i>'],
		autoplayHoverPause:true,
		responsive: {
		  0: {
			items: 1
		  },
		  600: {
			items: 1
		  },
		  1000: {
			items: 1
		  }
		}
	})

	var owl = $('#collections,#collections-2');
	  owl.owlCarousel({
		margin: 50,
		autoplay:true,
		dots: false,
		nav: true,
		center: false,
		loop: true,
		navText : ['<i class="bi bi-chevron-left"></i>','<i class="bi bi-chevron-right"></i>'],
		autoplayHoverPause:true,
		responsive: {
		  0: {
			items: 2
		  },
		  600: {
			items: 3
		  },
		  1000: {
			items: 4
		  }
		}
	})

	var owl = $('#topsellers');
	  owl.owlCarousel({
		margin: 20,
		autoplay:true,
		dots: true,
		nav: true,
		center: false,
		loop: true,
		navText : ['<i class="bi bi-chevron-left"></i>','<i class="bi bi-chevron-right"></i>'],
		autoplayHoverPause:true,
		responsive: {
		  0: {
			items: 1
		  },
		  600: {
			items: 3
		  },
		  1000: {
			items: 4
		  }
		}
	})

	var owl = $('#shop_by_gender');
	  owl.owlCarousel({
		margin: 30,
		autoplay:true,
		dots: true,
		nav: true,
		center: false,
		loop: false,
		navText : ['<i class="bi bi-chevron-left"></i>','<i class="bi bi-chevron-right"></i>'],
		autoplayHoverPause:true,
		responsive: {
		  0: {
			items: 1
		  },
		  600: {
			items: 2
		  },
		  1000: {
			items: 3
		  }
		}
	})

	var owl = $('#exclusive');
	  owl.owlCarousel({
		margin: 30,
		autoplay:true,
		dots: true,
		nav: true,
		center: false,
		loop: false,
		navText : ['<i class="bi bi-chevron-left"></i>','<i class="bi bi-chevron-right"></i>'],
		autoplayHoverPause:true,
		responsive: {
		  0: {
			items: 2
		  },
		  600: {
			items: 3
		  },
		  1000: {
			items: 4
		  }
		}
	})
});

//------- Owl Carousel End ---------//




function pauseVideo() {
	document.getElementById('video-style').pause();
	document.querySelector('.pause').style.display = 'none';
	document.querySelector('.pause').style.zIndex = '0';

	document.querySelector('.play').style.display = 'block';
	document.querySelector('.play').style.zIndex = '1';
}
// playVideo End;
