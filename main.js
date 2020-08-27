// Navbar
$(window).on("scroll", function() {
	var pos = $(window).scrollTop();
	if(pos < 400) $("#sticky-header").removeClass("sticky");
	else $("#sticky-header").addClass("sticky");
})

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