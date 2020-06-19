function extract(type, url, buttonValue='this is default value') {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState === 4 && this.status === 200) {
                    if (type === "blog") {
                        // If document is a blogpost
                        parseBlog(this, 'blogspace', buttonValue);
                    } else if (type === 'contact') {
                        parseContact(this, 'contactCard');
                    }
                }
            };
            xhttp.open("GET", url, true);
            xhttp.send();
}

function parseBlog(xml, elementid, buttonValue) {
    // Create functions specific to blog
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

        formattedArticle = "<div class='w3-white w3-panel w3-card'><br>" +
            "<img class='blog-image' alt='a blog picture' src=" + image + ">" +"<br>" +
            "<p class='blog-title'>" + title + "</p>" +
            "<p class='blog-date'>" + month + " " + day + ", " + year + "</p>" +
            "<p class='blog-author'>" + author + "</p>" + "<br>"
        ;
        for (i = 0; i < body.length; i++) {
            formattedArticle += body[i].childNodes[0].nodeValue + "<br><br>";
        }
        formattedArticle += "</div>";
        return formattedArticle;
    }

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

function parseContact(xml, elementid) {
    var image, firstName, lastName, countryCode, areaCode, phoneNumber, primaryEmail, secondaryEmail;
    var country, state, city, zipCode, university, degrees, desiredFieldsOfWork;
    var xmlDoc, text, parser, page;
    text = xml.responseText;
    parser = new DOMParser();
    xmlDoc = parser.parseFromString(text,"text/xml");

    image = xmlDoc.getElementsByTagName("image")[0].childNodes[0].nodeValue;
    firstName = xmlDoc.getElementsByTagName("firstName")[0].childNodes[0].nodeValue;
    lastName = xmlDoc.getElementsByTagName("lastName")[0].childNodes[0].nodeValue;
    countryCode = xmlDoc.getElementsByTagName("countryCode")[0].childNodes[0].nodeValue;
    areaCode = xmlDoc.getElementsByTagName("areaCode")[0].childNodes[0].nodeValue;
    phoneNumber = xmlDoc.getElementsByTagName("phoneNumber")[0].childNodes[0].nodeValue;
    primaryEmail = xmlDoc.getElementsByTagName("primaryEmail")[0].childNodes[0].nodeValue;
    secondaryEmail = xmlDoc.getElementsByTagName("secondaryEmail")[0].childNodes[0].nodeValue;
    country = xmlDoc.getElementsByTagName("country")[0].childNodes[0].nodeValue;
    state = xmlDoc.getElementsByTagName("state")[0].childNodes[0].nodeValue;
    city = xmlDoc.getElementsByTagName("city")[0].childNodes[0].nodeValue;
    zipCode = xmlDoc.getElementsByTagName("zipCode")[0].childNodes[0].nodeValue;
    university = xmlDoc.getElementsByTagName("university")[0].childNodes[0].nodeValue;
    degrees = xmlDoc.getElementsByTagName("degrees")[0];
    desiredFieldsOfWork = xmlDoc.getElementsByTagName("desiredFieldOfWork")[0];

    var formattedPage;

    degrees = degrees.getElementsByTagName("degree");
    desiredFieldsOfWork = desiredFieldsOfWork.getElementsByTagName("field");

    formattedPage =
        "<div class='w3-panel w3-card w3-white'><br>" +
            "<img style='max-width:100%' class='contact-img' src=" + image + "><br>" +
            "<p class='contact-name'>" + firstName + " " + lastName + "</p>" +
            "<p class='contact-phone'><i class='fa fa-fw fa-map-marker'></i> " + countryCode + " (" + areaCode + ") " + phoneNumber +
            "<p class='contact-email'><i class='fa fa-fw fa-map-marker'></i>" + primaryEmail +
            "<p class='contact-location'><i class='fa fa-fw fa-map-marker'></i>" + city + ", " + state + " " + zipCode + "</p>" +
            "<p class='contact-location'>" + country +"</p>" +
            "<p class='contact-degrees'>";
    for (var i = 0; i < degrees.length; i++) {
        formattedPage += degrees[i].childNodes[0].nodeValue;
        if (i+1 !== degrees.length) {
            formattedPage += ", "
        }
    }
    formattedPage +=
            "</p>" +
            "<p class='contact-university'>" + university + "</p>" +
            "<p class='contact-fields-of-work'>Desired Fields of Work: ";
    for (var j = 0; j < degrees.length; j++) {
        formattedPage += desiredFieldsOfWork[j].childNodes[0].nodeValue;
        if (j+1 !== degrees.length) {
            formattedPage += ", "
        }
    }
     formattedPage += "</p></div>";

    document.getElementById(elementid).innerHTML = formattedPage;

}
function formatArticle(year, month, day, title, author, body, image) {
    var formattedArticle, i;

    body = body.getElementsByTagName("line");

    formattedArticle = "<div class='w3-white w3-panel w3-card'><br>" +
        "<img class='blog-image' alt='a blog picture' src=" + image + ">" +"<br>" +
        "<p class='blog-title'>" + title + "</p>" +
        "<p class='blog-date'>" + month + " " + day + ", " + year + "</p>" +
        "<p class='blog-author'>" + author + "</p>" + "<br>"
    ;
    for (i = 0; i < body.length; i++) {
        formattedArticle += body[i].childNodes[0].nodeValue + "<br><br>";
    }
    formattedArticle += "</div>";
    return formattedArticle;
}
