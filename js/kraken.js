$(function (window, $, undefined) {
	'use strict';

    for (var i = 0; i < 10; i++) {
        setTimeout(makeBubble, Math.random() * 10 * 1000);
    }

    function makeBubble() {
        var r = Math.random() * 10;
        var x = Math.round(Math.random() * $(document).width());
        var speed = Math.round(Math.random() * 20) + 10 + 's';
        var bubble = $('<div></div>').addClass('bubble');

        bubble.css({
            width: r + 'px',
            height: r + 'px',
            right: x + 'px',
            webkitAnimationDuration: speed,
            mozAnimationDuration: speed,
            animationDuration: speed
        });

        $('.rocks').prepend(bubble);

        bubble
		    .on('animationend webkitAnimationEnd oanimationend msAnimationEnd', function (e) {
		        $(this).remove();
		        makeBubble();
		    })
		    .on('mouseover', function () {
		        $(this).stop().animate({
		            width: 15,
		            opacity: 0
		        }, function () {
		            $(this).remove();
		            makeBubble();
		        });
		    });
    }


}(window, jQuery));
