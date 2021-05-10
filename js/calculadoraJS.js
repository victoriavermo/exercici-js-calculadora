/*Operands:
    1 -> +
    2 -> -
    3 -> *
    4 -> /
*/

var num1;
var num2;
var operand; 
var error = false;

function calculadora(operand,num1,num2){

    var result;

    switch (operand){
        case 'add':
            result = num1+num2;
            break;
        case 'substract': 
            result = num1-num2;   
            break;
        case 'multiply': 
            result = num1*num2;
            break;
        case 'divide':
            error = num2 != 0 ? false : true;
            result = !error ? num1/num2 : null;

            break;     
    }

    if(!error){
      console.log(num1+' - '+num2+' = '+result);  
    }else{
        console.log('Error: '+num1+'/'+num2);
    }
    
    
}