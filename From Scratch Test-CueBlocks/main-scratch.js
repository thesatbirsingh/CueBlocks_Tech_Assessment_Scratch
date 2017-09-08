// fullscreen navigation menu script
$(document).ready(function(){
	$('.navbr-btn').click(function(){
		$('#nav-icon').toggleClass('open');
		$(this).toggleClass('navIconn', 'slow');
		$('#myNav').toggleClass('myNav');
		$('#inVerr').toggleClass('inVer');
		$('#nav-icon').toggleClass('inVer');
		$('#nav-icon span').toggleClass('inVer');
	});
});

// navigation menu script for hover effect
var lFolX = 0,
    lFolY = 0,
    x1 = 0,
    y1 = 0,
    x2 = 0,
    y2 = 0,
    friction = 1 / 30;

function moveBackground() {
  x1 += (lFolX - x1) * friction;
  y1 += (lFolY - y1) * friction;
  x2 += (lFolX - 4*x2) * friction;
  y2 += (lFolY - 4*y2) * friction;

  translate1 = 'translate(' + x1 + 'px, ' + y1 + 'px) scale(1.2)';
  translate2 = 'translate(' + x2 + 'px, ' + y2 + 'px) scale(1)';

  $('.overlay').css({
    '-webit-transform': translate1,
    '-moz-transform': translate1,
    'transform': translate1
  });
  $('.overlay-content').css({
    '-webit-transform': translate2,
    '-moz-transform': translate2,
    'transform': translate2
  });

  window.requestAnimationFrame(moveBackground);
}

$(window).on('mousemove click', function(e) {

  var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
  var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
  lFolX = (20 * lMouseX) / 100;
  lFolY = (10 * lMouseY) / 100;

});

moveBackground();
