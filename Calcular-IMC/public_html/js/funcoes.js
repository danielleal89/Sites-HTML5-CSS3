$(document).ready(function() {

    var nomes = new Array();
    var pesoImc = new Array();

    $('#altura').mask('0.00', {reverse: true, placeholder: "0.00"});
    $('#peso').mask('000.00', {reverse: true, placeholder: "0.00"});

    $("#calcular").click(function() {
        var valueSexo = $("form input[type='radio']:checked").val();
        // teste para validar        

        if ($("#nome").val() != "" && $("#altura").val() != "" && $("#peso").val() != "" && valueSexo == "m" || valueSexo == "f") {
            var h = parseFloat($("#altura").val());
            var p = parseFloat($("#peso").val());
            var imc = p / (Math.pow(h, 2));

            $("#result-imc").text("IMC = " + imc.toFixed(2));

            if (valueSexo == "m") {
                if (imc < 20.7) {
                    $("#lista-abaixo").append("<tr><td>" + $("#nome").val() + "</td><td>" + imc.toFixed(2) + "</td></tr>");
                } else if (imc >= 20.7 && imc < 26.4) {
                    $("#lista-normal").append("<tr><td>" + $("#nome").val() + "</td><td>" + imc.toFixed(2) + "</td></tr>");
                } else if (imc >= 26.4 && imc < 27.8) {
                    $("#lista-margAcima").append("<tr><td>" + $("#nome").val() + "</td><td>" + imc.toFixed(2) + "</td></tr>");
                } else if (imc >= 27.8 && imc < 31.1) {
                    $("#lista-acima").append("<tr><td>" + $("#nome").val() + "</td><td>" + imc.toFixed(2) + "</td></tr>");
                } else if (imc > 31.1) {
                    $("#lista-obeso").append("<tr><td>" + $("#nome").val() + "</td><td>" + imc.toFixed(2) + "</td></tr>");
                }

                $("#result-imc").css("background-color", "#428bca");
                $("#result-imc").css("border", "1px solid #357ebd");
                $("#result-imc").slideDown("slow");

                // ---- acrescenta um elemento aos vetores nomes e pesoImc
                nomes.push($("#nome").val());
                pesoImc.push((imc));

            } else if (valueSexo == "f") {
                if (imc < 19.1) {
                    $("#lista-abaixo").append("<tr><td>" + $("#nome").val() + "</td><td>" + imc.toFixed(2) + "</td></tr>");
                } else if (imc >= 19.1 && imc < 25.8) {
                    $("#lista-normal").append("<tr><td>" + $("#nome").val() + "</td><td>" + imc.toFixed(2) + "</td></tr>");
                } else if (imc >= 25.8 && imc < 27.3) {
                    $("#lista-margAcima").append("<tr><td>" + $("#nome").val() + "</td><td>" + imc.toFixed(2) + "</td></tr>");
                } else if (imc >= 27.3 && imc < 32.3) {
                    $("#lista-acima").append("<tr><td>" + $("#nome").val() + "</td><td>" + imc.toFixed(2) + "</td></tr>");
                } else if (imc > 32.3) {
                    $("#lista-obeso").append("<tr><td>" + $("#nome").val() + "</td><td>" + imc.toFixed(2) + "</td></tr>");
                }
                $("#result-imc").css("background-color", "#CA42AF");
                $("#result-imc").css("border", "1px solid #B235BD");
                $("#result-imc").slideDown("slow");
                // ---- acrescenta um elemento aos vetores nomes e pesoImc
                nomes.push($("#nome").val());
                pesoImc.push((imc));

            }

        } else if ($("#nome").val() == "") {
            $("#avisoOk-nome").css("display", "none");
            $("#aviso-nome").text("Preencha o campo nome");
            $("#aviso-nome").fadeIn("slow");
            $("#nome").focus();
        } else if ($("#altura").val() == "" || !$.isNumeric($("#altura").val())) {
            $("#avisoOk-altura").css("display", "none");
            $("#aviso-altura").text("Preencha o campo altura");
            $("#aviso-altura").fadeIn("slow");
            $("#altura").focus();
        } else if ($("#peso").val() == "" || !$.isNumeric($("#peso").val())) {
            $("#avisoOk-peso").css("display", "none");
            $("#aviso-peso").text("Preencha o campo peso");
            $("#aviso-peso").fadeIn("slow");
            $("#peso").focus();
        } else if (valueSexo != "m" && valueSexo != "f") {
            $("#img-sexoF").css("display", "none");
            $("#aviso-sexoM").text("Preencha o campo sexo");
            $("#aviso-sexoM").fadeIn("slow");
        }
    });

    // ---- exibe o icone check quando o campo nome é preenchido corretamente
    $("#nome").blur(function() {
        if ($("#nome").val() != "") {
            $("#nome").css("border", "1px solid #5cb85c");
            $("#avisoOk-nome").css("background-image", "url('img/check.png')");
            $("#aviso-nome").css("display", "none");
            $("#avisoOk-nome").fadeIn("slow");
        }
    });

    // ---- exibe o icone check quando o campo altura é preenchido corretamente
    $("#altura").blur(function() {
        if ($("#altura").val() != "") {
            $("#altura").css("border", "1px solid #5cb85c");
            $("#avisoOk-altura").css("background-image", "url('img/check.png')");
            $("#aviso-altura").css("display", "none");
            $("#avisoOk-altura").fadeIn("slow");
        }
    });

    // ---- exibe o icone check quando o campo peso é preenchido corretamente
    $("#peso").blur(function() {
        if ($("#peso").val() != "") {
            $("#peso").css("border", "1px solid #5cb85c");
            $("#avisoOk-peso").css("background-image", "url('img/check.png')");
            $("#aviso-peso").css("display", "none");
            $("#avisoOk-peso").fadeIn("slow");
        }
    });

    // ---- exibe o icone check quando o campo sexo é preenchido corretamente
    $("input:radio").change(function() {
        var valueSexo = $("form input[type='radio']:checked").val();
        if (valueSexo == "m") {
            $("#img-sexoF").css("display", "none");
            $("#img-sexoM").css("background-image", "url('img/simbMasc.png')");
            $("#aviso-sexoM").css("display", "none");
            $("#img-sexoM").fadeIn("slow");
        } else if (valueSexo == "f") {
            $("#img-sexoM").css("display", "none");
            $("#img-sexoF").css("background-image", "url('img/simbFem.png')");
            $("#aviso-sexoM").css("display", "none");
            $("#img-sexoF").fadeIn("slow");
        }
    });

    // limpa os campos de formulário
    $("#limpar").click(function() {
        $("#nome,#altura,#peso").css("border", "1px solid #ccc");
        $("#nome").val("");
        $("#altura").val("");
        $("#peso").val("");
        $("#aviso-nome").css("display", "none");
        $("#aviso-altura").css("display", "none");
        $("#aviso-peso").css("display", "none");
        $("#aviso-sexoM").css("display", "none");
        $("#aviso-sexoF").css("display", "none");
        $("#avisoOk-nome").css("display", "none");
        $("#avisoOk-altura").css("display", "none");
        $("#avisoOk-peso").css("display", "none");
        $("#img-sexoM").css("display", "none");
        $("#img-sexoF").css("display", "none");
        $("#sexom").prop("checked", false);
        $("#sexof").prop("checked", false);
        $("#result-imc").css("display", "none");
    });

    // ---- faz o tbody de todas as tabelas desaparecerem
    $("#limparTudo").click(function() {
        $("tbody").empty();
        nomes = [];
        pesoImc = [];
    });

    // ---- faz o tbody da tabela Abaixo do Peso desaparecer
    $("#limparListaAbaixo").click(function() {
        $("#lista-abaixo > tbody").empty();
        nomes = [];
        pesoImc = [];
    });

    // ---- faz o tbody da tabela Peso Normal desaparecer
    $("#limparListaNormal").click(function() {
        $("#lista-normal > tbody").empty();
        nomes = [];
        pesoImc = [];
    });

    // ---- faz o tbody da tabela Pouco acima do Peso desaparecer
    $("#limparListaMargAbaixo").click(function() {
        $("#lista-margAcima > tbody").empty();
        nomes = [];
        pesoImc = [];
    });

    // ---- faz o tbody da tabela Acima do Peso desaparecer
    $("#limparListaAcima").click(function() {
        $("#lista-acima > tbody").empty();
        nomes = [];
        pesoImc = [];
    });

    // ---- faz o tbody da tabela Obesidade desaparecer
    $("#limparListaObeso").click(function() {
        $("#lista-obeso > tbody").empty();
        nomes = [];
        pesoImc = [];
    });
});
