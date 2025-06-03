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
