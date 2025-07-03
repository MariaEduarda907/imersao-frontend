ganhou = 0
for(let rodada = 1; rodada <= 3; rodada++){
    

    escolhaJogador = prompt("Nível" + rodada + ", vidro (1, 2 ou 3 )?: ")
    pisoQuebrado = Math.floor(Math.random()*3) + 1
    
if(escolhaJogador == pisoQuebrado){
    alert("O vidro quebrou, você morreu")
    rodada = 
    ganhou = 1
}

else {
    alert("Passou, o vidro quebrado estava em: " + pisoQuebrado)
}
    rodada = rodada + 1
}

if (ganhou == 0) {
    alert("Você ganhou!")
}