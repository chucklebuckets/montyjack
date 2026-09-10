const siteHeader = document.querySelector(".site-header");

function updateSiteHeader() {
    if (!siteHeader) { return; }

    siteHeader.classList.toggle("scrolled", window.scrollY > 0);
}

window.addEventListener("scroll", updateSiteHeader, { passive: true });

updateSiteHeader();



// Development popup
const developmentPopup = document.getElementById("development-popup");
const developmentPopupClose = document.getElementById("development-popup-close");
const developmentPopupContinue = document.getElementById("development-popup-continue");

function closeDevelopmentPopup() {
    developmentPopup.hidden = true;

    sessionStorage.setItem("developmentPopupSeen", "true");
}

if (sessionStorage.getItem("developmentPopupSeen") === "true") {
    developmentPopup.hidden = true;
}

developmentPopupClose.addEventListener("click", closeDevelopmentPopup);
developmentPopupContinue.addEventListener("click", closeDevelopmentPopup);