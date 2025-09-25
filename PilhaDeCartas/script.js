let cartas = [ "1♠","2♠","3♠","4♠","5♠","6♠","7♠","8♠","9♠","10♠"]
let menu =""
let cartasPuxadas =[]
while(menu !== "C" && menu !== "c"){

    menu = prompt(("Seu baralho tem " + cartas.length +" cartas\n, Você deseja\n A)Adicionar uma carta\n B)Puxar uma carta\n c) Sair" ))
    if (menu=== "a" || menu=== "A"){

        let cartanova = prompt("Qual carta voce quer adicionar?")
        cartas.push(cartanova)
        alert(cartas.join(","))
    }else if (menu=== "b" || menu=== "B"){
        cartasPuxadas.push(cartas[cartas.length-1])
        cartas.pop()
        alert(cartas.join(","))

        
    }
}
alert(cartasPuxadas.join(","))
//last in, first out
