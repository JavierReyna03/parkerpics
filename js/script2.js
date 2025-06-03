function mostrarModal(imagen, descripcion) {
  document.getElementById("imgModal").src = imagen;
  document.getElementById("descripcionModal").innerText = descripcion;
  document.getElementById("modal").style.display = "block";
}

function cerrarModal() {
  document.getElementById("modal").style.display = "none";
}

window.onclick = function(event) {
  const modal = document.getElementById("modal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
}

document.querySelectorAll('a[href^="#"]').forEach(ancla => {
  ancla.addEventListener('click', function (e) {
    e.preventDefault();
    const destino = document.querySelector(this.getAttribute('href'));
    if (destino) {
      destino.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});
