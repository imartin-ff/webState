// tabs

const tabsContainer = document.querySelector(".portfolio__inner");

if (tabsContainer) {
  const tabsLinksItems = tabsContainer.querySelectorAll(
    ".tabs-links li .tab-link"
  );
  const tabsContentItems = tabsContainer.querySelectorAll(
    ".tab-contents .tab-item"
  );
  const tabsContentItemsLength = tabsContentItems.length;
  const tabsLinksItemsLength = tabsLinksItems.length;

  const clearClasses = () => {
    for (let i = 0; i < tabsContentItemsLength; i++) {
      tabsLinksItems[i].classList.remove("active");
      tabsContentItems[i].classList.remove("active");
    }
  };

  const setRoles = () => {
    for (let i = 0; i < tabsContentItemsLength; i++) {
      tabsLinksItems[i].setAttribute("role", "tab");
      tabsContentItems[i].setAttribute("role", "tabpanel");
    }
  };

  for (let i = 0; i < tabsLinksItemsLength; i++) {
    tabsLinksItems[i].addEventListener("click", function (e) {
      const current = e.target;
      let target = current.getAttribute("data-target");
      const targetContent = tabsContainer.querySelector(
        `[data-tab="${target}"]`
      );

      clearClasses();

      current.classList.add("active");

      targetContent.classList.add("active");
    });
  }
  tabsContentItems[0].classList.add("active");
  tabsLinksItems[0].classList.add("active");

  setRoles();
}

function offset(el) {
  var rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
}

const anchorLinks = document.querySelectorAll(".anchor-link");
if (anchorLinks.length > 0) {
  anchorLinks.forEach((el) => {
    el.addEventListener("click", function (e) {
      e.preventDefault();
      const scrollBlock = document.getElementById(
        this.getAttribute("href").replace("#", "")
      );
      scrollBlock.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  });
}
