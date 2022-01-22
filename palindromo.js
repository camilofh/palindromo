

function esPalindromo(cadena){
     let array = cadena.split("");
     let reverse = array.reverse();

     return cadena == reverse.join("") ? "si es" : "no es"
   }

   console.log(esPalindromo("oso"))
