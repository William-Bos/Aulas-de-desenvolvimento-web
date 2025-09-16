const carroUm = prompt("Qual o seu primeiro carro?")
const velocidadeUm = parseFloat(prompt("Qual a sua velocidade?"))

const carroDois = prompt("Qual o seu Segundo carro?")
const velocidadeDois = parseFloat(prompt("Qual a sua velocidade?"))

if (velocidadeUm > velocidadeDois){
    alert("O carro " + carroUm + " é mais rapido")
} else if(velocidadeUm < velocidadeDois ){
    alert("O carro " + carroDois + " é mais rapido")
} else{
    alert("Os dois tem a mesma velocidade")
}
