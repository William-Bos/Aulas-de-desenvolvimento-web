let velocidade = 80

while(velocidade > 0){
    alert("O carro está a "+ velocidade + " km por hora")
    velocidade-=20
    //velocidade = velocidade - 20
    alert("Diminuindo 20 km por hora")
    
    if (velocidade=== 40){
        break
    }
}
alert("O carro parou")