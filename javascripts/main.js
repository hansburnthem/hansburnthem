
var header = document.getElementById("sticky-header");
var list = document.getElementById("item-color");
var bar = document.getElementsByClassName("bar-color");
var logo = document.getElementById("logo-img");
var stickyx = header.offsetTop;
var auto = document.getElementsByClassName("auto-odd");
// err
// var slides = document.getElementsByClassName("mySlides");
// var slideIndex = 1;
// showSlides(slideIndex);

// Automatic Reverse-Post in Odd Number
window.onload = function() {	
	for (let index = 0; index < auto.length; index++) {
		auto[index].classList.add("post-container");
		if(index % 2 != 0) {
			auto[index].classList.add("reverse-post");
		}
	}
}

// Navbar
window.onscroll = function() {
	if (window.pageYOffset > stickyx) {
		header.classList.add("sticky");
		list.style.color = "Black";
		var i;
		for (i = 0; i < bar.length; i++) {
			bar[i].style.backgroundColor = "black";
		}
		logo.src = "assets/logo/logo-black.png"
	  } else {
		header.classList.remove("sticky");
		list.style.color = "White";
		var i;
		for (i = 0; i < bar.length; i++) {
			bar[i].style.backgroundColor = "white";
		}
		logo.src = "assets/logo/logo.png"
	  }
};

// Hamburger Menu
$(".dropdown-btn").on("click", function() {
	var menu = $(".dropdown-menu");
	if(menu.hasClass("show")) menu.removeClass("show");
	else menu.addClass("show")
})

$(window).on("click", function(e) {
	if(!e.target.matches(".dropdown-button") && !e.target.matches(".bar1") && !e.target.matches(".bar2") && !e.target.matches(".bar3")) {
		$(".dropdown-menu").removeClass("show");
	}
})

// err
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   var i;
//   if (n > slides.length) {slideIndex = 1}    
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";  
//   }
//   slides[slideIndex-1].style.display = "block";  
// }
