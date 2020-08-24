$(function() {
    $("#index-navigation").append("" +
        // logo
        "<header class=\"w3-row w3-padding-16 w3-hide-small w3-white one-edge-shadow\" style=\"z-index: 2\">\n" +
        "    <div style=\"margin: auto\">\n" +
        "        <a href=\"index.html\"><img class=\"w3-image\" style=\"margin: auto; max-width: 50%; display: block; max-height: 50px\" src=\"content/images/logo.png\"></a>\n" +
        "    </div>\n" +
        "</header>" +

        "<!-- Page header / logo-->\n" +
        "    <header class=\"w3-row w3-padding-16 w3-mobile w3-white one-edge-shadow w3-hide-medium w3-hide-large\">\n" +
        "    <div style=\"margin: auto\">\n" +
        "        <a href=\"index.html\"><img class=\"w3-image\" style=\"margin: auto; max-width: 50%; display: block; max-height: 50px\" src=\"content/images/logo.png\"></a>\n" +
        "    </div>\n" +
        "</header>" +

        // Sub nav
        "<div class=\" w3-white w3-hide-small w3-center w3-small one-edge-shadow\" style='z-index: 2; margin-bottom: 16px'>\n" +
        "    <a href=\"index.html\" class=\"w3-button\">Home</a>\n" +
        "    <div class=\"w3-dropdown-hover\">\n" +
        "        <button class=\"w3-button\">Personal</button>\n" +
        "        <div class=\"w3-dropdown-content w3-bar-block w3-border\">\n" +
        "            <a href=\"html/Music.html\" class=\"w3-bar-item w3-button\">Warp 96</a>\n" +
        "            <a href=\"http://www.manabeadwork.com\" class=\"w3-bar-item w3-button\">Mana Beadwork</a>\n" +
        "            <a href=\"html/MusicVideos.html\" class=\"w3-bar-item w3-button\">Music Videos</a>\n" +
        "            <a href=\"html/FutureProjects.html\" class=\"w3-bar-item w3-button\">Future Projects</a>\n" +
        "        </div>\n" +
        "    </div>\n" +
        "    <div class=\"w3-dropdown-hover\">\n" +
        "        <button class=\"w3-button\">Professional</button>\n" +
        "        <div class=\"w3-dropdown-content w3-bar-block w3-border\">\n" +
        "            <a href=\"html/Research.html\" class=\"w3-bar-item w3-button\">Research</a>\n" +
        "            <a href=\"html/DataAnalytics.html\" class=\"w3-bar-item w3-button\">Data Analytics</a>\n" +
        "            <a href=\"html/WebDesign.html\" class=\"w3-bar-item w3-button\">Web Design</a>\n" +
        "            <a href=\"html/QAEngineer.html\" class=\"w3-bar-item w3-button\">QA Engineer</a>\n" +
        "            <a href=\"html/Service.html\" class=\"w3-bar-item w3-button\">Service</a>\n" +
        "            <a href=\"html/RelevantClasses.html\" class=\"w3-bar-item w3-button\">Relevant Classes</a>\n" +
        "            <a href=\"html/ITSecurity.html\" class=\"w3-bar-item w3-button\">IT Security</a>\n" +
        "            <a href=\"html/Database.html\" class=\"w3-bar-item w3-button\">Database</a>\n" +
        "        </div>\n" +
        "    </div>\n" +
        "    <a href=\"html/Blog.html\" class=\"w3-bar-item w3-button\">Blog</a>\n" +
        "    <a href=\"html/Contact.html\" class=\"w3-bar-item w3-button\">Contact</a>\n" +
        "    <a href=\"html/Experimental.html\" class=\"experimental-small experimental w3-bar-item w3-button\">Experimental</a>\n" +
        "</div>");


    $("#footer").append("" +
        "<div class=\"w3-center w3-padding-24 w3-bar\" style='background-color: #FFAADE; color:white'>A website by Hayden Hoopes</div>\n");
});
