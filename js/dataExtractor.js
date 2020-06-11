function extract(type) {
    $("button").click(function() {
        var buttonValue = $(this).val();
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            if (type === "blog") {
                // If document is a blogpost
                parseBlog(this, 'blogspace', buttonValue);
            }
        }
    };
    if (type === "blog") {
        xhttp.open("GET", '../content/text/blogsite.xml', true);
    } else {
        return false;
    }
    xhttp.send();
    });
}

function parseBlog(xml, elementid, buttonValue) {
    // Initialize variables
    var year, month, day, title, author, body, image;
    var xmlDoc, text, parser, page;
    text = xml.responseText; // problem is that responseXML isn't working
    parser = new DOMParser();
    xmlDoc = parser.parseFromString(text,"text/xml");

    year = xmlDoc.getElementsByTagName("year");
    month = xmlDoc.getElementsByTagName("month");
    day = xmlDoc.getElementsByTagName("day");
    title = xmlDoc.getElementsByTagName("title");
    author = xmlDoc.getElementsByTagName("author");
    body = xmlDoc.getElementsByTagName("body");
    image = xmlDoc.getElementsByTagName("image");

    page = formatPage(year, month, day, title, author, body, image, buttonValue);

    document.getElementById(elementid).innerHTML = page;
}

function formatPage(year, month, day, title, author, body, image, articleValue) {
    var formattedPage, numArticles;
    var thisYear, thisMonth, thisDay, thisTitle, thisAuthor, thisBody, thisImage;
    formattedPage = "";
    if (articleValue === "all") {
        for (numArticles=0; numArticles < year.length; numArticles++) {
            thisYear = year[numArticles].childNodes[0].nodeValue;
            thisMonth = month[numArticles].childNodes[0].nodeValue;
            thisDay = day[numArticles].childNodes[0].nodeValue;
            thisTitle = title[numArticles].childNodes[0].nodeValue;
            thisAuthor = author[numArticles].childNodes[0].nodeValue;
            thisBody = body[numArticles];
            thisImage = image[numArticles].childNodes[0].nodeValue;

            formattedPage += formatArticle(thisYear, thisMonth, thisDay, thisTitle, thisAuthor, thisBody, thisImage);
        }
    } else {
        var articleNumber = parseInt(articleValue);
        thisYear = year[articleNumber].childNodes[0].nodeValue;
        thisMonth = month[articleNumber].childNodes[0].nodeValue;
        thisDay = day[articleNumber].childNodes[0].nodeValue;
        thisTitle = title[articleNumber].childNodes[0].nodeValue;
        thisAuthor = author[articleNumber].childNodes[0].nodeValue;
        thisBody = body[articleNumber];
        thisImage = image[articleNumber].childNodes[0].nodeValue;

        formattedPage += formatArticle(thisYear, thisMonth, thisDay, thisTitle, thisAuthor, thisBody, thisImage);
    }
    return formattedPage;
}

function formatArticle(year, month, day, title, author, body, image) {
    var formattedArticle, i;

    body = body.getElementsByTagName("line");

    formattedArticle =
        "<img class='blog-image' alt='a blog picture' src=" + image + ">" +"<br>" +
        "<p class='blog-title'>" + title + "</p>" +
        "<p class='blog-date'>" + month + " " + day + ", " + year + "</p>" +
        "<p class='blog-author'>" + author + "</p>" + "<br>"
    ;
    for (i = 0; i < body.length; i++) {
        formattedArticle += body[i].childNodes[0].nodeValue + "<br><br>";
    }
    return formattedArticle;
}


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
                document.getElementById("blog-select").innerHTML += "<button class='w3-button' onclick='extract(\"blog\")'value='" + numArts + "'>" + articleTitles[numArts].childNodes[0].nodeValue + "</button><br>";
            }
        }
    };
    xhttp.open("GET", "../content/text/blogsite.xml", true);
    xhttp.send();
}
