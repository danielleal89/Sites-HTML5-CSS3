$(document).ready(function() {


    // função a ser executada ao clicar no botão incluir
    $("#btIncluir").click(function() {

        // teste para verificar se os campos foram preenchidos  
        if ($("#nome").val() == "" || $("#endereco").val() == "" || $("#telefone").val() == "" || $("#sabor").val() == "SELECIONAR") {
            // muda a cor de fundo da caixa de aviso
            $("#aviso").addClass("alert alert-danger");
            $("#aviso").text("Por Favor Preencha os Campos");
            $("#aviso").slideDown("slow");
            $("#nome").focus();
            exit;
        }
        // acrescenta uma linha (2 colunas) na tabela, inserindo os valores dos campos de formulário
        $("table").append("<tr><td>" + $("#nome").val() + "</td><td>" + $("#sabor").val() + "</td></tr>");


        // exibe a mensagem de ok
        $("#aviso").addClass("alert alert-success");

        $("#aviso").text("Ok! Pedido Cadastrado ");
        $("#aviso").slideDown("slow");

        // Limpa os campos de formulário
        $("#nome").val("");
        $("#telefone").val("");
        $("#endereco").val("");
        $("#sabor").val("SELECIONAR");
        $("#nome").focus();
    });

    $("#aviso").click(function() {
        $("#aviso").slideUp("slow");
        $("#nome").focus();
    });




    $("#btLimpar").click(function() {

        $("#nome").val("");
        $("#telefone").val("");
        $("#endereco").val("");
        $("#sabor").val("");
        $("#nome").focus();

    });
     $("#btLimparPedidos").click(function() {

        $("table").empty();
        $("table").append("<tr><td>" +"NOME:" + "</td><td>" +"SABOR DA PIZZA:" + "</td></tr>");
    });

});