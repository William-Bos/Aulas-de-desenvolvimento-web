let menu = ""
let imoveis = [{

    Nome_do_propietário : "Pedro",
    Quantidade_de_Quartos: 10,
    Quantidade_de_Banheiros: 7,
    Possui_garagem: "Sim",
    
}
]

while(menu.toUpperCase()!=="C"){//Assim vai transformar oque tem na variavel menu em maiusculo
    menu = (prompt("Voce gostaria de: \n A)Ver os imoveis cadastrados\n B) Cadastrar Imoveis\n C) Sair do programa"))
    if (menu === "A"|| menu === "a"){
       alert(JSON.stringify(imoveis, null,2));
    }
//transforma qualquer objeto ou array em texto legível
    if (menu === "B"|| menu === "b"){


        imoveis.push({})
        imoveis[imoveis.length-1].Nome_do_propietário = (prompt("Qual o nome do propietario?"));
        imoveis[imoveis.length-1].Quantidade_de_Quartos = (prompt("Qual a quantidade de quartos"));
        imoveis[imoveis.length-1].Quantidade_de_Banheiros = (prompt("Qual a quantidade de banheiros?"));
        imoveis[imoveis.length-1].Possui_garagem = (prompt("Possui garagem?"));


    }
}



alert("Obrigado por usar o cadastro de imoveis")