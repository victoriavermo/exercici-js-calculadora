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
      console.log(num1+operand+num2+' = '+result);  
    }else{
        console.log('Error: '+num1+'/'+num2);
    }

    resetCalc();
    
}

function addDigit(num){

    if(!decimal){

        if(!num1){
            num1 = num;
        }else{
            if(!nextDigit){
                num1 = num1*10 + num;
            }else{
                if(!num2){
                    num2 = num; 
                }else{
                    num2 = num2*10 +1; 
                }
            }
        }

    }else{
        if(!num1){
            num1 = 0;
            num1 = num1 + num*0.1;
        }else{
            if(!nextDigit){
                num1 = num1 + num*0.1;
            }else{
                if(!num2){
                    num2 = 0;
                    num2 = num2 + num*0.1; 
                }else{
                    num2 = num2 + num*0.1;
                }
            }
        }
        
    }
    
    


}

function addDecimal(){
   decimal = true;
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