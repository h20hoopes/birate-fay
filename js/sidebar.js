$(function() {
    $("#sidebar").append("" +
        "<nav class=\"w3-hide-large w3-bar-block w3-white w3-collapse w3-top w3-hide-medium\" style=\"z-index:3;width:250px;display: none\" id=\"mySidebar\">\n" +
        "    <div class=\"w3-sidebar\">\n" +
        "        <div class=\"w3-container ws3-display-container w3-padding-16\">\n" +
        "            <i onclick=\"w3_close()\" class=\"fa fa-remove w3-hide-large w3-button w3-display-topright\"></i>\n" +
        "            <h3 class=\"\"><b>About Me</b></h3>\n" +
        "        </div>\n" +
        "        <div class=\"w3-large w3-text-grey\" style=\"font-weight:bold\">\n" +
        "            <a href=\"../index.html\" class=\"w3-bar-item w3-button\">Home</a>\n" +
        "            <a onclick=\"open_personal()\" href=\"javascript:void(0)\" class=\"w3-button w3-block w3-white w3-left-align\">Personal <i class=\"fa fa-caret-down\"></i></a>\n" +
        "            <div id=\"personal\" class=\"w3-bar-block w3-hide w3-padding-large w3-medium\">\n" +
        "                <a href=\"Music.html\" class=\"w3-bar-item w3-button\">Music</a>\n" +
        "                <a href=\"http://www.manabeadwork.com\" class=\"w3-bar-item w3-button\">Mana Beadwork</a>\n" +
        "                <a href=\"MusicVideos.html\" class=\"w3-bar-item w3-button\">Music Videos</a>\n" +
        "                <a href=\"FutureProjects.html\" class=\"w3-bar-item w3-button\">Future Projects</a>\n" +
        "            </div>\n" +
        "            <a onclick=\"open_professional()\" href=\"javascript:void(0)\" class=\"w3-button w3-block w3-white w3-left-align\">Professional <i class=\"fa fa-caret-down\"></i></a>\n" +
        "            <div id=\"professional\" class=\"w3-bar-block w3-hide w3-padding-large w3-medium\">\n" +
        "                <a href=\"Research.html\" class=\"w3-bar-item w3-button\">Research</a>\n" +
        "                <a href=\"DataAnalytics.html\" class=\"w3-bar-item w3-button\">Data Analytics</a>\n" +
        "                <a href=\"WebDesign.html\" class=\"w3-bar-item w3-button\">Web Design</a>\n" +
        "                <a href=\"QAEngineer.html\" class=\"w3-bar-item w3-button\">QA Engineer</a>\n" +
        "                <a href=\"Service.html\" class=\"w3-bar-item w3-button\">Service</a>\n" +
        "                <a href=\"RelevantClasses.html\" class=\"w3-bar-item w3-button\">Relevant Classes</a>\n" +
        "                <a href=\"ITSecurity.html\" class=\"w3-bar-item w3-button\">IT Security</a>\n" +
        "                <a href=\"Database.html\" class=\"w3-bar-item w3-button\">Database</a>\n" +
        "            </div>\n" +
        "        </div>\n" +
        "        <a href=\"Blog.html\" class=\"w3-bar-item w3-button w3-padding\">Blog</a>\n" +
        "        <a href=\"Contact.html\" class=\"w3-bar-item w3-button w3-padding\">Contact</a>\n" +
        "        <a href=\"Experimental.html\" class=\"w3-bar-item w3-button w3-padding\">Experimental</a>\n" +
        "    </div>\n" +
        "</nav>\n");
});