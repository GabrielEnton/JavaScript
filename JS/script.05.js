/*Caixa do cronometro*/
$("#btn1").click(function () {
    $("#box1").show();
    $("#box2").hide();
    $("#box3").hide();
});

let num = 0;
function segundo(){
    if(num == num){
        num = num + 1;
        $("#box1").html(num);
    }
}
setInterval(segundo , 50);

/*Caixa do slide*/
$("#btn2").click(function () {
    $("#box1").hide();
    $("#box2").show();
    $("#box3").hide();
});

let max = 3;
let cont = 1;

$("#ant").click(function () {
    if (cont == 1) {
        cont = max;
    } else {
        cont--;
    }
    $("#imagem").attr("src", "imagem" + cont + ".jpg");
})

$("#pro").click(function () {
    if (cont == max) {
        cont = 1;
    } else {
        cont++;
    }
    $("#imagem").attr("src", "imagem" + cont + ".jpg");
})

/*Caixa do tabuada*/
$("#btn3").click(function () {
    $("#box1").hide();
    $("#box2").hide();
    $("#box3").show();
});

$("#btnTab").click(function () {
    let valor = Number($("#num").val());
    $("#tabuada").html("");
    for (let i = 0; i <= 10; i++) {
        $("#tabuada").append(`${valor} X ${i} = ${valor * i}<br>`);
    }
});







