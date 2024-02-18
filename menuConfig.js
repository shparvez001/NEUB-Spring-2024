var currentSemester="Summer 2021";
var siteTitle="NEUB Summer 2021 Midterm and Semester Final Assignments";
var homeLink="/NEUB-Summer-2021/";
var mainSiteLink="http://neub.shparvez.net";
var mainSiteName="Course Website";

document.title=siteTitle;
document.getElementById("homeLink").href=homeLink;
document.getElementById("navbar-brand").href=homeLink;
document.getElementById("mainSiteLink").href=mainSiteLink;
document.getElementById("mainSiteLink").title=mainSiteName;
document.getElementById("mainSiteLink").innerText=mainSiteName;
document.getElementById("menuItems").innerHTML+='<li><a id="questionsLink" title="Questions"  href="questions.html">Questions</a></li>'
