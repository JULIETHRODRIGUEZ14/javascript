//// RETO 3

let postulante = prompt(" Digita el nombre del postulante");
 let preguntas = prompt(" Ingresa el total de preguntas realizadas");
 let correctas = prompt(" Ingresa el total de preguntas realizadas correctamente");
 respuesta= (parseInt(correctas) * 100) / parseInt(preguntas);
 if (respuesta >= 90) {
     var nivel = ("Superior");
 }
 else if (respuesta >= 75 && respuesta < 90) {
     var nivel = ("Medio");
 }
 else if (respuesta >= 50 && respuesta < 75) {
     var nivel = ("Regular");
 }
 else {
     var nivel = ("Fuera de Nivel");
 }

/////////////// RETO 4

let numeroS = prompt("ingrese un numero 1-10")
 let tabla =1;
 for(let f=1; f <= 12; f ++){
     document.write(tabla + '-');
     tabla = tabla + 1;
 }

sumatoria=0;
 for ( var f=0; f<5; f++){
     var numero=prompt("ingrese 10 numeros");
 }
 for(var f=0; f<5; f++){
     var numero=prompt("ingrese 10 numeros");
     sumatoria  = parseInt (sumatoria) + parseInt(numero);
 }
 document.write("la suma de los 5 ultimos digitos es:" +sumatoria)
