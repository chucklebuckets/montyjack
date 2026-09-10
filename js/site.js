const siteHeader = document.querySelector(".site-header");

function updateSiteHeader() {
    if (!siteHeader) { return; }

    siteHeader.classList.toggle("scrolled", window.scrollY > 0);
}

window.addEventListener("scroll", updateSiteHeader, { passive: true });

updateSiteHeader();
