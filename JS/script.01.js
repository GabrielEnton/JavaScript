"use strict";
let nomes = [];

while(true){
    let nome = prompt("Digite um nome");
    if (nome == "" || nome == null){
        break;
    }
    nomes.push(nome);
}

let div = document.querySelector("#tab");
let saida = "<table>"
saida += "<tr><th>Índici</th><th>Nomes</th></tr>"

for (let i = 0; i < nomes.length; i++){
    saida += `<tr><td>${i+1}</td><td>${nomes[i]}</td></tr>`;
}

saida +="</table>"
div.innerHTML = saida;