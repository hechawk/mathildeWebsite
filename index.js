let content;
let menuItems = document.getElementsByClassName("menu-item");

function showPage(contentId) {
    content = document.getElementById(contentId);
    content.style.display = "inline";
    for (let i = 0; i < menuItems.length; i++) {
        menuItems[i].style.display = "none";
    }
}

function closePage() {
    content.style.display = 'none';
    for (let i = 0; i < menuItems.length; i++) {
        menuItems[i].style.display = "inline";
    }
}