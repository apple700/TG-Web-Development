
//5.1 opdracht
var nummers=[1,3,5,7,9,2,4,6,8,10];
console.log(nummers)

var fruit=["Banaan", "Appel" ," Aardbei", " Ananas", " Kersen"];


console.log(fruit)


console.log(fruit[1] + fruit[2]);

var random= nummers[Math.floor(Math.random()* 5 )]; 
console.log(random)
if(random < fruit.length){
console.log(fruit[random]);
}

else{
    console.log("Foutmelding, je array is te klein. Probeer nog eens")
}


console.log(fruit.length)
fruit[1]="Peer";
console.log(fruit);




var verander=moveTo(fruit, 1,3)
console.log(verander)

//5.2 opdracht Loops
const dutchSport= ["Voetbal" , "Hockey" , "Schaatsen"]
console.log(dutchSport)

var tekst= " ";
var x;
for(x of dutchSport){
    tekst+= dutchSport[x]+ " ";
}
console.log(tekst)

const dutchSports= ["Voetbal" , "Hockey" , "Schaatsen"]
var y;
 for (y of dutchSports){
     console.log(y)
 }

 var getal= new Array (20)

console.log(getal)


for(b=0; b<=20 ; b++){
    if(b % 2 == 0){
        console.log(b)
    }
    
}

for (let i = 0; i < 1; i++) {
    console.log("- Buitenloop");
    for (let j = 0; j <= 2; j++) {
      console.log("Innerloop");
    
    for (let x=0; x<=10 ; x++){

        console.log(" " + x)
    }
    for(r=0; r<=20 ; r++){
        if(r % 2 == 0){
            console.log(r)
        }    
    }
}    
for (h=1; h<=30; h++)
if(h % 3 == 0)
console.log(h + " ")  
}

var x = 0,  y = 1, sum, i;  

for ( i = 1; i <= 20; i++)  {
console.log(x)
    sum = x + y 
      
    x = y;  
    y = sum; 
}  

