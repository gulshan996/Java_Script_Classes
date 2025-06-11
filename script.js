const fs= require('fs')
fs.writeFile('outpur.txt')
let str='gulshan kumar'
let str2=str.split('').reverse().join('')
console.log(str2)
let arr=['gulshan','rahul','mukesh','anjel']
let arr1=arr.map((e)=>{
  console.log(e.split('').reverse().join(''))

})
console.log(arr)
let arr3=arr.filter((e)=>{
  if(e!=='rahul'){
    console.log(e+' '+'kumar')
  }
}) 

let a=23;
let e=[23,34,5   ]
console.log(a)