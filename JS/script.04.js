let numericos = document.querySelectorAll(".botao");
for (let botao of numericos) {
    botao.addEventListener("click", function () {
        add(botao);
    })
}

let op = document.querySelectorAll(".botao_op");
for (let botao of op) {
    botao.addEventListener("click", function () {
        add(botao);
    });
}

function add(botao) {
    document.querySelector("#visor").value += botao.innerHTML
}

document.querySelector("#limpar").addEventListener("click", function () {
    document.querySelector("#visor").value = "";
})

document.querySelector("#resp").addEventListener("click", function () {
    document.querySelector("#visor").value = eval(document.querySelector("#visor").value);
});

document.querySelector("#pow").addEventListener("click", function () {
    document.querySelector("#visor").value += "**";
});

document.querySelector("#raiz").addEventListener("click", function () {
    document.querySelector("#visor").value = Math.sqrt(Number(document.querySelector("#visor").value));
});

document.querySelector("#round").addEventListener("click", function () {
    document.querySelector("#visor").value = Math.round(Number(document.querySelector("#visor").value));
});