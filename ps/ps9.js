let val = [250,645,300,900,50];
for(let i=0; i<val.length;i++){
    let offer = val[i]/10;
    console.log("offer is -",offer);
    val[i] = val[i]- offer;
    console.log(val[i]);
}

