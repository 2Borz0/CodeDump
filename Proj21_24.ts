/* Ex#23; Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'subaru')
• Look closely at your results, and make sure you understand why each line evaluates to True or False.
• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.*/

{ let car = 'Supra' 
console.log("Is car == 'Supra'? I say True")
console.log(car == 'Supra')
console.log("is car = Honda?")
console.log(car == 'honda' )
console.log(car == 'Celica' || 'Supra')
console.log(car == 'Celica' && 'Supra' )
}
//Ex#24 using logical operators with numerics/String?Array
{
    let n = 5
    console.log('1',n >= 10) 
    console.log('2',n <= 10)
    console.log('3',n == 10)
    console.log('4',n!= 10)
    console.log('5',n === 10)
    console.log('6',n!== 10)
    console.log('7',n > 10)
    console.log('8',n < 10)
    console.log('9',n >= 10 && n <= 10)
    console.log('10',n >= 10 || n <= 10)
    console.log('11',n >= 10 && n < 10)
    console.log('12',n <= 10 && n >= 10)
    console.log('13',n <= 10 || n >= 10) 

}
{
    let msg1 = ' will you make it?'
    let msg2 = 'I will make it'
    console.log('1',msg1.includes('will'))
    console.log('2', msg1 == msg2 )
    console.log('3', msg1 === msg2 )
    console.log('4', msg1!== msg2 )

}
{
 let test:string[] = ['1', "Gaddi", '4', "F6", '999']
    console.log('1',test.includes('1'))
    console.log('2',test.includes("Gaddi"))
    console.log('3',test.includes('5'))
    console.log('4',test.includes('999')) 
    console.log('5',test.includes('F6'))
}

