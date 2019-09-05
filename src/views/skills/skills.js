$(document).ready(function(){
    const ctxCss = document.getElementById("css-skills-chart").getContext('2d');
    const ctxHtml = document.getElementById("html-skills-chart").getContext('2d');
    const ctxJs = document.getElementById("js-skills-chart").getContext('2d');
    const ctxAngular = document.getElementById("angular-skills-chart").getContext('2d');
    const ctxGulpNpm = document.getElementById("gulp-npm-skills-chart").getContext('2d');
    const ctxGit = document.getElementById("git-skills-chart").getContext('2d');

    const ctxTennis = document.getElementById("tennis-skills-chart").getContext('2d');
    const ctxTravelling = document.getElementById("travelling-skills-chart").getContext('2d');
    const ctxCities = document.getElementById("cities-skills-chart").getContext('2d');
    const ctxMotorization = document.getElementById("motorization-skills-chart").getContext('2d');

    jobSkillsChartHandler(ctxCss, 80, "CSS & Sass");
    jobSkillsChartHandler(ctxJs, 75, "JavaScript & jQuery");
    jobSkillsChartHandler(ctxHtml, 60, "HTML");
    jobSkillsChartHandler(ctxAngular, 65, "Angular 2+");
    jobSkillsChartHandler(ctxGulpNpm, 70, "Gulp & npm");
    jobSkillsChartHandler(ctxGit, 85, "Git (TortoiseGit)");

    privateSkillsChartHandler(ctxTennis, 85, "Tennis");
    privateSkillsChartHandler(ctxTravelling, 70, "Travelling");
    privateSkillsChartHandler(ctxCities, 60, "Cities of the world");
    privateSkillsChartHandler(ctxMotorization, 70, "Motorization");
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

function privateSkillsChartHandler(ctxElement, dataValue, chartLabel) {
    const chart = new Chart(ctxElement, {
        type: 'doughnut',
        data: {
            labels: [chartLabel + " - " + dataValue + "%"],
            datasets: [{
                backgroundColor: [
                    "#fbd786",
                    "rgba(255, 255, 255, 0)"
                ],
                hoverBackgroundColor: [
                    "#fbd786"
                ],
                hoverBorderColor: [
                    "#fbd786",
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