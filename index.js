"usestrict";

var inboxDropdown = document.getElementById("inboxDropdown");
var notifDropdown = document.getElementById("notifDropdown");
var menu = document.getElementById("navMenu");

window.onclick = function (event) {
    inboxDropdown.style.display = "none";
    notifDropdown.style.display = "none";
    menu.style.height = "0";
}

function openInboxDropdown(event) {
    event.stopPropagation();
    inboxDropdown.style.display = "block";
    notifDropdown.style.display = "none";
}

function openNotifDropdown(event) {
    event.stopPropagation();
    notifDropdown.style.display = "block";
    inboxDropdown.style.display = "none";
}

function openMenu(event) {
    event.stopPropagation();
    menu.style.height = "180px";
}
