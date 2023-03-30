//alert("aprendiendo javascript");

/////////////////////////
/*let mensaje;
mensaje ='lo que sea';
alert(mensaje);*/

/////////////////////////
// var color1="rojo";
// console.log(color1);
// var color1 ="azul";
// console.log(color1);

////////////////////////////////////
// let variable = 123456;
// variable='estoy con javascript';
// // console.log(variable);
// alert(typeof(variable));

////////////////////////////////////////////////////////////////
// let frase='estoy en javascript';
// alert(`datatype de frase = ${typeof(frase)}`);
// let entero = 10;
// alert(`datatype de entero = ${typeof(entero)}`);
// let flotante = 10.5;
// alert(`datatype de flotante = ${typeof(flotante)}`);
// let booleano = true;
// alert(`datatype de booleano = ${typeof(booleano)}`);
// let gran_entero = 900719925646879665632;
// alert(`datatype de gran entero = ${typeof(gran_entero)}`);

//////////////////////////////////////////////////////////////
// let texto1 = "esto es una linea. <br> esta es otra.";
// document.write(texto1);

//////////////////////////
// console.log(5+5.5);
// console.log(5-5.5);
// console.log(10*30);
// console.log(10/30);
// console.log(1%3);
// console.log(2**3);

///////////////////////////////////////////////////////////////////////            RETO NUMERO 1
// alert("reto 1 la abuela");
// let f = prompt("indique la temperatura que desee en grados f");
// let c =(f-32)/1.8;
// alert("la temperatura correcta es c es " +c);
// document.write("la temperatura es c " +c );
// console.log("la correcta es c" + c);

///////////////////////////////////////////////////////////////////////////          RETO NUMERO 2
// let num1,num2,num3;
// num1= prompt(" Ingrese primer número ");
// if (num1 >0){
//     document.write(" Tu primer número es positivo " +num1+"<br>");
// }
// else{
//     document.write(" Tu primer número es negativo " +num1+"<br>");

// }
// num2= prompt(" Ingrese el segundo número ");

// num3= prompt(" Ingrese el trecer número "); 
// if (num2 > num3){
//     document.write(" Tu número " +num2+" es mayor que "+num3+"<br>");
// }
// else{
//     document.write(" Tu número " +num2+" es menor que "+num3+"<br>");  
// }
// if(num1>num2){
//     if(num1>num3){
//         document.write("Tu numero "+num1+" es mayor a " +num2+" y "+num3+"<br>");
//         document.write("Tu numero "+num2+" es menor que " +num3+"<br>");
//     }
   
// }
// if(num2>num1){
//     if(num2>num3){
//         document.write("Tu numero "+num2+" es mayor a " +num1+" y "+num3+"<br>");
//         document.write("Tu numero "+num1+" es menor que " +num3+"<br>");
//     }
   
// }
// if(num3>num1){
//     if(num3>num2){
//         document.write("Tu numero "+num3+" es mayor a " +num1+" y "+num2+"<br>");
//         document.write("Tu numero "+num1+" es menor que " +num2+"<br>");
//     }  
         
// }
// else{
//     document.write("Valida nuevamente");
// }

// let num1;

// num1= prompt(" ingresa un número - o +");
// if (num1 >0){
//     document.write(" Tu número es positivo " +num1+"<br>");
// }
// else{
//     document.write(" Tu número es negativo " +num1+"<br>");

// }

// let num1,num2;

// num1= prompt(" Ingrese el primer número ");

// num2= prompt(" Ingrese el segundo número "); 
// if (num1 > num2){
//     document.write(" Número Mayor " +num1+" Número Menor "+num2+"<br>");
// }
// else{
//     document.write(" Número Menor " +num1+" Número mayor "+num2+"<br>");  
// }
//////////////////////////////////////////////////////////////////////////////////////////
// let nombre;
// nombre = prompt("introduce tu nombre");
// if (nombre != null){
//     document.write("bienvenido a mi sitio web, " + nombre + ".");
// }
// else{
//     alert("no has introducido nada. recarga la pagina para intentarlo de nuevo.");
// }

/////////////////////////////////////////////////////
// let algoritmo;
// algoritmo = prompt("introduce el numero");
// if ( algoritmo != 5){
//     document.write("el numero es positivo")
// }
// else if (
//     console.log(5<15);
//     console.log(5>20);
// algoritmo =prompt("el mayor es " + algoritmo);
// );

///////////////////////////////////////////////////////////////////
// let estacion = prompt("Escribe una estacion en minuscula,");
// switch(estacion){
//     case "invierno":
//     alert("todo es frio");
//     break;
    
//     case "primavera":
//     alert("se colorea el mundo");
//     break;

//     case "verano":
//     alert("las noches se hacen largas");
//     break;

