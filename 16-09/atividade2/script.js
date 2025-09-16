let nomePoder = prompt("Qual o nome do seu personagem?")
let poderDeAtaque = parseFloat(prompt("Qualo dano dessa habilidade?"))

let nomePersonagem2 = prompt("Qual o nome do personagem que vai sofrer o golpe?")
let pv = parseFloat(prompt("Quantos pontos de vida ele tem"))
let poderDeDefesa = parseFloat(prompt("Quanto a sua CA?"))
let escudo = prompt("Ele possui um escudo?")



if (poderDeAtaque > poderDeDefesa && escudo === "nao"){
    pv= pv-poderDeAtaque
    alert("Sua vida está em" + pv)
}else if(poderDeAtaque > poderDeDefesa && escudo === "sim"){
    pv= pv - poderDeAtaque/2

    alert("Sua vida está em" + pv)
}else{
    alert("O personagem secundario não tomou dano")
}

alert(" O " + nomePersonagem2 +" está com " + pv + " pontos de vida\n"
    + " Sua defesa é de" + poderDeDefesa 
)