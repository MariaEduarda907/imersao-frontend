document.getElementById("resultadoBtn").addEventListener("click", function(){

//arrays - estrutura onde se armazena valores
personagem = [ "", "", ""]

viloes = ["", "", ""]

poderPersonagem = 0

poderViloes = 0



for (let i=0; i<3; i++){
    escolhaPersonagem = prompt("Digite o nome do seu personagem" + (i+1))
    personagem[i] = escolhaPersonagem
    poderPersonagem = poderPersonagem + Math.floor(Math.random() * 10) + 1
    //forcaPersonagem += Math.floor(Math.random() * 10) + 1 maneira mais avançada de fazer a mesma coisa
}

alert("Seus personagens são: " + personagem)

//alert("Agora o array persogem contém: " + personagem)
//alert("Início Vílões" + viloes)

for(let i=0; i<3; i++ ){
    indiceAleatorio = Math.floor(Math.random() * 10)
    viloesPossiveis = [" Malévola", " Rainha de copas", " Cruella", " Capitão gancho", " Ursula", " Homem das sombras", "Hades", " Rainha ma", " Scar", " Gothel"]
    viloes[i] = viloesPossiveis[indiceAleatorio]
    poderViloes = poderViloes + Math.floor(Math.random() * 10) + 1
}

alert("Os vilões são:" + viloes)

if(poderPersonagem > poderViloes){
    alert("Seu time ganhou! Seu poder é de: " + poderPersonagem)
}

else{
    if(forcaPersonagem < forcaViloes){
        alert("Seu time perdeu! O poder dos vilões é de " + poderViloes)
    }
    else{
        alert("Empate! Seus níveis de poder são iguais")
    }
}
});

//Var - têm escopo de função, o que significa que elas são acessíveis dentro da função em que foram declaradas, ou globalmente se declaradas fora de uma função. Além disso, var permite que você redeclara a mesma variável sem erro. Use var para compatibilidade com código mais antigo.

//Let - permite declarar variáveis com escopo de bloco. Isso significa que a variável só estará disponível dentro do bloco onde foi definida (por exemplo, dentro de um loop ou de uma estrutura condicional). let também não permite a redeclaração da mesma variável no mesmo escopo. Use let quando você precisa de uma variável que pode ser reatribuída e que tem escopo de bloco.


//Const - é usado para declarar variáveis que não devem ser reatribuídas. Assim como let, const tem escopo de bloco. No entanto, é importante lembrar que, se a variável for um objeto ou um array, você pode modificar suas propriedades ou elementos, mas não pode reatribuir a variável a um novo objeto ou array. Use const quando você não quer que a variável seja reatribuída.
