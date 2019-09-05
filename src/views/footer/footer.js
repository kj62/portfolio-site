$(document).ready(function() {
    $("a.footer-arrow").click(function() {
        if($("#main-content-page").find("#home-container").length !== 0){
            $("#main-content-page").load("./views/home/home.html");
        }
        else if($("#main-content-page").find("#about-container").length !== 0){
            $("#main-content-page").load("./views/about/about.html");
        }
        else if($("#main-content-page").find("#skills-container").length !== 0){
            $("#main-content-page").load("./views/skills/skills.html");
        }
        else if($("#main-content-page").find("#projects-container").length !== 0){
            $("#main-content-page").load("./views/projects/projects.html");
        }
        else if($("#main-content-page").find("#contact-container").length !== 0){
            $("#main-content-page").load("./views/contact/contact.html");
        }
    });
});