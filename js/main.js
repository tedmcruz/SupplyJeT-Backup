// Commentary

/* 
Multiline
Commentary
*/

/* 
Notes
Variables are defined by "let" and "var". These are modifiable.
Constants are defined by "const". This is not modifiable.
Use specific variable and constant names and use lowercase letter or camelCase while naming them. Don't use accents or spaces.
Number: Numbers and functions
Strings: Letters
Use " ; " at the end of every line in JS, unless it is an "if" function.
It is possibe to do mathematical formulas in JS without any aditional steps other then writng the function.
If the add fuction is used on a string, it will concatenate the strings without spaces.
To asigne a value to a variable, use " = " sign.
One "=" asigns, two "==" compares, three "===" compares value and type of data.
"!=" different from. "!==" stictly different from.
" < , <= , > , >= " comparative operators.
"&&" = and , "||" = or , "!" = not.
To use prompt it is imperative to use an " = " sign, for ex:[ let name = prompt("Enter Name","No name entered"); ] , this allows for user input. Whatever is witten after the " , " will be the default value if nothing is entered.
To use console it is imperative to use an " = " sign, for ex:[ console.log("Test message"); ] , this shows "Test message" on brower console.
To use alert it is not necessary to use " = " sign, for ex:[ alert("Test message"); ] , this will alert for user of message "Test message".
To convert a string to an integer use "parseInt()" function.
To convert an Integer to a String use se the "toString()" function.
To use for it is necessary to identify start (this funciton is executed), condition to end (which is compared to) and variation of code (increase or decrease, which is executed), for ex:[ for (let i = 1; i <= 10; i++)] ("i++"" means that the next sequence will add "1" to "i", which could be replaced with i=i+1)
When using 'break' inside "for", it will break code when "if" condition is met.
When using "continue" inside "for", it will skip code when "if" condition is met and continue with next value.
When using "while", the code will restart (rerun) as long as the "while" condition is met.
When using "do" "while", there is no need to put a new prompt at the end.
When using "switch" within "while", the code run will skip until the "case" with the entered value. The "default" will run when the prompt value doesn't match a "case" value.
*/

alert("Este pagina es para compras y cotizaciones en SUPPLYJET");

function probarCodigo()
    {   
        let nombre=prompt("Ingrese Nombre","John");
        let apellido=prompt("Ingrese Apellido","Smith");
        let edad=prompt("Ingrese edad",33)
        let suma;
        var numero1;
        let numero2;
            numero1=prompt("Numero primer a sumar");
            numero2=prompt("Segundo numero a sumar");
            suma=parseInt(numero1)+parseInt(numero2);
            mensaje="Soy "+ nombre + " " + apellido + " y tengo " + edad + " años de edad." + " El resultado de la suma solicitada = "+suma;
        alert(mensaje);
        console.log(mensaje);
    }

