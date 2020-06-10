function extract(url, elementid) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            // Typical action to be performed when the document is ready:
            parse(this, elementid);
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}

function parse(xml, elementid) {
    // Initialize variables
    var year, month, day, title, author, body, image;
    var x, i, xmlDoc, txt;
    text = xml.responseText; // problem is that responseXML isn't working
    parser = new DOMParser();
    xmlDoc = parser.parseFromString(text,"text/xml");

    txt = "";
    year = xmlDoc.getElementsByTagName("year")[0].childNodes[0].nodeValue;
    month = xmlDoc.getElementsByTagName("month")[0].childNodes[0].nodeValue;
    day = xmlDoc.getElementsByTagName("day")[0].childNodes[0].nodeValue;
    title = xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue;
    author = xmlDoc.getElementsByTagName("author")[0].childNodes[0].nodeValue;
    body = xmlDoc.getElementsByTagName("body")[0].childNodes[0].nodeValue;
    image = xmlDoc.getElementsByTagName("image")[0].childNodes[0].nodeValue;

    article = formatArticle(year, month, day, title, author, body, image);

    document.getElementById(elementid).innerHTML = article;
}

function formatArticle(year, month, day, title, author, body, image) {
    var formattedArticle;
    formattedArticle =
        "<img class='blog-image' alt='a blog picture' src=" + image + ">" +"<br>" +
        "<p class='blog-title'>" + title + "</p>" +
        "<p class='blog-date'>" + month + " " + day + ", " + year + "</p>" + "<br>" +
        "<p class='blog-author'>" + author + "</p>" + "<br>" +
        "<p class='blog-body'>" + body + "</p>"
    ;
    return formattedArticle;

}