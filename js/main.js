const expandButtons =
document.querySelectorAll(".timeline-expand-btn");

const expandedPanel =
document.getElementById("timelineExpanded");

const expandedContents =
document.querySelectorAll(".expanded-content");

const closeButton =
document.querySelector(".close-expanded");

const timeline =
document.querySelector(".timeline");

expandButtons.forEach(button => {

  button.addEventListener("click", () => {

    const timelineItem =
      button.closest(".timeline-item");

    const step =
      timelineItem.dataset.step;

    // limpiar activos

    expandedContents.forEach(content => {
      content.classList.remove("active");
    });

    document
      .querySelectorAll(".timeline-item")
      .forEach(item => {
        item.classList.remove("active");
      });

    // activar tarjeta

    timelineItem.classList.add("active");

    const activeContent =
      document.querySelector(
        `.expanded-content[data-content="${step}"]`
      );

    activeContent.classList.add("active");

    // MOBILE:
    // mover panel debajo del item clickeado

    if(window.innerWidth <= 768){

      const itemTop =
        timelineItem.offsetTop;

      const itemHeight =
        timelineItem.offsetHeight;

      expandedPanel.style.top =
        `${itemTop + itemHeight + 20}px`;

    } else {

      expandedPanel.style.top = "50%";
    }

    expandedPanel.classList.add("active");

    timeline.classList.add("active-mode");

    // scroll suave en mobile

    if(window.innerWidth <= 768){

      setTimeout(() => {

        expandedPanel.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });

      }, 100);
    }

  });

});

closeButton.addEventListener("click", () => {

  expandedPanel.classList.remove("active");

  timeline.classList.remove("active-mode");

  document
    .querySelectorAll(".timeline-item")
    .forEach(item => {
      item.classList.remove("active");
    });

  expandedContents.forEach(content => {
    content.classList.remove("active");
  });

});

// =========================
// WHATSAPP LINKS
// =========================

const phone = "5491149929383";

const message =
  "Hola, quisiera hacer una consulta.";

const isMobile =
  /Android|iPhone|iPad|iPod/i.test(
    navigator.userAgent
  );

const mobileLink =
  `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

const desktopLink =
  `https://web.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`;

const buttons =
  document.querySelectorAll(".whatsapp-btn");

buttons.forEach(btn => {

  btn.href =
    isMobile
      ? mobileLink
      : desktopLink;

});

// =========================
// MOBILE MENU
// =========================

const mobileMenu =
document.getElementById("mobileMenu");

const navLinks =
document.querySelector(".nav-links");

mobileMenu.addEventListener("click", () => {

  mobileMenu.classList.toggle("active");

  navLinks.classList.toggle("active");
});

// cerrar al hacer click

document.querySelectorAll(".nav-links a")
.forEach(link => {

  link.addEventListener("click", () => {

    mobileMenu.classList.remove("active");

    navLinks.classList.remove("active");
  });

});


