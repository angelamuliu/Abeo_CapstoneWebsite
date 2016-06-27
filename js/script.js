
$(document).ready(function() {



    // NAV: Change color of scroll to an almost black as I go down
    $(window).scroll( function() {
        var scrollposition = $(window).scrollTop();
        if (scrollposition > 100) {
            $("nav")[0].style.background ="rgba(34,38,43," + ((-100 + scrollposition)/200 ) + ")";
        } else {
            $("nav")[0].style.background = 'none';
        }
    })



    // Sticky double diamond
    var sectionHeightBefore = $("#diamonds").offset().top - 100; // height of sections before diamonds + nav
    var diamondHeight = $("#process-sections").height();
    $("#diamonds").css("height", diamondHeight);

    $(window).scroll(function() {
        if( ($(this).scrollTop() > sectionHeightBefore)){
            if (($(this).scrollTop() > (sectionHeightBefore + diamondHeight - 500))) {
                $("#diamonds").removeClass("stick-top"); // scroll past = remove sticky, align bottom
                $("#diamonds>div").addClass("stick-bottom");
            } else {
                $("#diamonds").addClass("stick-top");    // scrolling in = sticky

                $("#diamonds>div").removeClass("stick-bottom");
            }
        } else {
            $("#diamonds").removeClass("stick-top"); // scroll before = remove
            $("#diamonds>div").removeClass("stick-bottom");
        }
    });

})

