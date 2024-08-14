
function sum(num1, num2){
    return num1 + num2
}


const num1=23
const num2=22
const result= sum(num1, num2)

console.log(result)




function sortass(numbers){
         return numbers.sort((a, b) => {
            return b-a
         })
}

const numbers =[12,34,454,565,55]
const sortnumbers =sortass(numbers)
console.log(sortnumbers)



function reverseNumber(num){  
    const strnum= num.toString();
    const reverseString =strnum.split('').reverse().join('')
    const number =parseInt(reverseString)

    return num <0 ? -number :number
   
}


console.log(reverseNumber(123533124));
console.log(reverseNumber(-123124));
console.log(reverseNumber(1523124));
