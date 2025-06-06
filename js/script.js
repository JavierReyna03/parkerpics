// Espera a que todo el contenido del DOM esté cargado
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("imgModal");
  const cerrar = document.querySelector(".cerrar");
  const imagenes = document.querySelectorAll(".galeria img");

  imagenes.forEach(img => {
    img.addEventListener("click", function () {
      modal.style.display = "block";
      modalImg.src = this.src;
      modalImg.alt = this.alt;
    });
  });

  cerrar.addEventListener("click", function () {
    modal.style.display = "none";
  });

  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const botones = document.querySelectorAll(".filtros button");
  const imagenes = document.querySelectorAll(".galeria img");

  botones.forEach(boton => {
    boton.addEventListener("click", () => {
      // Marcar como activo
      botones.forEach(b => b.classList.remove("activo"));
      boton.classList.add("activo");

      const filtro = boton.getAttribute("data-filtro");

      imagenes.forEach(img => {
        if (filtro === "todos" || img.classList.contains(filtro)) {
          img.style.display = "block";
        } else {
          img.style.display = "none";
        }
      });
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("toggle-menu");
  const menu = document.getElementById("menu");
  toggleBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
});
