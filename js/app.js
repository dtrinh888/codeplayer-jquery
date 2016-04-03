$(function(){
	var windowHeight = $(window).height();
	var menuBarHeight = $('#menu-bar').height();
	var codeContainerHeight = windowHeight - menuBarHeight;

	$('.code-container').height(codeContainerHeight + 'px');
});