$(document).ready(function(){
    $("p.job-desc").on({
        "mouseover": function() {
            $(".about-img").addClass("front");
        },
        "mouseout": function() {
            $(".about-img").removeClass("front");
        }
    });

    $("p.hobby-desc").on({
        "mouseover": function() {
            $(".about-img").addClass("tennis-player");
        },
        "mouseout": function() {
            $(".about-img").removeClass("tennis-player");
        }
    });

    $("p.family-desc").on({
        "mouseover": function() {
            $(".about-img").addClass("family");
        },
        "mouseout": function() {
            $(".about-img").removeClass("family");
        }
    });
});