//     case"otoño":
//     alert("donde habia color ya no queda nada");
//     break;

//     default:
//         alert("eso no es una estacion");
//         break;
// }

////////////////////////////////////////////////////////////////////////////////////////////////////
//  let calculadora_basica =prompt("digita la operacion a realizar");
//  let num1 =prompt("ingrese primer numero");
//  let num2 =prompt("ingrese segundo numero");
  
//  switch(calculadora_basica){
//      case "suma":
//         resultado = number(num1)+ number(num2);
//          alert("la suma entre " + num1 + " y " + num2 + "es" + resultado);
//          break;

//          case "resta":
//             resultado = number(num1)- number(num2);
//             alert("la resta entre " + num1 + " y " + num2 + "es" + resultado);
//             break;
//             case "division":
//                 resultado = number(num1)/ number(num2);
//                 alert("la division entre " + num1 + " y " + num2 + "es" + resultado);
//                 break;
//                 case "multiplicacion":
//                     resultado = number(num1)* number(num2);
//                     alert("la multiplicacion entre " + num1 + " y " + num2 + "es" + resultado);
//                     break;
//                     default:
//                         alert("esto no es una operacion");
//                         break;
//  }

///////////////////////////////////////////////////////////////////////////////////////      RETO NUMERO 3
// let postulante = prompt(" Digita el nombre del postulante");
// let preguntas = prompt(" Ingresa el total de preguntas realizadas");
// let correctas = prompt(" Ingresa el total de preguntas realizadas correctamente");
// respuesta= (parseInt(correctas) * 100) / parseInt(preguntas);
// if (respuesta >= 90) {
//     var nivel = ("Superior");
// }
// else if (respuesta >= 75 && respuesta < 90) {
//     var nivel = ("Medio");
// }
// else if (respuesta >= 50 && respuesta < 75) {
//     var nivel = ("Regular");
// }
// else {
//     var nivel = ("Fuera de Nivel");
// }


///////////////////////////////////////////////////////////////////////////////////////////
// //desarrollar un programa que muestre la tabla de multiplicar del 5 (del 5 al 50)
//  var tabla = 5;
//  for( var f =1; f <=10; f ++){
//      document.write(tabla +'-');
//      tabla = tabla + 5;
//  }

//////////////////////////////////////////////////////////////////////
// let numero =prompt("ingrese el numero natural: ");
// let fact = 1;
// for(let i = 1; i <= numero; i++){
//     fact *= i;
// }
// console.log(" el factorial de " + numero + " es " + fact);

////////////////////////////////////////////////////////////////////////////////   RETO NUMERO 4
// let numero = prompt("ingrese un numero 1-10")
// let tabla =1;
// for(let f=1; f <= 12; f ++){
//     document.write(tabla + '-');
//     tabla = tabla + 1;
// }

//sumatoria=0;
// for ( var f=0; f<5; f++){
//     var numero=prompt("ingrese 10 numeros");
// }
// for(var f=0; f<5; f++){
//     var numero=prompt("ingrese 10 numeros");
//     sumatoria  = parseInt (sumatoria) + parseInt(numero);
// }
// document.write("la suma de los 5 ultimos digitos es:" +sumatoria)

///////////////////////////////////////////////////////////////////////               RETO NUMERO 5
//let numerodecuenta, nombrecuenta, saldoactual, estadodecuenta;

// do{
//     nombre = prompt("ingrese su nombre: ");
//     numerodecuenta = prompt("ingrese el numero de la cuenta: ");
//     saldoactual = prompt("ingrese el saldo de la cuenta ");

//     if(saldoactual > 0){
//         alert("USTED ES ACREEDOR");
//     }else if (saldoactual - 0){
//         alert("SU CUENTA ESTA AL DIA");
//     }else if(saldoactual < 0){
//         alert("USTED ES DEUDOR");
//     }
//     estadodecuenta - document.write("el nombre y numero de la cuenta es \n" + cuenta + numerodecuenta + " el saldo actual es " + saldoactual);

// }while (estadodecuenta)

// /////////////////////////////////////////////////////////////////////// RETO NUMERO 6
//  var vectoruno = [], vectordos = [],vectortres = [];
//  let tamano= prompt ("Elija el tamaño de los vectores");
//  for (var i=0; i<parseInt (tamano);i++){
//      var numero1= prompt(" Ingrese valor números del vector uno");
//      vectoruno.push (parseInt (numero1));
//  }
//  for (var i=0; i<parseInt (tamano);i++){
//      var numero2= prompt(" Ingrese valor números del vector dos");
//      vectordos.push (parseInt (numero2));
//  }
//  for (var i=0; i<parseInt (tamano);i++){
//      vectortres.push (parseInt (vectoruno [i])+parseInt (vectordos[i]));

// // }

