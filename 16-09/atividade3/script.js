const valor = parseFloat(prompt("Qual o valor que deseja converter? ( Em metros por favor )"))
const unidade = parseFloat(prompt(
  "Para qual unidade de medida deseja converter?" +
  "\n1 - milímetros (mm)" +
  "\n2 - centímetros (cm)" +
  "\n3 - decímetros (dm)" +
  "\n4 - decâmetros (dam)" +
  "\n5 - hectômetro (hm)" +
  "\n6 - quilômetro (km)"
))
let resultado = ""

switch(unidade){
    case (1):
        resultado = valor * 1000
        alert("O resultado da conversão é:  " + resultado)
        break
    case (2):
        resultado = valor * 100
        alert("O resultado da conversão é:  " + resultado)
        break
    case (3):
        resultado = valor * 10
        alert("O resultado da conversão é:  " + resultado)
        break
    case (4):
        resultado = valor / 10
        alert("O resultado da conversão é:  " + resultado)
        break
    case (5):
        resultado = valor / 100
        alert("O resultado da conversão é:  " + resultado)
        break
    case (6):
        resultado = valor / 1000
        alert("O resultado da conversão é:  " + resultado)
        break
    default :
    alert("Opção invalida")

        
    
}