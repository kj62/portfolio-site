$(document).ready(function(){
    $(".toggle-item").click(function() {
        if(!$(".nice").hasClass("disable")) {
            $(".nice").addClass("disable");
            $(".unique").removeClass("disable");
        }
        else if(!$(".unique").hasClass("disable")) {
            $(".unique").addClass("disable");
            $(".simple").removeClass("disable");
        }
        else if(!$(".simple").hasClass("disable")) {
            $(".simple").addClass("disable");
            $(".nice").removeClass("disable");
        }
    });

    $(".home-img").click(function() {
        if (!$(this).hasClass("incognito-img")) {
            $(this).addClass("incognito-img");
        } else {
            $(this).removeClass("incognito-img");
        }
    });
});