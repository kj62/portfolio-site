$(document).ready(function(){
    $("p.job-desc").on({
        "click": function() {
            $(".about-img").removeClass('front').removeClass("family").removeClass("tennis-player");
            $('.about-desc').find('.active-txt').removeClass('active-txt');
            $(".about-img").addClass("front");
            $("p.job-desc").addClass("active-txt");
        }
    });

    $("p.hobby-desc").on({
        "click": function() {
            $(".about-img").removeClass("family").removeClass("front");
            $('.about-desc').find('.active-txt').removeClass('active-txt');
            $(".about-img").addClass("tennis-player");
            $("p.hobby-desc").addClass("active-txt");
        },
    });

    $("p.family-desc").on({
        "click": function() {
            $(".about-img").removeClass("front").removeClass("tennis-player");
            $('.about-desc').find('.active-txt').removeClass('active-txt');
            $(".about-img").addClass("family");
            $("p.family-desc").addClass("active-txt");
        }
    });

    $(".mobile-about-img").click(
        function() {
            if ($(this).hasClass("toggle-img")) {
                $(this).removeClass("toggle-img");
            } else {
                $(this).addClass("toggle-img");
            }
        }
    );
});