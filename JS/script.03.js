$("#btn1").click(function(){
    let maiuscula = $("#txttexto").val().toUpperCase();
    $("#resp").html(maiuscula);
});

$("#btn2").click(function(){
    let quebra = $("#txttexto").val().split(" ");
    for (let i = 0; i < quebra.length; i++){
        $("#resp").append(quebra[i] + "<br>");
    }
});


