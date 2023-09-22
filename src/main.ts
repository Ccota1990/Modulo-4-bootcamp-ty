const botonAnterior : HTMLButtonElement = (document.getElementById("anterior")) as HTMLButtonElement
const botonReset : HTMLButtonElement = (document.getElementById("reset")) as HTMLButtonElement
const botonSiguiente : HTMLButtonElement = (document.getElementById("siguiente")) as HTMLButtonElement
const numeroPrincipal : HTMLButtonElement = (document.getElementById("numeroTurno")) as HTMLButtonElement
const escribirTurno : HTMLInputElement = (document.getElementById("seleccionar-turno")) as HTMLInputElement
const seleccionarTurno : HTMLButtonElement = (document.getElementById("seleccionar")) as HTMLButtonElement

function restarTurno () {
   if (parseInt(numeroPrincipal.innerHTML) > 0)
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
   if (numeroPrincipal !== null && numeroPrincipal !== undefined){
      numeroPrincipal.innerHTML = escribirTurno.value.padStart(2,"0") ;
      escribirTurno.value = ""
   }
}


botonAnterior.addEventListener("click", restarTurno) 
botonReset.addEventListener("click", reset) 
botonSiguiente.addEventListener("click", sumarTurno) 
seleccionarTurno.addEventListener("click", seleccionar)


