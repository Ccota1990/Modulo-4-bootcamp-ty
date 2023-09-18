const botonAnterior : HTMLElement = (document.getElementById("anterior")) as HTMLElement
const botonReset : HTMLElement = (document.getElementById("reset")) as HTMLElement
const botonSiguiente : HTMLElement = (document.getElementById("siguiente")) as HTMLElement
const numeroPrincipal : HTMLElement = (document.getElementById("numeroTurno")) as HTMLElement
const escribirTurno : HTMLInputElement = (document.getElementById("seleccionar-turno")) as HTMLInputElement
const seleccionarTurno : HTMLElement = (document.getElementById("seleccionar")) as HTMLElement

function restarTurno () {
   if (parseInt(numeroPrincipal.innerHTML) > 0)
   {
      numeroPrincipal.innerHTML = (parseInt(numeroPrincipal.innerHTML) -1 ).toString().padStart(2,"0")  ;
   }
}
function reset () {
   numeroPrincipal.innerHTML = "00" ;
}
function sumarTurno () {
   numeroPrincipal.innerHTML = (parseInt(numeroPrincipal.innerHTML) + 1).toString().padStart(2,"0")   ;
}
function seleccionar () {
   numeroPrincipal.innerHTML = escribirTurno.value.padStart(2,"0") ;
   escribirTurno.value = ""
}


botonAnterior.addEventListener("click", restarTurno) 
botonReset.addEventListener("click", reset) 
botonSiguiente.addEventListener("click", sumarTurno) 
seleccionarTurno.addEventListener("click", seleccionar)


