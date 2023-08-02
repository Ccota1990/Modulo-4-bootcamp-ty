interface Grupo {
    nombre: string;
    añoFundacion: number;
    activo: boolean;
    genero: string
}


const estiloNombre = "background-color: green; font-size: 18px; font-weight: bold;";

const popRock = " 🎵 Pop Rock";
const rock = " 🎸 Rock";
const hardRock = " 🤘 Hard Rock";
const clasica = " 🎼 Clásica"; 

const grupoA: Grupo = {
    nombre: "The Beatles", 
    añoFundacion: 1960,
    activo: true,
    genero: popRock 
}
const grupoB: Grupo = {
    nombre: "Queen", 
    añoFundacion: 1970,
    activo: false,
    genero: rock
}
const grupoC: Grupo = {
    nombre: "AC DC", 
    añoFundacion: 1973,
    activo: true,
    genero: hardRock 
}
const grupoD: Grupo = {
    nombre: "Ludwig van Beethoven", 
    añoFundacion: 1970,
    activo: false,
    genero: clasica 
}
const grupoE: Grupo = {
    nombre: "The Rolling Stones", 
    añoFundacion: 1962,
    activo: true,
    genero: rock
}


console.log ("%c"+grupoA.nombre, estiloNombre, `/ ${grupoA.añoFundacion} / Activo: ${grupoA.activo} / ${grupoA.genero}` )
console.log ("%c"+grupoB.nombre, estiloNombre, `/ ${grupoB.añoFundacion} / Activo: ${grupoB.activo}  / ${grupoB.genero}` )
console.log ("%c"+grupoC.nombre, estiloNombre, `/ ${grupoC.añoFundacion} / Activo: ${grupoC.activo} / ${grupoC.genero}` )
console.log ("%c"+grupoD.nombre, estiloNombre, `/ ${grupoD.añoFundacion} / Activo: ${grupoD.activo} / ${grupoD.genero}` )
console.log ("%c"+grupoE.nombre, estiloNombre, `/ ${grupoE.añoFundacion} / Activo: ${grupoE.activo} / ${grupoE.genero}` )

