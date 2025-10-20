function areaTriangulo(){
    const base = parseFloat(prompt("Qual sua base?"))
    const altura = parseFloat(prompt("Qual sua altura?"))
    alert("Sua Área é: "+ (base * altura /2))
    

}

function areaRetangulo(){
    const base = parseFloat(prompt("Qual sua base?"))
    const altura = parseFloat(prompt("Qual sua altura?"))
    alert("Sua Área é: " + (base * altura))
    

}

function areaQuadrado(){
    const lado = parseFloat(prompt("Qual seu lado?"))
    alert("Sua Área é: "+ (lado*lado))
    

}
function areaTrapezio(){
    const baseMaior = parseFloat(prompt("Qual sua base maior?"))
    const baseMenor = parseFloat(prompt("Qual sua base menor?"))
    const altura = parseFloat(prompt("Qual sua altura?"))
    alert("Sua Área é: "+(baseMaior + baseMenor) * altura /2)
    

}
function areaCirculo(){
    const raio = parseFloat(prompt("QUals eu raio?"))
    alert("Sua Área é: "+(3,14 *(raio*raio)))
    

}

let sair = ""
while(sair!=="sair" && sair !=="Sair"){
    
    sair = prompt("Voce gostaria de saber a area de A) Triangulo, B) Retangulo, C) Quadrado, D) Trapézio, E)Circulo ou Sair) Sair")
    if (sair==="a"|| sair ==="A"){
        areaTriangulo()
    }else if (sair==="b"|| sair ==="B"){
        areaRetangulo()
    }else if (sair==="c"|| sair ==="C"){
        areaQuadrado()
    }else if (sair==="d"|| sair ==="D"){
        areaTrapezio()
    }else if (sair==="e"|| sair ==="E"){
        areaCirculo()
    }else if (sair !== "sair" && sair !== "Sair") {
        alert("Coloque uma letra válida ou digite 'sair' para encerrar.")
    }
   


}