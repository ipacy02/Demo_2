'use strict'
// const mark_mass=78
// const mark_height=1.69

// // //const height=92
// // const john_mass=92
// // const john_height=1.95


// // const BMI1=mark_mass/(mark_height*mark_height)
// // const BMI2=john_mass/(john_height*john_height)

// // // console.log(BMI1)
// // // console.log(BMI2)
// // // //3
// // // const markHigherBMI=(BMI1>BMI2)
// // // console.log(markHigherBMI)

// // //Challenge 2
// // // if(BMI1>BMI2){
// // //     //console.log("Mark's BMI is higher than John's!")
// // //     console.log(`Mark's ${BMI1} is higher than ${BMI2}` )

// // // }else{
// // //     //console.log("John's BMI is higher than Mark's")
// // // }

// // //3.
// // //challenge 3

// // const dolphins= (96+108+89)/3
// // //console.log(dolphins)

// // const koalas=(88+91+110)/3
// // //console.log(koalas)



// // if(dolphins>koalas){
// //     console.log("dolphins wins")
// // }else if(koalas>dolphins){
// //     console.log("koalas wins")
// // }else if(dolphins===koalas){
// //     console.log("Draw on both side")
// // }
// // //3 Bonus 1
// // const dolphins1=(97+112+101)/3
// // const koalas1=(109+95+123)/3
// // const score=100

// // if(dolphins1>koalas1 && dolphins1===score){
// //     console.log("dolphins wins")
// // }else if(dolphins1<koalas && koalas1>=score){
// //     console.log("koalas wins")
// // }
// //     //Bounus 2
// //     const dolphins2=(97+112+101)/3
// //     const koalas2=(109+95+106)/3
// //     if(dolphins2===koalas2 && dolphins2 && koalas2 >=100){
// // console.log("Draw Occur")
// //     }
// // const age=20
// // const drink = age >=18 ? "He can drink" : "He can not"
// // console.log(drink)

// // // challenge 4
// //const bill= 40
// // const bill= 275
// // const tip=bill>= 50 & bill<=300 ? bill*15/100: bill*20/100
// // const result= bill + tip
// // console.log(result)


// // function fruitMake(orange, apple){
// //     //console.log(orange, apple)
// //     const result2= `the juice is ${orange} and ${apple}`
// //     return result2
// // }
// // console.log(fruitMake(4, 6)) 

// // //Part 2

// // //challenge 1

// // const calcAverage = (n1, n2, n3)=>{
// // const result =(n1+n2+n3)/3
// // return result
// // }
// // const avgDolphins=calcAverage(44, 23, 71)
// // const avgKoalas=calcAverage(65, 54, 49)

// // const avgDolphins2=calcAverage(85, 54, 41)
// // const avgKoalas2=calcAverage(23, 34, 27)


// // console.log(avgDolphins, avgKoalas)
// // console.log(avgDolphins2, avgKoalas2)
 
// //  function checkwinner(avgDolphins, avgKoalas){
// //     if(avgDolphins*2 && avgDolphins> avgKoalas)
// //      console.log(`the winner is  ${avgDolphins} vs ${avgKoalas}`)
 
// //  }if(avgKoalas*2 && avgKoalas> avgDolphins){
// //     console.log(`the winner is  ${avgKoalas} vs ${avgDolphins}`)

// //  }else{
// //     console.log("No team wins")
// //  }




// //  checkwinner(avgDolphins, avgKoalas)
// //  checkwinner(avgDolphins2, avgKoalas2)

//  //challenge 2


// function calcTip(bill){
//     if(bill>=50 && bill<=300){
//         const tip =  bill*15/100
//         return tip
//     }else{
         
//          return bill*20/100
//     }

// }

// console.log(calcTip(100))
// //console.log(calcTip(44))


// //2
// const bills=[125, 555, 44]
// //3
// const tips=[calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
// const total=[bills[0] + tips[0], bills[1] +tips[1], bills[2] +tips[2]]
// console.log(bills, tips, total)
//const tips=[18.75, 111, 8.8 ]

//const total=[143.75, 666, 48.4]

// const interestedIn= prompt('What do you want to know')
// console.log(interestedIn)

// Coding Challenge 3

