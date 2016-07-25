
$(document).ready(function() {


        $("#lightgallery").lightGallery({
            download:false,
            thumbnail:true,
            animateThumb:true,
            // thumbWidth:50,
            // thumbHeight:50,
            subHtmlSelectorRelative: true

        });
 
        $("#lightgallery2").lightGallery({
            download:false,
            thumbnail:true,
            animateThumb:true,
            // thumbWidth:50,
            // thumbHeight:50,
            subHtmlSelectorRelative: true,
            youtubePlayerParams: {
                modestbranding: 1,
                showinfo: 0,
                rel: 0,
                controls: 0
            }

        });

    // ----------------------------------------
    // Fixing the issue where the nav automatically highlights the first section even when
    // we're not on it when loading page at top ...
    if ($(window).scrollTop() === 0) {
        $("li.active").removeClass("active");
    }

    // ----------------------------------------

    $(window).scroll(function() {
        var scrollposition = $(window).scrollTop();
        if (scrollposition > 100) {
            $("nav")[0].style.background ="rgba(34,38,43," + ((-100 + scrollposition)/200 ) + ")";
        } else {
            $("nav")[0].style.background = 'none';
        }
    })


    // ----------------------------------------
    // Masonry gallery grid for whiteboard videos
    $('.grid').masonry({
        // options
        itemSelector: '.grid-item',
        columnWidth: '.grid-sizer',
        percentPosition: true
    });


    // ----------------------------------------
    // Sticky double diamond

    // Setting up diamonds for research section
    var sectionHeightBefore_research = $("#diamonds-1").offset().top - 100; // height of sections before diamonds + nav
    var diamondHeight_research = $("#research-sections").height();
    $("#diamonds-1").css("height", diamondHeight_research);

    // Scroll listener to make them stick
    $(window).scroll(function() {
        // First figure out if its the research or prototyping diamonds
        var diamonds, sectionHeightBefore, diamondHeight;
        diamonds = $(".diamonds").first();
        sectionHeightBefore = sectionHeightBefore_research;
        diamondHeight = diamondHeight_research;

        if( ($(this).scrollTop() > sectionHeightBefore)){
            if (($(this).scrollTop() > (sectionHeightBefore + diamondHeight - 500))) {
                diamonds.removeClass("stick-top"); // scroll past = remove sticky, align bottom
                diamonds.find(".diamond-cont").addClass("stick-bottom");
            } else {
                diamonds.addClass("stick-top");    // scrolling in = sticky
                diamonds.find(".diamond-cont").removeClass("stick-bottom");

                diamonds.find(".diamond-fill").css("height", ($(this).scrollTop() - sectionHeightBefore + 30) + "px");
            }
        } else {
            diamonds.removeClass("stick-top"); // scroll before = remove
            diamonds.find(".diamond-cont").removeClass("stick-bottom");
        }
    });

})

