function validar() {
  console.log("prueba");
  let errores = "";

  let campomensaje = document.getElementById("mensaje");
  if (campomensaje.value === "") {
    errores = "se requiere campo mensaje";
  }
  let campoasunto = document.getElementById("asunto");
  if (campoasunto.value === "") {
    errores = "se requiere campo asunto";
  }
  let campodireccion = document.getElementById("dirección");
  if (campodireccion.value === "") {
    errores = "se requiere campo dirección";
  }
  let campotelefono = document.getElementById("telefono");
  if (campotelefono.value === "") {
    errores = "se requiere campo telefono";
  }
  let campoemail = document.getElementById("email");
  if (campoemail.value === "") {
    errores = "se requiere campo email";
  }
  let camponombre = document.getElementById("nombre");
  if (camponombre.value === "") {
    errores = "se requiere el campo nombre";
  }
  document.getElementById("errores").innerHTML = errores;
}
