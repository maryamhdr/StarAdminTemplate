"usestrict";

var inboxDropdown = document.getElementById("inboxDropdown");
var notifDropdown = document.getElementById("notifDropdown");
var menu = document.getElementById("navMenu");
var uiComponentsDropdown = document.getElementById("uiComponentsDropdown");
var samplePagesDropdown = document.getElementById("samplePagesDropdown");
var uiComponentsDropdownHandler = 0;
var samplePagesDropdownHandler = 0;

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

function handleDropdown(event, item) {
    switch (item) {
        case 1:
            // console.log(1);
            // console.log(samplePagesDropdownHandler);
            if(samplePagesDropdownHandler === 0){
                samplePagesDropdown.style.height = "190px";
                samplePagesDropdownHandler = 1;
                event.style.backgroundColor = "#f1f6ff";
            } else {
                samplePagesDropdown.style.height = "0";
                samplePagesDropdownHandler = 0;
                event.style.backgroundColor = "#ffffff";
            }
            break;
        case 2:
            // console.log(2);
            // console.log(uiComponentsDropdownHandler);
            if(uiComponentsDropdownHandler === 0){
                uiComponentsDropdown.style.height = "580px";
                uiComponentsDropdownHandler = 1;
                event.style.backgroundColor = "#f1f6ff";
            } else {
                uiComponentsDropdown.style.height = "0";
                uiComponentsDropdownHandler = 0;
                event.style.backgroundColor = "#ffffff";
            }
            break;
    }
}
