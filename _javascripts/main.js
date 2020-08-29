// Navbar
var header = document.getElementById("sticky-header");
var list = document.getElementById("item-color");
var bar = document.getElementsByClassName("bar-color");
var logo = document.getElementById("logo-img");
var stickyx = header.offsetTop;

window.onscroll = function() {
	if (window.pageYOffset > stickyx) {
		header.classList.add("sticky");
		list.style.color = "Black";
		var i;
		for (i = 0; i < bar.length; i++) {
			bar[i].style.backgroundColor = "black";
		}
		logo.src = "_assets/logo/logo-black.png"
	  } else {
		header.classList.remove("sticky");
		list.style.color = "White";
		var i;
		for (i = 0; i < bar.length; i++) {
			bar[i].style.backgroundColor = "white";
		}
		logo.src = "_assets/logo/logo.png"
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