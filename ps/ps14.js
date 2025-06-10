let button = document.querySelector("button");
let currentmode = "light";
button.addEventListener("click",() => {
    console.log("you are try to change mode");
    if(currentmode === "light"){
        currentmode = "dark";
        document.querySelector("body").style.backgroundColor="black";
    }else{
        currentmode = "light";
        document.querySelector("body").style.backgroundColor="white";
    }
    console.log(currentmode);
    
});

