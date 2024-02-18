var currentSemester="Spring 2024";
var siteTitle="NEUB Spring 2024 Assignments";
var homeLink="/NEUB-Spring-2024/";
var mainSiteLink="http://neub.shparvez.net";
var mainSiteName="Course Website";

document.title=siteTitle;
document.getElementById("homeLink").href=homeLink;
document.getElementById("navbar-brand").href=homeLink;
document.getElementById("mainSiteLink").href=mainSiteLink;
document.getElementById("mainSiteLink").title=mainSiteName;
document.getElementById("mainSiteLink").innerText=mainSiteName;
document.getElementById("menuItems").innerHTML+='<li><a id="questionsLink" title="Questions"  href="questions.html">Questions</a></li>'
