function openTab(evt, tabName) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabs__content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tabs__link");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" tabs__link--active", "");
    }

    document.getElementById(tabName).style.display = "flex";
    evt.currentTarget.className += " tabs__link--active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();