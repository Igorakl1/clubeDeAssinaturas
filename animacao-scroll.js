function animaScroll() {
  const elementos = document.querySelectorAll("[data-anime]");
  const windowTop = window.scrollY + window.innerHeight * 0.85;

  elementos.forEach((element) => {
    if (windowTop > element.offsetTop) {
      element.classList.add("animacao");
    } else {
      element.classList.remove("animacao");
    }
  });
}

window.addEventListener("scroll", animaScroll);
document.addEventListener("DOMContentLoaded", animaScroll);
