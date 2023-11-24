function inversion(){
    //1. Ocultar la imagen y mostrar el panel con los datos de la simulacion
    const preCont = document.querySelector(".pre-simulation");
   const postCont = document.querySelector(".post-simulation");
  

   postCont.classList.remove("disabled");
   preCont.classList.add("disabled");

//2. Capturamos y mostramos los datos que no se calculan 
const campoNombres= document.getElementById("nombres").value;
const campoEmail = document.getElementById("email").value;
const nombresShow = document.getElementById("nombres-show");
const emailShow = document.getElementById("email-show");
const tiempoShow = document.getElementById("tiempo-show");
const interesShow = document.getElementById("interes-show")
nombresShow.innerText = campoNombres;
emailShow.innerText = campoEmail; 


//3. Capturamos los datos de inversion y tiempo, creamos las variables de ganancia y ganancia total
const inversion = document.getElementById("inversion").value; 
const tiempo = document.getElementById("tiempo").value;
const ganaciaShow = document.getElementById("total-show");
const gtotalShow = document.getElementById("ganancia-show");

let ganacia=0;
let gananciaTotal=0;

//4. Validamos o comparamos el tiempo de inversion, segun este mostramos la ganancia, el total y los demas datos
switch (tiempo) {
    case "1":
        ganacia=(inversion*0.8)/100*12;
        gananciaTotal= parseInt(inversion) + parseInt(ganacia);
        gtotalShow.innerText=ganacia
        ganaciaShow.innerText=gananciaTotal
        tiempoShow.innerText ="12 MESES";
        interesShow.innerText="0.8%";

        break;
    case"2":
        ganacia=(inversion*1.2)/100*24;
        gananciaTotal= parseInt(inversion) + parseInt(ganacia);
        gtotalShow.innerText=ganacia
        ganaciaShow.innerText=gananciaTotal
        tiempoShow.innerText ="2 AÑOS";
        interesShow.innerText="1.2%";
        break;
    case"3":
        ganacia=(inversion*1.7)/100*36;
        gananciaTotal= parseInt(inversion) + parseInt(ganacia);
        gtotalShow.innerText=ganacia
        ganaciaShow.innerText=gananciaTotal
        tiempoShow.innerText ="3 AÑOS";
        interesShow.innerText="1.7%";
        break;

    default:
}



}
