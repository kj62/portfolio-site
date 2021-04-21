$(document).ready(function(){
    const ctxCss = document.getElementById("css-skills-chart").getContext('2d');
    const ctxHtml = document.getElementById("html-skills-chart").getContext('2d');
    const ctxJs = document.getElementById("js-skills-chart").getContext('2d');
    const ctxAngular = document.getElementById("angular-skills-chart").getContext('2d');
    const ctxVue = document.getElementById("vue-skills-chart").getContext('2d');
    const ctxUIRWD = document.getElementById("ui-rwd-skills-chart").getContext('2d');
    const ctxGulpNpm = document.getElementById("gulp-npm-skills-chart").getContext('2d');
    const ctxGit = document.getElementById("git-skills-chart").getContext('2d');

    jobSkillsChartHandler(ctxCss, 80, "CSS & Sass");
    jobSkillsChartHandler(ctxJs, 65, "JavaScript & jQuery");
    jobSkillsChartHandler(ctxHtml, 70, "HTML");
    jobSkillsChartHandler(ctxAngular, 75, "Angular + UI libs");
    jobSkillsChartHandler(ctxVue, 45, "VueJS");
    jobSkillsChartHandler(ctxUIRWD, 75, "UI and RWD");
    jobSkillsChartHandler(ctxGulpNpm, 70, "Gulp & npm");
    jobSkillsChartHandler(ctxGit, 90, "Git (TortoiseGit)");
});


function jobSkillsChartHandler(ctxElement, dataValue, chartLabel) {
    const chart = new Chart(ctxElement, {
        type: 'doughnut',
        data: {
            labels: [chartLabel + " - " + dataValue + "%"],
            datasets: [{
                backgroundColor: [
                    "rgba(255, 121, 26, 1)",
                    "rgba(255, 255, 255, 0)"
                ],
                hoverBackgroundColor: [
                    "rgba(255, 121, 26, 1)"
                ],
                hoverBorderColor: [
                    "rgba(255, 121, 26, 1)",
                    "#FFF"
                ],
                data: [dataValue, 100 - dataValue]
            }]
        },
        options: {
            legend: {
                labels: {
                    fontColor: "#FFF",
                    fontSize: 20
                },
                onClick: (e) => e.stopPropagation()
            },
            cutoutPercentage: 70,
            tooltips: {
                filter: function(item, data) {
                    var label = data.labels[item.index];
                    if (label) return item;
                }
            }
        }
    });
}
