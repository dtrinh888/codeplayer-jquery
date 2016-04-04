$(function(){
	var windowHeight = $(window).height();
	var menuBarHeight = $('#menu-bar').height();
	var codeContainerHeight = windowHeight - menuBarHeight;

	$('.code-container').height(codeContainerHeight + 'px');

	$('.toggle').click(function(){
		$(this).toggleClass('toggle-selected');

		var activeDiv = $(this).html();

		$('#'+activeDiv.toLowerCase()+'-container').toggle();

		// function for length of selected divs by filtering
		// all css elements with display value not equal to none
		var showingDivs = $('.code-container').filter(function(){
			return($(this).css('display')!="none");
		}).length;

		var windowWidth = 100/showingDivs;

		$('.code-container').css('width', windowWidth+'%');
	});
});