var mostrandoTeleco=false; /*Declaro esta variable para llevar un control de que imagenes se están mostrando*/

function mostrarPlanosInfo(){
  if (mostrandoTeleco==true) {
    var txt="<div><img src='./images/edificio_baja_info.jpg' title='Planta baja de informatica'><u>Planta baja</u></div>"+
    "<div><img src='./images/edificio_primera_info.jpg' title='Primera planta de informatica'><u>Primera planta</u></div>";

    document.getElementsByClassName("contenedorImagenes")[0].innerHTML=txt;
    /*El metodo getElementsByClassName() devuelve una colleción de elementos innerHTML,
    hay que seleccionar uno o bien on el metodo item() o como hago en el código*/
    mostrandoTeleco=false;
  }
}

function mostrarPlanosTeleco(){
  if (mostrandoTeleco==false) {
    var txt="<div><img src='./images/edificio_baja_teleco.jpg' title='Planta baja de informatica'><u>Planta baja</u></div>"+
    "<div><img src='./images/edificio_primera_teleco.jpg' title='Primera planta de informatica'><u>Primera planta</u></div>"+
    "<div><img src='./images/edificio_segunda_teleco.jpg' title='Segunda planta de informatica'><u>Segunda planta</u></div>";

    document.getElementsByClassName("contenedorImagenes")[0].innerHTML=txt;
    mostrandoTeleco=true;
  }
}
