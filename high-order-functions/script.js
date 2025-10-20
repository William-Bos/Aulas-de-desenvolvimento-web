function calcular (a,b, operacao){
    console.log("Realizando uma operacao")
    const resultado = operacao(a,b)
    return resultado
}


function somar(x,y){

    console.log("Realizando uma soma")
    return x + y

}

console.log(calcular(3,5, somar))

console.log(calcular(10,5, function (x,y){
    console.log("Realizando uma subtracao")
    return x-y 
}))

function exibirElemento (elemento,indice,array){
    console.log({
        elemento,
        indice,
        array
    }
    )
}
const lista = ["maca","banana", "laranja"]

for(let i =0; i <lista.length;i++){
    exibirElemento(lista[i], i, lista)

}
lista.forEach(exibirElemento)

lista.forEach(function (elemento, indice, array) {
  console.log({
    elemento,
    indice,
    array
  })
})