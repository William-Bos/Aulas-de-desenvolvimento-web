let pacientes = ["Pedro", "Julia"]
let menu =""
//join vai transformar em string e colocar separador
do{ 
    menu = prompt("Fila de pacientes : \n\n" + pacientes.join("\n")+ "\n\n" + "Voce deseja:\n A) Adicionar pacientes \n B) Fazer atendimento \n C) Sair\n Responda com as Letras correspondentes")
        if (menu=== "A" || menu ==="a"){

            pacientes.push(prompt("Qual nome do paciente?"))
            alert ("Fila de espera: \n" + pacientes.join(","))
            
        }else if (menu=== "B" ||menu ==="b"){

            pacientes.shift()
            alert ("Fila de espera: \n" + pacientes.join(","))
        }
            
}while(menu!== "c" && menu!=="C")addEventListener
alert ("Fila de espera final: \n" + pacientes.join(","))