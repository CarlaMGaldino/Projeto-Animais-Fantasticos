//função tabInit serve para isolar o bloco de código para não dar mais erro e fechar essa função
function tabIniti() {
  //Navegação por Tabs
  const tabMenu = document.querySelectorAll(".js-tabmenu li");
  const tabContent = document.querySelectorAll(".js-tabcontent section");

  if (tabMenu.length && tabContent.length) {
    //como tornar o primeiro item ativo
    tabContent[0].classList.add("ativo");

    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove("ativo");
      });
      tabContent[index].classList.add("ativo");
    }

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}
tabIniti();

//função initiAccordion para encapsular o código
function initAccordion() {
  //Accordion List
  const accordionList = document.querySelectorAll(".js-accordion dt");
  const activeClass = "ativo";

  if (accordionList.length) {
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);

    function activeAccordion() {
      //Estou falando com primeiro
      this.classList.toggle("activeClass");
      // Estou falando com proximo elemento
      this.nextElementSibling.classList.toggle(activeClass);
    }

    accordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}
initAccordion();

// Só funciona no chrome e firefox não funciona no safari
function initScroolSuave() {
  // Scrool suave
  const linksInternos = document.querySelectorAll(".js-menu a[href^='#']");

  function scrollSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    /*
Forma alternativa
const topo = section.offsetTop;
window.scroll({
  top: topo,
  behavior: 'smooth',
});
*/
  }

  linksInternos.forEach((link) => {
    link.addEventListener("click", scrollSection);
  });
}
initScroolSuave();

function initAnimacaoScroll() {
  // Animação Scroll
  const sections = document.querySelectorAll(".js-scroll");

  if (sections.length) {
    const windowMetade = window.innerHeight * 0.6;

    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = sectionTop - windowMetade < 0;
        if (isSectionVisible) {
          section.classList.add("ativo");
        } else {
          section.classList.remove("ativo");
        }
      });
    }

    animaScroll();

    window.addEventListener("scroll", animaScroll);
  }
}
initAnimacaoScroll();
