$(document).ready(function() {
    $(".logo-container .logo").click(function() {
        $("#main-content-page").load("./views/home/home.html");
    });

    $(".about").click(function() {
        $("#main-content-page").load("./views/about/about.html");
    });

    $(".skills").click(function() {
        $("#main-content-page").load("./views/skills/skills.html");
    });

    $(".projects").click(function() {
        $("#main-content-page").load("./views/projects/projects.html");
    });

    $(".contact").click(function() {
        $("#main-content-page").load("./views/contact/contact.html");
    });
});