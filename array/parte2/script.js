const arr = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"]
console.log(arr)
//push(add no final do array)

arr.push("Boramir")
arr.push("Boramir")
arr.push("Boramir")
console.log(arr)

//unshift(Add no começo do array

arr.unshift("Boramir")
console.log(arr)

//(remove o ultimo elemento do array)
let ultimoElemento= arr.pop()
console.log(arr)
console.log(ultimoElemento)

//remove o primeiro elemento do array

ultimoElemento= arr.shift()
console.log(arr)
console.log(ultimoElemento)

//pesquisar se tem um elemento no array

const inclui = arr.includes("Gandalf")

console.log(inclui)

//pesquisar qual o indice do elemento


const indice = arr.indexOf("Gandalf")
console.log(indice)

// cortar (meio que é o ctrl c e ctrl v)

const hobbitis = arr.slice(0,4)
const outros = arr.slice(-4) // comecando la do final do array, -1 é o ultimo, no caso o primeiro de tras para frente, dai nesse exemplo ele puxa o -4 e vai ate -1
console.log(arr)
console.log(hobbitis)
console.log(outros)

//vai juntar os arrays, e da para colocar outros também

const sociedade = hobbitis.concat(outros, "Pedro", 2)
console.log(sociedade)

//Substituicao dos elementos

// vai substituiir apartir do indiece nesse caso, vai substituir um elemento, e o outro é o resultado desse elemento
const ElementosRemovidos = sociedade.splice(indice,1,"O cinzendo")

//iterar sobre os elementos do array

for (let indice = 0; indice < sociedade.length; indice++) {
  const elemento = sociedade[indice]
  console.log(elemento + " se encontra na posição " + indice)
}
