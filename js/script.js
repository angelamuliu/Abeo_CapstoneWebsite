
$(document).ready(function() {

    // ----------------------------------------
    // NAV: Change color of scroll to an almost black as I go down

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

    var sectionHeightBefore_design = $("#diamonds-2").offset().top - 100; // height of sections before diamonds + nav
    var diamondHeight_design = $("#design-sections").height();
    $("#diamonds-2").css("height", diamondHeight_design);

    // Scroll listener to make them stick
    $(window).scroll(function() {
        console.log($(window).scrollTop());
        // First figure out if its the research or prototyping diamonds
        var diamonds, sectionHeightBefore, diamondHeight;
        if ( $(window).scrollTop() < 3000 )  {
            diamonds = $(".diamonds").first();
            sectionHeightBefore = sectionHeightBefore_research;
            diamondHeight = diamondHeight_research;
        } else {
            diamonds = $(".diamonds").last();
            sectionHeightBefore = sectionHeightBefore_design;
            diamondHeight = diamondHeight_design;
        }

        if( ($(this).scrollTop() > sectionHeightBefore)){
            if (($(this).scrollTop() > (sectionHeightBefore + diamondHeight - 500))) {
                diamonds.removeClass("stick-top"); // scroll past = remove sticky, align bottom
                diamonds.find(".diamond-cont").addClass("stick-bottom");
            } else {
                diamonds.addClass("stick-top");    // scrolling in = sticky
                diamonds.find(".diamond-cont").removeClass("stick-bottom");
            }
        } else {
            diamonds.removeClass("stick-top"); // scroll before = remove
            diamonds.find(".diamond-cont").removeClass("stick-bottom");
        }
    });

})

