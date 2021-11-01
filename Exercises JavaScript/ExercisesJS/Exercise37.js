// 37) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
import { validateArray , validateNumber } from "./validations.js"
'use strict'

const numberFinder = array => {
    let higher = 0 , less = 0, validateState = true;
    if(validateArray(array)){

        if(array.length > 1 ){

            for (let index = 0; index < array.length; index++) {
                if(validateNumber(array[index]) && validateState){
                    validateState = true;
                }else{
                    console.error(`wrong element ${index} of array => element [${typeof(array[index])}] \n was expected => element [number]`); 
                    validateState = false;
                }

            }
            
            if(validateState){
                less = Math.min(...array);
                higher = Math.max(...array);
                console.log(`the number array is => [${array}]`);
                console.log(`the greater number is : ${higher}`);
                console.log(`the smallest number is : ${less}`);
            }

        }else{
            console.error(`the array length is => ${array.length} \nthere is nothing to calculate!!!`);
        }
    }else{
        console.error(`was spected array!! not ${typeof array}`);
    }
}

// TESTING
numberFinder([10 ,1, 400, 5, 45, 900, -34]);
numberFinder([1, 4, 5, 99, -60]);
numberFinder([10 ,1, 400, "56"]);
numberFinder([]);
numberFinder([10,"ether"]);
numberFinder([10]);
numberFinder();
numberFinder({});
numberFinder(1);
numberFinder(false)
numberFinder("[10 ,1, 400]");

