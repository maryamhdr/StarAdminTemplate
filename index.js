"usestrict";

var inboxDropdown = document.getElementById("inboxDropdown");
var notifDropdown = document.getElementById("notifDropdown");

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

window.onclick = function(event) {
    inboxDropdown.style.display = "none";
    notifDropdown.style.display = "none";
  }