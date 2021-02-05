"use strict";
function criaTabela(linha, coluna) {

	let conteudo = "";
	conteudo += "<table border='1'>";
	for (let i = 1; i <= linha; i++) {
	  conteudo += "<tr>";
	  for (let j = 1; j <= coluna; j++) {
  
		if (j % 2 == 0) {
		  conteudo += "<td class='pares'>" + i + " , " + j + "</td>";
		} else {
  
		  conteudo += "<td class='impares'>" + i + " , " + j + "</td>";
		}
	  }
	  conteudo += "</tr>";
	}
	conteudo += "</table>";
	document.querySelector("#tab").innerHTML = conteudo;
  }
  window.onload = function() {
	let linha = Number(prompt("Digite a quantidade de linha"));
	let coluna = Number(prompt("Digite a quantidade de coluna"));
  
	criaTabela(linha, coluna);
	
  }
 