// const Mark={
//     firstName: 'Mark Ndagije',
//     mass: 92,
//     height: 1.95,
//     calcBMI: function(){
//         this.BMI= this.mass / this.height ** 2;
//         return this.BMI
//       }
//   }
//    const John={
//     firstName: 'John Murava',
//     mass: 78,
//     height: 1.69,
//     calcBMI: function(){
//         this.BMI= this.mass / this.height ** 2;
//         return this.BMI
//       }
//   }
   
// John.calcBMI()
// Mark.calcBMI()
// console.log(Mark.BMI, John.BMI)

// if(Mark.BMI>John.BMI){


// console.log(`${John.firstName} (${John.BMI}) is higher than ${Mark.firstName} ${Mark.BMI} `)
// }else if(Mark.BMI<John.BMI){
//     console.log(` ${Mark.firstName} ${Mark.BMI} is higher than ${John.firstName} (${John.BMI}) `)


// }
//console.log(John.BMI)
//Mark.calcBMI(78, 1.69)


//console.log(`John's ${John.calcBMI} is higher than Mark's ${Mark.calcBMI}`)

//coding challenge #4

// const bills=[22, 295, 176, 440, 37, 105,10,1100, 86, 52]
// const tips=[]
// const totals=[]
// //use calcTip

//     function calcTip(bill){

       

//     if(bill>=50 && bill<=300){
//         const tip =  bill*15/100
//         return tip
//     }else{
         
//          return bill*20/100
//     }
    
// }
//  for(let i=0; i<bills.length; i++){
    
//     const tip= calcTip(bills[i])
//    tips.push(calcTip(bills[i]))

  
//    totals.push(tip + bills[i]) 
//  //const totals= 
//     // const tips=[calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
// // const total=[bills[0] + tips[0], bills[1] +tips[1], bills[2] +tips[2]]


// }
// console.log(bills, tips, totals)

// let na=['pac', 'mani', 'ol']
// let add=[]

// let addIntoArray= na
// add.push(na)


// console.log(add)

// //Bonus

// let sum=0
//  function calcAverage(arr){
// for(let i=0; i<arr.length; i++){
    
//     sum += arr[i]
     

  
     

//  }
//  return sum/arr.length
//  }
//  console.log(calcAverage(totals))
 //console.log(calcAverage(tips))


//  const greet = function (greeting){
//     return function(name){
//         console.log(`${greeting} ${name}`)
//     }
//  }

//  const greeterHey= greet('Hey')
//  greeterHey('Jonas')
//  greeterHey('Steven')

 
//  greet('Hello') ('Jonas')

//  //const greet2 = greeting=> name=> console.log( (`${greeting} ${name}`))


// //  const addTax= (rate, value) => value + value*  rate
// //  console.log(addTax(0.1, 200))


// //  //first number of bind is this that's why I use 
// //  // we can use bind in the time we will need to use that function most of the time 

// //  const addVAT= addTax.bind(null, 0.23)
// //  console.log(addVAT(150))

// // const addTax2= function(value){
// //     return function(rate){
// //         return value + value * rate
// //        // console.log(addTax)
// //     }
    
// // }
// // const addVAT2= addTax2(100)

   
// // console.log(addVAT2(0.1))
// // console.log(addVAT2(0.3))

// const vat3 =(value, rate)=> value + value * rate
// const value=vat3.bind(null, 100) 
// console.log(value(0.3))


//Working with arrays
//coding challenge 


function checkDogs(dogsJulia, dogsKate){
    const dogAge=dogsJulia.slice()
    dogAge.splice(0, 1 )
    dogAge.splice(-2 )

    console.log(dogAge)
const both= dogAge.concat(dogsKate)
console.log(both)
      dogAge.forEach(function(dog, i){
        if(dog>3){
            console.log(`dog ${i + 1} is and adult, and is ${dogAge}`)
        }else {
            console.log(`dog ${i + 1} is still a puppy ${dogAge}`)

        }
      })

}

//My review
checkDogs( [3, 5, 2, 12, 7], [4, 1, 15, 8, 3])



// const dogs= [3, 5, 2, 12, 7]
// console.log (dogs.slice(-2))
// //console.log(dogs)
