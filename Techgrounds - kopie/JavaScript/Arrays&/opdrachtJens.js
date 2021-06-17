
let sum= 0;
for (x=0; x<50; x++){

    if((x % 3 == 0 || x % 5== 0)){
    console.log(" " + x)
    sum +=x;
      
}

}

console.log(sum)

sum = 0
for (i = 0; i < 50; i+=3) {
    console.log(i)
    sum +=i
}

for (j = 0; j < 50; j+=5) {
    sum += j
    console.log(j)
}


console.log(sum)
