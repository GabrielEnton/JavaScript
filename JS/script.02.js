"use strict";

let div = document.querySelector("#tab");

let linha = Number(prompt("Digite a quantidade de linha: "));
let coluna = Number(prompt("Digite a quantidade de colunas: "));

let saida = "<table>";

for (let x = 1; x <= linha; x++) {
    saida += "<tr>"
    for (let y = 1;y <= coluna;y++){
        if (y %2 == 0){
            saida += `<td class="par">${x},${y}</td>`
        }
        else{
            saida += `<td class="impar">${x},${y}</td>`
        }
    }

    saida += "</tr>"
}

saida += "</table>"
div.innerHTML = saida;