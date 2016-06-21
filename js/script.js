
$(document).ready(function() {

    // Sticky double diamond
    var sectionHeightBefore = $("#process-intro").height() + 50; // height of sections before diamonds
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