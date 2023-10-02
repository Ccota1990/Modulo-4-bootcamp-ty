const botonAnterior  = (document.getElementById("anterior")) 
const botonReset  = (document.getElementById("reset")) 
const botonSiguiente  = (document.getElementById("siguiente")) 
const numeroPrincipal = (document.getElementById("numeroTurno")) 
const escribirTurno  = (document.getElementById("seleccionar-turno")) 
const seleccionarTurno  = (document.getElementById("seleccionar")) 

function restarTurno () {
   if (numeroPrincipal !== null && numeroPrincipal !== undefined  && numeroPrincipal instanceof HTMLHeadingElement && parseInt(numeroPrincipal.innerHTML) > 0)
   {
      numeroPrincipal.innerHTML = (parseInt(numeroPrincipal.innerHTML) -1 ).toString().padStart(2,"0")  ;
   }
}
function reset () {
   if (numeroPrincipal !== null && numeroPrincipal !== undefined && numeroPrincipal instanceof HTMLHeadingElement){
      numeroPrincipal.innerHTML = "00" ;
   }
}
function sumarTurno () {
   if (numeroPrincipal !== null && numeroPrincipal !== undefined && numeroPrincipal instanceof HTMLHeadingElement){
      numeroPrincipal.innerHTML = (parseInt(numeroPrincipal.innerHTML) + 1).toString().padStart(2,"0")   ;
   }
}
function seleccionar () {
   if (numeroPrincipal !== null && 
      numeroPrincipal !== undefined  && 
      numeroPrincipal instanceof HTMLHeadingElement && 
      escribirTurno !== null && 
      escribirTurno !== undefined && 
      escribirTurno instanceof HTMLInputElement) 
      {
      numeroPrincipal.innerHTML = escribirTurno.value.padStart(2,"0") ;
      escribirTurno.value = ""
   }
}

if (botonAnterior !== null && 
botonAnterior !== undefined && 
botonAnterior instanceof HTMLButtonElement){
   botonAnterior.addEventListener("click", restarTurno) 
}
if (botonReset !== null && 
botonReset !== undefined && 
botonReset instanceof HTMLButtonElement) {
   botonReset.addEventListener("click", reset) 
}
if(botonSiguiente !== null && 
botonSiguiente !== undefined && 
botonSiguiente instanceof HTMLButtonElement) {
botonSiguiente.addEventListener("click", sumarTurno) 
}
if( seleccionarTurno !== null && 
   seleccionarTurno !== undefined && 
   seleccionarTurno instanceof HTMLButtonElement){
      seleccionarTurno.addEventListener("click", seleccionar)
   }
