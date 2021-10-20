//Escreva uma função chamada snapCrackle que leva um parâmetro denominado: maxValue.
function snapCrackle(maxValue) {
    let meuRetorno = ''
    //Esta função deve fazer um loop de 1 até maxValue (inclusive) e montar uma string com as seguintes condições para cada número:
    for (let counter = 1; counter <= maxValue; counter++){
        //Se o número for tanto ímpar quanto múltiplo de 5, no lugar dele, concatenar "SnapCrackle" no final da string.
        if((counter%2 !==0) && (counter%5 ==0)){
            meuRetorno += 'SnapCrackle'
            if (counter !== maxValue){
                meuRetorno += ', '
            }
        }
        //Se o número for múltiplo de 5, no lugar dele, concatenar "Crackle" no final da string.
        else if(counter%5 ==0){
            meuRetorno += 'Crackle'
            if (counter !== maxValue){
                meuRetorno += ', '
            }
        }
        //Se o número for ímpar, no lugar dele, concatenar "Snap" no final da string.
        else if(counter%2 !==0){
            meuRetorno += 'Snap'
            if (counter !== maxValue){
                meuRetorno += ', '
            }
         }
         //Se número não for nem ímpar e nem múltiplo de 5, concatenar o próprio número no final da string.
         else{
            meuRetorno += counter
            if (counter !== maxValue){
                meuRetorno += ', '
            }
         }
    }
 return meuRetorno;
}
 console.log(snapCrackle(12));

 //Escreva uma segunda função chamada snapCracklePrime que recebe um parâmetro denominado: maxValeu 
 //e segue as mesmas regras da anterior, apenas com um adicional:Se o número for primo, no lugar dele, concatenar "Prime" no final da string

function snapCracklePrime (maxValeu) {
    let meuRetorno = ''
    //Esta função deve fazer um loop de 1 até maxValeu (inclusive) e montar uma string com as seguintes condições para cada número:
    for (let counter = 1; counter <= maxValeu; counter++){
        
        //Se o número for tanto ímpar quanto múltiplo de 5, no lugar dele, concatenar "SnapCrackle" no final da string.
        if((counter%2 !==0) && (counter%5 ==0)){
            meuRetorno += 'SnapCrackle'
            meuRetorno += isPrime(counter)
            if ((counter !== maxValeu)&& (divisores = 1)){
                meuRetorno += ', '
            }
        }
        //Se o número for múltiplo de 5, no lugar dele, concatenar "Crackle" no final da string.
        else if(counter%5 ==0){
            meuRetorno += 'Crackle'
            meuRetorno += isPrime(counter)
            if ((counter !== maxValeu)&& (divisores = 1)){
                meuRetorno += ', '
            }
        }
        //Se o número for ímpar, no lugar dele, concatenar "Snap" no final da string.
        else if(counter%2 !==0){
            meuRetorno += 'Snap'
            meuRetorno += isPrime(counter)
            if ((counter !== maxValeu)&& (divisores = 1)){
                meuRetorno += ', '
            }
         }

         else{
            let primos = isPrime(counter)

            if (primos === 'Prime'){
                 meuRetorno += primos
            }
            else{
                meuRetorno += counter
            }

            if ((counter !== maxValeu)&& (divisores = 1)){
                meuRetorno += ', '
            }
         }
    }
 return meuRetorno;
}

function isPrime(counter){
    //Se o número for primo, no lugar dele, concatenar "Prime" no final da string
    let RetornoPrimo = ''
    let divisores = 0

    //Um número é primo se ele é maior que 1 e é divisível apenas por si próprio e por 1.
    for(let counterPrime =2; counterPrime<counter; counterPrime++) {
        if(counter % counterPrime === 0) { 
            //não é primo   
            divisores = 1;
        }  
    }
    
     //Se número não for nem ímpar, nem múltiplo de 5 e nem primo, concatenar o próprio número no final da string.
     if(counter > 1 && (divisores == 0 || counter == 2 )){
        RetornoPrimo = 'Prime'      
    }
    return RetornoPrimo
}
 console.log(snapCracklePrime(15));