qntd = parseFloat(prompt("Quanto você tem?"))
let acao = ""

do{
    acao = prompt("Você tem " + qntd + " R$ Gostaria de adicionar, remover ou sair?")
    if(acao === "adicionar"){
        let valor = parseFloat(prompt("Voce gostaria de adicionar quanto?"))
        qntd += valor
        alert("Voce esta com" + qntd)
    }else if(acao === "remover"){
        let valor = parseFloat(prompt("Voce gostaria de remover quanto?"))
        qntd -= valor
        alert("Voce esta com" + qntd)
    }
}while(acao!== "sair")
alert(qntd)