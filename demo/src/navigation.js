import { Navigation, animate } from "@meom/navigation";

// Mandatory elements.
const navElement = document.querySelector(".js-site-nav-items");
const navToggle = document.querySelector(".js-site-nav-toggle");

// For demo.
const isHoverDemo = document.querySelector(".js-site-nav-hover");

new Navigation(navElement, navToggle, {
    action: isHoverDemo ? 'hover' : 'click',
    subNavAnchors: ".js-site-nav-items > .menu-item-has-children > a",
    subSubNavAnchors:
        ".js-site-nav-items .sub-menu > .menu-item-has-children > a",
    subToggleButtonClasses: "site-nav__sub-toggle",
    subSubToggleButtonClasses: "site-nav__sub-sub-toggle",
    toggleNavClass: false,
    closeNavOnLastTab: true,

    onOpenNav: function (element) {
        // Prevent scrolling on page.
        document.documentElement.classList.add("overflow-hidden");
        document.documentElement.classList.add("is-site-nav-opened");

        element.classList.add("is-opened");
        animate(element, "fade-in");
    },
    onCloseNav: function (element) {
        // Allow scrolling on page.
        document.documentElement.classList.remove("overflow-hidden");
        document.documentElement.classList.remove("is-site-nav-opened");

        animate(element, "fade-out", "is-opened");
    }
});
