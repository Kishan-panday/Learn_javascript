let num=[3,4,45,78,23,3435,5457,4457,9,987]
let compare=(a,b)=>{
    return a-b
}
num.sort()
 console.log(num)
 num.sort(compare)

  console.log(num)


num.splice(3,1,10,56,224)
 console.log(num) 