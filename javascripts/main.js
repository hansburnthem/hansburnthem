
var header = document.getElementById("sticky-header");
var list = document.getElementById("item-color");
var bar = document.getElementsByClassName("bar-color");
var logo = document.getElementById("logo-img");
var stickyx = header.offsetTop;
var auto = document.getElementsByClassName("auto-odd");
// iniliasisasi variable slide image
// slideIndex = total berapa slideshow jika 3 [1,1,1]
var slideIndex = [1,1];
// sildeId = nampung nama class yang dipake slideshow
var slideId = ["Slides1", "Slides2"]


// Automatic Reverse-Post in Odd Number
window.onload = function() {	
	// inisialisasi selalu depannya 1 dan no index yang terdapat di slideIndex [1, x]
	showSlides(1, 0);
	showSlides(1, 1);
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

// Image Slider
function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  var i;
  var slides = document.getElementsByClassName(slideId[no]);
  if (n > slides.length) {slideIndex[no] = 1}   
  if (n < 1) {slideIndex[no] = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex[no]-1].style.display = "block";  
}
