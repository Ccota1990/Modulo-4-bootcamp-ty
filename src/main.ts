const botonAnterior  = (document.getElementById("anterior")) 
const botonReset  = (document.getElementById("reset")) 
const botonSiguiente  = (document.getElementById("siguiente")) 
const numeroPrincipal = (document.getElementById("numeroTurno")) 
const escribirTurno  = (document.getElementById("seleccionar-turno")) 
const seleccionarTurno  = (document.getElementById("seleccionar")) 

function restarTurno () {
   if (numeroPrincipal !== null && numeroPrincipal !== undefined && parseInt(numeroPrincipal.innerHTML) > 0)
   {
      numeroPrincipal.innerHTML = (parseInt(numeroPrincipal.innerHTML) -1 ).toString().padStart(2,"0")  ;
   }
}
function reset () {
   if (numeroPrincipal !== null && numeroPrincipal !== undefined){
      numeroPrincipal.innerHTML = "00" ;
   }
}
function sumarTurno () {
   if (numeroPrincipal !== null && numeroPrincipal !== undefined){
      numeroPrincipal.innerHTML = (parseInt(numeroPrincipal.innerHTML) + 1).toString().padStart(2,"0")   ;
   }
}
function seleccionar () {
   if (numeroPrincipal !== null && 
      numeroPrincipal !== undefined && 
      escribirTurno !== null && 
      escribirTurno !== undefined && 
      escribirTurno instanceof HTMLInputElement) 
      {
      numeroPrincipal.innerHTML = escribirTurno.value.padStart(2,"0") ;
      escribirTurno.value = ""
   }
}

if (botonAnterior !== null && 
botonAnterior !== undefined){
   botonAnterior.addEventListener("click", restarTurno) 
}
if (botonReset !== null && 
botonReset !== undefined) {
   botonReset.addEventListener("click", reset) 
}
if(botonSiguiente !== null && 
botonSiguiente !== undefined) {
botonSiguiente.addEventListener("click", sumarTurno) 
}
if( seleccionarTurno !== null && 
   seleccionarTurno !== undefined ){
      seleccionarTurno.addEventListener("click", seleccionar)
   }
