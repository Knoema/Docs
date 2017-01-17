$(function() {
	$("body").scrollspy({ target: "#docs-subnavbar" });
	var t = 20;
	$("#docs-navbar, #docs-subnavbar").affix({ offset: { top: function () {
		return $("#docs-subnavbar").parent().offset().top - t;
	}, bottom: 400 } }), $(".collapse").on("hidden.bs.collapse", function () {
		$(this).parent().addClass("collapsed"), $(this).parent().removeClass("expanded");
	}).on("shown.bs.collapse", function () {
		$(this).parent().addClass("expanded"), $(this).parent().removeClass("collapsed");
	}), $("#small-nav-dropdown").change(function () {
		window.location = this.value;
	});
});