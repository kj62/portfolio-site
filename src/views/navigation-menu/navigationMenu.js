$(document).ready(function() {
    $(".logo-container .logo").click(function() {
        $("#main-content").load("./views/home/home.html");
    });

    $(".about").click(function() {
        $("#main-content").load("./views/about/about.html");
    });

    $(".skills").click(function() {
        $("#main-content").load("./views/skills/skills.html");
    });

    $(".projects").click(function() {
        $("#main-content").load("./views/projects/projects.html");
    });

    $(".contact").click(function() {
        $("#main-content").load("./views/contact/contact.html");
    });

    $(".menu-btn").click(function() {
        if ($(".menu-btn").hasClass("close")) {
            $(".menu-btn").removeClass("close");
        } else {
            $(".menu-btn").addClass("close");      
        }
    })
});