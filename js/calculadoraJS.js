var num1;
var num2;
var operand; 
var error = false;
var nextDigit = false;
var decimal = false;

function result(){

    var result;

    switch (operand){
        case '+':
            result = num1+num2;
            break;
        case '-': 
            result = num1-num2;   
            break;
        case '*': 
            result = num1*num2;
            break;
        case '/':
            error = num2 != 0 ? false : true;
            result = !error ? num1/num2 : null;

            break;     
    }

    if(!error){
      //show(num1+operand+num2+' = '+result.toFixed(2)); 
      show(result.toFixed(2)); 
    
    }else{
        show('Error: '+num1+'/'+num2);
        
    }

    resetCalc();
    
}

function addDigit(num){

    if(!decimal){
        if(!num1){
            num1 = num;
            show(num1);
        }else{
            if(!nextDigit){
                num1 = num1*10 + num;
                show(num1);
            }else{
                if(!num2){
                    num2 = num; 
                    show(num2);
                }else{
                    num2 = num2*10 +1; 
                    show(num2);
                }
            }
        }

    }else{
        if(!num1){
            num1 = 0;
            num1 = decimals(num1,num);
            show(num1);
        }else{
            if(!nextDigit){
                num1 = decimals(num1,num);
                show(num1);
            }else{
                if(!num2){
                    num2 = 0;
                    num2 = decimals(num2,num); 
                    show(num2);
                }else{
                    num2 = decimals(num2,num);
                    show(num2);
                }
            }
        }
        
    }

}

function addDecimal(){
   decimal = true;
}

function decimals(num,dec){

    console.log(num,dec);

    if(num % 1 == 0){
        return num + dec*0.1;
    }else{
        var aux = ""+ num + dec;
        var decimal = parseFloat(aux);

        return decimal;
    
    }
    
}

function addOperand(type){
    operand = type;
    nextDigit = true;
    decimal = false;
}

function resetCalc(){
    operand = null;
    num1 = null;
    num2 = null;
    error = false;
    nextDigit = false;
}

function resetPantalla(){
    show("");
}

function show(num){
    document.getElementById("pantalla").value = num;
}