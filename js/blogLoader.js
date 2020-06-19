//  This will populate the dropdown menu
{
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            var parser, xmlDoc, numArts;

            parser = new DOMParser();
            xmlDoc = parser.parseFromString(this.responseText,"text/xml");

            articleTitles = xmlDoc.getElementsByTagName("title");
            console.log(articleTitles);

            for (numArts = 0; numArts < articleTitles.length; numArts++) {
                document.getElementById("blog-select").innerHTML += "<option class='w3-bar-item w3-button' id='blog" +
                    numArts + "' value='" + numArts + "'>" + articleTitles[numArts].childNodes[0].nodeValue + "</option>";
            }
        }
    };
    xhttp.open("GET", "../content/text/blogsite.xml", true);
    xhttp.send();
}
