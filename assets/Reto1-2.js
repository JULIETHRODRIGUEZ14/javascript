 //////////////// RETO 1
 alert("reto 1 la abuela");
 let f = prompt("indique la temperatura que desee en grados f");
 let c =(f-32)/1.8;
 alert("la temperatura correcta es c es " +c);
 document.write("la temperatura es c " +c );
 console.log("la correcta es c" + c);


 ///////reto numero 2

 let { numero1, numero2, num3 } = newFunction();
 num1= prompt(" Ingrese primer número ");
 if (num1 >0){
     document.write(" Tu primer número es positivo " +num1+"<br>");
 }
 else{
     document.write(" Tu primer número es negativo " +num1+"<br>");

 }
 num2= prompt(" Ingrese el segundo número ");

 num3= prompt(" Ingrese el trecer número "); 
 if (num2 > num3){
     document.write(" Tu número " +num2+" es mayor que "+num3+"<br>");
 }
 else{
     document.write(" Tu número " +num2+" es menor que "+num3+"<br>");  
 }
 if(num1>num2){
     if(num1>num3){
         document.write("Tu numero "+num1+" es mayor a " +num2+" y "+num3+"<br>");
         document.write("Tu numero "+num2+" es menor que " +num3+"<br>");
     }
   
 }
 if(num2>num1){
     if(num2>num3){
         document.write("Tu numero "+num2+" es mayor a " +num1+" y "+num3+"<br>");
         document.write("Tu numero "+num1+" es menor que " +num3+"<br>");
     }
   
 }
 if(num3>num1){
     if(num3>num2){
         document.write("Tu numero "+num3+" es mayor a " +num1+" y "+num2+"<br>");
         document.write("Tu numero "+num1+" es menor que " +num2+"<br>");
     }  
         
 }
 else{
     document.write("Valida nuevamente");
 }

 let nume1;

 num1= prompt(" ingresa un número - o +");
 if (num1 >0){
     document.write(" Tu número es positivo " +num1+"<br>");
 }
 else{
     document.write(" Tu número es negativo " +num1+"<br>");

 }

 let num1,num2;

 num1= prompt(" Ingrese el primer número ");

 num2= prompt(" Ingrese el segundo número "); 
 if (num1 > num2){
     document.write(" Número Mayor " +num1+" Número Menor "+num2+"<br>");
 }
 else{
     document.write(" Número Menor " +num1+" Número mayor "+num2+"<br>");  
 }
function newFunction() {
    let num1, num2, num3;
    return { num1, num2, num3 };
}

