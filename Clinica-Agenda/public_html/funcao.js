window.onload = function() {
    data();
};

function data() {
    var mydate = new Date();
    var year = mydate.getYear();
    if (year < 2000)
        year += (year < 1900) ? 1900 : 0;
    var day = mydate.getDay();
    var month = mydate.getMonth();
    var daym = mydate.getDate();
    if (daym < 10)
        ;
    daym = "" + daym;
    var dayarray = new Array("Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado");
    var montharray = new Array(" de Janeiro de ", " de Fevereiro de ", " de Março de ", "de Abril de ", "de Maio de ", "de Junho de", "de Julho de ", "de Agosto de ", "de Setembro de ", " de Outubro de ", " de Novembro de ", " de Dezembro de ");
    var ex = document.getElementById("data");
    ex.innerHTML = "Hoje é " + dayarray[day] + ", " + daym + " " + montharray[month] + year + " ";
    //document.write("</b></i></font>");
}


$(document).ready(function() {

    // vetores para salvar os nomes e cpfs.
    var nomes = new Array();
    var cpfs = new Array();

    // função a ser executada ao clicar no botão enviar.
    $("#enviar").click(function() {

        // teste para verificar se os campos foram preenchidos
        if ($("#nome").val() == "" || $("#cpf").val() == "" || $("#dia").val() == "" || $("#mes").val() == "" ||
                $("#ano").val() == "" || $("#hora").val() == "" || $("#minuto").val() == "") {
            // muda a cor de fundo da caixa de aviso
            $("#preenche").css("background-color", "#1E90FF");
            $("#preenche").css("background-image", "");

            $("#preenche").text("Por favor, preencha todos os campos com asterisco");
            $("#preenche").slideDown("fast");
            $("#nome").focus();
            exit;
        }


        // teste para verificar se o cpf é numero.
        if (!$.isNumeric($("#cpf").val())) {
            // muda a cor de fundo da caixa de aviso
            $("#preenche").css("background-color", "#1E90FF");
            $("#preenche").css("background-image", "");

            $("#preenche").text("CPF é só numeros");
            $("#preenche").slideDown("fast");
            $("#cpf").focus();
            exit;
        }

        // teste para verificar o tamanho do cpf.
        if (parseFloat($("#cpf").val()) < 011111111111 || parseFloat($("#cpf").val()) > 99999999999) {
            $("#preenche").css("background-color", "#1E90FF");
            $("#preenche").css("background-image", "");

            $("#preenche").text("Por favor, digite o CPF com 11 números e sem traços");
            $("#preenche").slideDown("fast");
            // atribui um valor para o campo
            $("#cpf").val(000 - 000 - 000 - 00);
            $("#cpf").focus();
            exit;
        }
        
       
        if (parseFloat($("#dia").val()) < 01 || parseFloat($("#dia").val()) > 31) {
            $("#preenche").css("background-color", "#1E90FF");
            $("#preenche").css("background-image", "");
            
            $("#preenche").text("*Dia Inválido");
            $("#preenche").slideDown("fast");
            // atribui um valor para o campo
            $("#dia").val();
            $("#dia").focus();
            exit;
        }
        
        if (parseFloat($("#mes").val()) < 10 || parseFloat($("#mes").val()) > 12) {
            $("#preenche").css("background-color", "#1E90FF");
            $("#preenche").css("background-image", "");
            
            $("#preenche").text("*Mês Inválido");
            $("#preenche").slideDown("fast");
            // atribui um valor para o campo
            $("#mes").val();
            $("#mes").focus();
            exit;
        }
        
        if (parseFloat($("#ano").val()) < 2014 || parseFloat($("#ano").val()) > 2014) {
            $("#preenche").css("background-color", "#1E90FF");
            $("#preenche").css("background-image", "");
            
            $("#preenche").text("*Ano inválido");
            $("#preenche").slideDown("fast");
            // atribui um valor para o campo
            $("#ano").val();
            $("#ano").focus();
            exit;
        }
        
        if (parseFloat($("#diai").val()) < 01 || parseFloat($("#diai").val()) > 31) {
            $("#preenche").css("background-color", "#1E90FF");
            $("#preenche").css("background-image", "");
            
            $("#preenche").text("Informe o dia com 2 digitos");
            $("#preenche").slideDown("fast");
            // atribui um valor para o campo
            $("#diai").val();
            $("#diai").focus();
            exit;
        }
        
        if (parseFloat($("#mesi").val()) < 01 || parseFloat($("#mesi").val()) > 12) {
            $("#preenche").css("background-color", "#1E90FF");
            $("#preenche").css("background-image", "");
            
            $("#preenche").text("Informe o mes com 2 digitos");
            $("#preenche").slideDown("fast");
            // atribui um valor para o campo
            $("#mesi").val();
            $("#mesi").focus();
            exit;
        }
        
        if (parseFloat($("#anoi").val()) < 1900) {
            $("#preenche").css("background-color", "#1E90FF");
            $("#preenche").css("background-image", "");
            
            $("#preenche").text("*Ano de Nasc. Inválido");
            $("#preenche").slideDown("fast");
            // atribui um valor para o campo
            $("#anoi").val();
            $("#anoi").focus();
            exit;
        }
        
        if (parseFloat($("#anoi").val()) > 1996) {
            $("#preenche").css("background-color", "#1E90FF");
            $("#preenche").css("background-image", "");
            
            $("#preenche").text("Precisa ser Maior de Idade para Consultar");
            $("#preenche").slideDown("fast");
            // atribui um valor para o campo
            $("#anoi").val();
            $("#anoi").focus();
            exit;
        }
        
        if (parseFloat($("#hora").val()) < 08 || parseFloat($("#hora").val()) > 19) {
            $("#preenche").css("background-color", "#1E90FF");
            $("#preenche").css("background-image", "");
            
            $("#preenche").text("Fora do horário de atendimento");
            $("#preenche").slideDown("fast");
            // atribui um valor para o campo
            $("#hora").val();
            $("#hora").focus();
            exit;
        }
        
        if (parseFloat($("#minuto").val()) < 00 || parseFloat($("#minuto").val()) > 59) {
            $("#preenche").css("background-color", "#1E90FF");
            $("#preenche").css("background-image", "");
            
            $("#preenche").text("00 á 59");
            $("#preenche").slideDown("fast");
            // atribui um valor para o campo
            $("#minuto").val();
            $("#minuto").focus();
            exit;
        }

   $("table").append("<tr><td>"+"Nome: "+ $("#nome").val() + "</td><td>" +"<tr><td>"
           +"Consulta: "+$("#j").val() +"</td></tr>" +"<tr><td>"
           +"Data: "+$("#dia").val()+"/"+$("#mes").val()+"/"+$("#ano").val()+"</td></tr>"+"<tr><td>"
           +"Hora: "+$("#hora").val()+":"+$("#minuto").val()+"</td></tr>"+"<tr><td>"
           +"----------------------------------"+"</td></tr>");

        nomes.push($("#nome").val());
        cpfs.push($("#cpf").val());
        datas.push($("#dataConsulta").val());
        

        // exibe a mensagem de ok
        $("#preenche").css("background-color", "#1E90FF");
        $("#preenche").css("background-image", "");

        $("#preenche").text("Cadastro de consulta realizado!");
        $("#preenche").slideDown("slow");
        $("#preenche").slideUp("slow");

        // Limpa os campos de formulário
        $("#nome").val("");
        $("#cpf").val("");
        $("#nome").focus();
    });

    $("#preenche").click(function() {
        $("#preenche").slideUp("slow");
        $("#nome").focus();
    });

    //Limpa os campos.
    $("#btLimpar").click(function() {
        
        $("#vencedor").fadeOut();
        $("table").empty();
        // limpa os vetores
        nomes = [];
        lances = [];
        // joga o foco no nome
        $("#nome").focus();
    });

});
