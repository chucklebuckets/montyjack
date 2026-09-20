const siteHeader = document.querySelector(".site-header");

function updateSiteHeader() {
    if (!siteHeader) { return; }

    siteHeader.classList.toggle("scrolled", window.scrollY > 0);
}

window.addEventListener("scroll", updateSiteHeader, { passive: true });

updateSiteHeader();



/* ---------- Development popup ---------- */

const developmentPopup = document.getElementById("development-popup");
const developmentPopupClose = document.getElementById("development-popup-close");
const developmentPopupContinue = document.getElementById("development-popup-continue");

if (
    developmentPopup &&
    developmentPopupClose &&
    developmentPopupContinue
) {
    function closeDevelopmentPopup() {
        developmentPopup.hidden = true;

        sessionStorage.setItem(
            "developmentPopupSeen",
            "true"
        );
    }

    if (
        sessionStorage.getItem("developmentPopupSeen") === "true"
    ) {
        developmentPopup.hidden = true;
    }

    developmentPopupClose.addEventListener(
        "click",
        closeDevelopmentPopup
    );

    developmentPopupContinue.addEventListener(
        "click",
        closeDevelopmentPopup
    );
}

// Section reveal animations
const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {

    const revealObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach((entry) => {

                if (!entry.isIntersecting) { return; }

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);
            });

        },
        {
            threshold: 0.12
        }
    );

    revealElements.forEach((element) => {
        revealObserver.observe(element);
    });

} else {

    revealElements.forEach((element) => {
        element.classList.add("visible");
    });

}



// Navigation stuff
/* ---------- Side navigation ---------- */

const siteMenu = document.getElementById("site-menu");
const siteMenuToggle = document.getElementById("site-menu-toggle");
const siteMenuClose = document.getElementById("site-menu-close");

if (
    siteMenu &&
    siteMenuToggle &&
    siteMenuClose
) {
    function openSiteMenu() {
        siteMenu.showModal();

        document.body.classList.add("menu-open");

        siteMenuToggle.setAttribute(
            "aria-expanded",
            "true"
        );

        requestAnimationFrame(() => {
            siteMenu.classList.add("menu-open");
        });
    }

    function closeSiteMenu() {
        siteMenu.classList.remove("menu-open");

        siteMenuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

        setTimeout(() => {
            siteMenu.close();

            document.body.classList.remove("menu-open");
        }, 250);
    }

    siteMenuToggle.addEventListener(
        "click",
        openSiteMenu
    );

    siteMenuClose.addEventListener(
        "click",
        closeSiteMenu
    );

    siteMenu.addEventListener("click", (event) => {
        if (event.target === siteMenu) {
            closeSiteMenu();
        }
    });

    siteMenu.querySelectorAll("a").forEach((link) => {
        link.addEventListener(
            "click",
            closeSiteMenu
        );
    });

    siteMenu.addEventListener("cancel", (event) => {
        event.preventDefault();

        closeSiteMenu();
    });
}