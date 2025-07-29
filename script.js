function verMas(id) {
  const elemento = document.getElementById(id);
  if (elemento.style.display === "none" || elemento.style.display === "") {
    if (id === "tareas") {
      elemento.innerHTML = "Este proyecto incluye una app de tareas con Bootstrap, validaciones y alertas.";
    } else if (id === "pawslove") {
      elemento.innerHTML = "Un e-commerce ficticio enfocado en adopción de mascotas, con catálogo, carrito y diseño responsive.";
    }
    elemento.style.display = "block";
  } else {
    elemento.style.display = "none";
  }
}
