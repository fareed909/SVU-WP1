$(document).ready(function(){
    var pauseInterval = false;

    // set an interval for the slide to run on
    var interval = window.setInterval(rotateSlides, 3000) // Duration until slide changes (3sec)

    function rotateSlides(){
        // Get the first slide and store it
        var $firstSlide = $('#carousel').find('img:first');

        // Get the width of the slide so we know how much to slide by
        var width = $firstSlide.width();

        // Animate the first slide to move to the left the length of the
        // width. Set 1000 (1sec) to be the length of the slide transition.
        $firstSlide.animate({marginLeft: -width}, 1000, function(){
            // Reorder slides - move the $firstSlide after the last slide
            var $lastSlide = $('#carousel').find('img:last')
            $lastSlide.after($firstSlide);

            // Reset slide position to the end of the queue
            $firstSlide.css({marginLeft: 0})
        });
    }

    // Listen for click on arrows
    $('#left-arrow').click(previousSlide);
    $('#right-arrow').click(nextSlide);
    // Listen for click on slide image
    $('.slide-image').click(nextSlide);

    function previousSlide(){
        // Stop the interval from running
        window.clearInterval(interval);
        // Get the current slide
        var $currentSlide = $('#carousel').find('img:first');
        // Get the width of the slide so we know how much to slide by
        var width = $currentSlide.width();
        // Get the previous slide
        var $previousSlide = $('#carousel').find('img:last')
        // Move the previous slide's positition to the front of the queue
        $previousSlide.css({marginLeft: -width})
        $currentSlide.before($previousSlide);
        // Animate to the previous slide
        $previousSlide.animate({marginLeft: 0}, 1000, function(){
            // Resume the interval
            interval = window.setInterval(rotateSlides, 3000);
        });
    }

    function nextSlide(){
        // Stop the interval from running
        window.clearInterval(interval);
        // Get the current slide
        var $currentSlide = $('#carousel').find('img:first');
        // Get the width of the slide so we know how much to slide by
        var width = $currentSlide.width();
        // Animate to the next slide
        $currentSlide.animate({marginLeft: -width}, 1000, function(){
            // Reorder slides - move the $firstSlide after the last slide
            var $lastSlide = $('#carousel').find('img:last')
            $lastSlide.after($currentSlide);
            // Reset slide position to the end of the queue
            $currentSlide.css({marginLeft: 0})
            // Resume the interval
            interval = window.setInterval(rotateSlides, 3000);
        });
    }
});