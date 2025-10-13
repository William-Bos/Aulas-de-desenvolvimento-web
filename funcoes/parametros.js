function dobro (x){
alert("O dobro de " + x + " é " + (x*2))

}

dobro(5)

function dizerOla(nome = "Usúario"){

    alert("Olá " + nome)


}

dizerOla("william")
dizerOla()


function soma (a,b){
    alert ("Resultado da soma é " + (a+b))

}

soma(6,8)


function criarUsuario(nome,email,senha,tipo = "Admin"){

    const usuario = {
        nome: nome,
        email: email,
        senha: senha,
        tipo: tipo
    }

    console.log(usuario)


}

criarUsuario("William", "william@gmail.com", "1234")

function muitosParametros(nome, telefone, endereco, aniversario,email, senha){


}


function objetoComoParametro(usuario){
    
    
}

const dadosDoUsuario = {
    nome: "pedro",
    telefone: "",
    email: "",
    senha: "",
    endereco: "",
    aniversario: "",
}

objetoComoParametro(dadosDoUsuario)