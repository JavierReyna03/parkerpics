// Cambia esta fecha por tu fecha de nacimiento
const fechaNacimiento = new Date("2003-01-28");

function calcularEdad(fechaNac) {
  const hoy = new Date();
  let edad = hoy.getFullYear() - fechaNac.getFullYear();
  const mes = hoy.getMonth() - fechaNac.getMonth();

  if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNac.getDate())) {
    edad--;
  }

  return edad;
}

document.addEventListener("DOMContentLoaded", function () {
  const edad = calcularEdad(fechaNacimiento);
  document.getElementById("edad").textContent = edad;
});
