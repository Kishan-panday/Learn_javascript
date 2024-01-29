let  arr =[5,6,9,7,8,3,2,1,]
let a= arr.map((value,index,array)=>{
    console.log(value,index,array)
    return value + index
})
