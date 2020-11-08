var currentTab = 0;

function mostrarTab(n) {
  var x = document.getElementsByClassName("contenedor");
  x[n].style.display = "block";
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Crear Cuenta";
  } else {
    document.getElementById("nextBtn").innerHTML = "Siguiente";
  }
}

function siguienteAnterior(n) {
  var x = document.getElementsByClassName("contenedor");
  if (n == 1 && !validarForm()) return false;
  x[currentTab].style.display = "none";
  currentTab = currentTab + n;
  if (currentTab >= x.length) {
    document.getElementById("formulario").submit();
    return false;
  }
  mostrarTab(currentTab);
}

function validarForm() {
  var x, y, i, valido = true;
  x = document.getElementsByClassName("contenedor");
  y = x[currentTab].getElementsByTagName("input");
  for (i = 0; i < y.length; i++) {
    if (y[i].value == "") {
      y[i].className += " invalid";
      valido = false;
    }
  }
  return valido;
}
