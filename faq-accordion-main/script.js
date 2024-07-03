const accordionHeaders = document.querySelectorAll(".data-accordion-header");

accordionHeaders.forEach((accordionHeader) => {
  accordionHeader.onclick = () => {
    // Get value of aria-expanded
    let expanded =
      accordionHeader.getAttribute("aria-expanded") === "true" ? true : false;

    // set aria-expanded to opposite value
    accordionHeader.setAttribute("aria-expanded", !expanded);

    // set inert attribute to right value
    const idNum = accordionHeader.id.slice(-1);
    document.querySelector(`#accordion-panel-${idNum}`).inert = expanded;
  };
});
