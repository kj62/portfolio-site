$(document).ready(function() {
    $("a.footer-arrow").click(function() {
        if($("#main-content").find("#home-container").length !== 0){
            $("#main-content").load("./views/home/home.html");
        }
        else if($("#main-content").find("#about-container").length !== 0){
            $("#main-content").load("./views/about/about.html");
        }
        else if($("#main-content").find("#skills-container").length !== 0){
            $("#main-content").load("./views/skills/skills.html");
        }
        else if($("#main-content").find("#projects-container").length !== 0){
            $("#main-content").load("./views/projects/projects.html");
        }
        else if($("#main-content").find("#contact-container").length !== 0){
            $("#main-content").load("./views/contact/contact.html");
        }
    });
});