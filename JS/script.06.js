let nomes = [];
let rgms = [];
let parcial = [];
let exercicios = [];
let projetos = [];
let regimental = [];

$("#btn1").click(function () {
    let nome = $("#nome").val();
    let rgm = $("#rgm").val();
    let parc = Number($("#nota_parc").val());
    let exer = Number($("#nota_exer").val());
    let proj = Number($("#nota_proj").val());
    let regi = Number($("#nota_regi").val());

    nomes.push(nome);
    rgms.push(rgm);
    parcial.push(parc);
    exercicios.push(exer);
    projetos.push(proj);
    regimental.push(regi);
});

$("#btn2").click(function () {
    let saida = "<table border='1'>";
    for (let i = 0; i < rgms.length; i++) {
        let nf = parcial[i] + exercicios[i] + projetos[i] + regimental[i];
        saida += `<tr>
              <td>${nomes[i]}</td>
              <td>${rgms[i]}</td>
              <td>${parcial[i]}</td>
              <td>${exercicios[i]}</td>
              <td>${projetos[i]}</td>
              <td>${regimental[i]}</td>
              <td>${nf}</td>
              <td>${cal(nf)}</td>
              </tr>`;
    }
    saida += "</table>";
    $("#resp").html(saida);
});

function cal(nf) {
    if (nf >= 6) {
        return "<span class='aprovado'>APROVADO</span>";
    }
    else if (nf < 1) {
        return "<span class='reprovado'>REPROVADO</span>";
    }
    else {
        return "<span class='exame'>EXAME</span>";
    }
}