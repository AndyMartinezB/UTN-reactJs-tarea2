// usar document.querySelector.

const form = document.querySelector("#form_evento");
const nombreInput = document.querySelector("#nombre_usuario");
const edadInput = document.querySelector("#edad_usuario");
const parrafoRespuesta = document.querySelector("#respuesta");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const nombreUsuario = nombreInput.value;
  const numeroUsuario = edadInput.value;

  if (numeroUsuario >= 18) {
    parrafoRespuesta.textContent = `✅ Bienvenido ${nombreUsuario}, tienes acceso al evento.`;
    parrafoRespuesta.classList.add("borde-verde");
    parrafoRespuesta.classList.remove("borde-rojo");
  } else {
    parrafoRespuesta.textContent = `❌ Lo sentimos ${nombreUsuario}, debes ser mayor de edad.`;
    parrafoRespuesta.classList.add("borde-rojo");
    parrafoRespuesta.classList.remove("borde-verde");
  }
});
