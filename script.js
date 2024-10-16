function openTab(evt, tabName) {
    var i, tabcontent, tablinks;

    // Hide all tabcontent
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remove the "active" class from all tablinks
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab and add the "active" class to the clicked button
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}