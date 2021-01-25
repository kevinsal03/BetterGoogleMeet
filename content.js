var timeToRefresh = 10;

var elements = document.getElementsByTagName('div');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            if (text.includes("You can't create a meeting yourself. Contact your system administrator for more information.") || text.includes("This meeting hasn't started yet")) {
                startCountdown(element);
            }
        }
    }
}
function startCountdown(messageElemement) {
    console.log(timeToRefresh)
    messageElemement.appendChild(document.createElement("br"))
    var newElement = document.createElement("p")
    newElement.setAttribute("id", "bgmCountdown")
    newElement.style.cssText = "color: red; font-size: 25px;"
    newElement.innerHTML = "This page will automatically refresh in " + timeToRefresh + " seconds!";
    messageElemement.appendChild(newElement)
    setTimeout(function() { doCountdown(newElement); }, 1000);
}

function doCountdown(bgmMessageElemement) {
    timeToRefresh--;
    bgmMessageElemement.innerHTML = "This page will automatically refresh in " + timeToRefresh + " seconds!";
    if (timeToRefresh <= 0) {
        window.location = window.location;
    } else {
        setTimeout(function() { doCountdown(bgmMessageElemement); }, 1000);
    }

}