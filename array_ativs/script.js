const matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
]


let resultado = 0
for(i=0; i < matriz.length ; i++){
    for( j=0; j < matriz[i].length; j++){
        elemento = matriz[i][j]
        resultado = resultado + matriz[i][j]
    }
}
console.log("A soma de todos os valores é:", resultado);

