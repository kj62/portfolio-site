$(document).ready(function() {
    $(".logo-container .logo").click(function() {
        $("#main-content").load("./views/home/home.html");
    });

    $(".home").click(function() {
        $("#main-content").load("./views/home/home.html");
        $(".menu-btn").removeClass("close");
        $(".menu-dropdown").removeClass("show");
        $("nav.nav-top .field-transparent").removeClass("show");
    });

    $(".about").click(function() {
        $("#main-content").load("./views/about/about.html");
        $(".menu-btn").removeClass("close");
        $(".menu-dropdown").removeClass("show");
        $("nav.nav-top .field-transparent").removeClass("show");
    });

    $(".skills").click(function() {
        $("#main-content").load("./views/skills/skills.html");
        $(".menu-btn").removeClass("close");
        $(".menu-dropdown").removeClass("show");
        $("nav.nav-top .field-transparent").removeClass("show");
    });

    $(".projects").click(function() {
        $("#main-content").load("./views/projects/projects.html");
        $(".menu-btn").removeClass("close");
        $(".menu-dropdown").removeClass("show");
        $("nav.nav-top .field-transparent").removeClass("show");
    });

    $(".contact").click(function() {
        $("#main-content").load("./views/contact/contact.html");
        $(".menu-btn").removeClass("close");
        $(".menu-dropdown").removeClass("show");
        $("nav.nav-top .field-transparent").removeClass("show");
    });

    $(".menu-btn").click(function() {
        if ($(".menu-btn").hasClass("close")) {
            $(".menu-btn").removeClass("close");
            $(".menu-dropdown").removeClass("show");
            $("nav.nav-top .field-transparent").removeClass("show");
        } else {
            $(".menu-btn").addClass("close");
            $(".menu-dropdown").addClass("show");
            $("nav.nav-top .field-transparent").addClass("show");
        }
    })
});