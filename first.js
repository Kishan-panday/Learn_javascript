let btn = document.querySelector("#btn");
// btn.onclick= () => {
// console.log("button was clicked");
// 
let mode = "light";
btn.addEventListener("click", () =>{
    
    if (mode === "light") {
        mode ="dark";
        document.querySelector("body").style.backgroundColor="black";
    }
    else{
        mode = "light";
        document.querySelector("body").style.backgroundColor="white";
    }
console.log(mode);
});