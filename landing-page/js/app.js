/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */
const allSec = document.querySelectorAll("section");
const allSecList = Array.from(allSec);
const navList = document.getElementById("");

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav

const docFrag = document.createDocumentFragment();

allSecList.forEach(function (elem) {
  const liElem = document.createElement("li");
  const aElem = document.createElement("a");
  aElem.textContent = elem.dataset.nav;
  aElem.href = `#${elem.id}`;
  aElem.setAttribute("data-nav", elem.id);
  aElem.classList.add("menu__link");
  const navItem = liElem.appendChild(aElem);
  docFrag.appendChild(navItem);
});
const unList = document.querySelector("ul");
unList.appendChild(docFrag);

// Add class 'active' to section when near top of viewport
const observingSections = () => {
  const action = new IntersectionObserver(
    function (items) {
      items.forEach((item) => {
        const selectedLink = unList.querySelector(
          `[data-nav=${item.target.id}]`
        );
        if (item.isIntersecting) {
          item.target.classList.add("your-active-class");
          selectedLink.classList.add("active-link");
          location.hash = `${item.target.id}`;
        } else {
          item.target.classList.remove("your-active-class");
          selectedLink.classList.remove("active-link");
        }
      });
    },
    {
      threshold: 0.65,
    }
  );
  return document.querySelectorAll("section").forEach(function (sect) {
    action.observe(sect);
  });
};
observingSections();

// Scroll to anchor ID using scrollTO event
unList.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (evt.target.dataset.nav) {
    document
      .getElementById(evt.target.dataset.nav)
      .scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
  }
});

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
