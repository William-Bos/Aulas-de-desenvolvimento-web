const idade = parseFloat(prompt("Coloque sua idade"))

if (idade > 18) {
    alert("Adulto")   
} else if(idade == 18){ 
    alert("Jovem")
} else{
    alert ("Adolescente")
}
// forma abreviada de fazer um if e else: condicao ? se verdadeiro : se falso
const resultado = (6==6) ? "Verdadeiro" : "Falso"
console.log(resultado)