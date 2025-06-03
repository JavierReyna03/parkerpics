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

