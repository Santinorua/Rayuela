const fs = require('fs');
let orden = String(fs.readFileSync(`orden.txt`)).split("\r\n")


console.log(orden);

let cuento;

for(let i=0; i<orden.length; i++){
let parrafo = String(fs.readFileSync(`Cuento/parte${orden[i]}.txt`));
if(cuento){
cuento = cuento + "\n" + parrafo;
}
else{
    cuento = parrafo
}
}

fs.writeFileSync("La autopista del sur.txt", cuento, 'utf-8')