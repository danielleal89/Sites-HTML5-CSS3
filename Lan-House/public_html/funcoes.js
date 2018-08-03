
$(document).ready(function () {

    var nomes = new Array(7); // Vetor que contem os nomes de usuario
    var valores = new Array(7); // Vetor que contem os valores colocados pelo usuario
   

    var cont = 10; // contator para mostrar qual pc vai ter o acesso removido

    /**
     * Metodo do botao gravar
     */

    $("#gravar").click(function () {

        var pc = $("#maquina").val(); // variavel que define ID do pc

        if ($("#nome").val() != "" && $("#valor").val() != "") {
            if ($("#valor").val() > 0) {
                if (nomes[pc - 1] == null) {
                    nomes.splice(pc - 1, 0, $("#nome").val());
                    valores.splice(pc - 1, 0, $("#valor").val());
                    document.getElementById("pc" + pc).style.background = 'yellow';
                    $("#nome").val("");
                    $("#valor").val("");

                } else {
                    alert("Esse PC já está com um Cliente !!!");
                }
            } else {
                alert("O campo valor esta incorreto !!!");
            }
        } else {
            alert("Faltou nome ou valor !!!");
        }


    });

    // ---------------LimpaCampo

    $("#limpar").click(function () {
        $("#nome").val("");
        $("#valor").val("");
    });

    // -----------------LimparAcesso;
    $("#limparAcesso").click(function () {
        var pc = cont + 1;
        document.getElementById("pc" + pc).style.background = '#32CD32';
        document.getElementById("lateral2").style.display = "none";
        nomes.splice(pc - 1, 1);
        valores.splice(pc - 1, 1);
        $("#infnome").text("");
        $("#inftempo").text("");
        $("#infmaquina").text("");
        $("#infvalor").text("");
    });
// ---------------------PC's;

    $("#pc1").click(function () {
        if (nomes[0] != null) {
            document.getElementById("lateral2").style.display = "block";
            $("#infnome").text("");
            $("#infnome").append(nomes[0]);
            $("#infmaquina").text("");
            $("#infmaquina").append(1);
            $("#inftempo").text("");
            $("#inftempo").append(valores[0] / 2 + " hora(s)");
            $("#infvalor").text("");
            $("#infvalor").append(valores[0]);
            cont = 0;


        }


    });


    $("#pc2").click(function () {
        if (nomes[1] != null) {
            document.getElementById("lateral2").style.display = "block";
            $("#infnome").text("");
            $("#infnome").append(nomes[1]);
            $("#infmaquina").text("");
            $("#infmaquina").append(2);
            $("#inftempo").text("");
            $("#inftempo").append(valores[1] / 2 + " hora(s)");
            $("#infvalor").text("");
            $("#infvalor").append(valores[1]);
            cont = 1;
        }
    });
    $("#pc3").click(function () {
        if (nomes[2] != null) {
            document.getElementById("lateral2").style.display = "block";
            $("#infnome").text("");
            $("#infnome").append(nomes[2]);
            $("#infmaquina").text("");
            $("#infmaquina").append(3);
            $("#inftempo").text("");
            $("#inftempo").append(valores[2] / 2 + " hora(s)");
            $("#infvalor").text("");
            $("#infvalor").append(valores[2]);
            cont = 2;
        }

    });

    $("#pc4").click(function () {
        if (nomes[3] != null) {
            document.getElementById("lateral2").style.display = "block";
            $("#infnome").text("");
            $("#infnome").append(nomes[3]);
            $("#infmaquina").text("");
            $("#infmaquina").append(4);
            $("#inftempo").text("");
            $("#inftempo").append(valores[3] / 2 + " hora(s)");
            $("#infvalor").text("");
            $("#infvalor").append(valores[3]);
            cont = 3;
        }

    });

    $("#pc5").click(function () {
        if (nomes[4] != null) {
            document.getElementById("lateral2").style.display = "block";
            $("#infnome").text("");
            $("#infnome").append(nomes[4]);
            $("#infmaquina").text("");
            $("#infmaquina").append(5);
            $("#inftempo").text("");
            $("#inftempo").append(valores[4] / 2 + " hora(s)");
            $("#infvalor").text("");
            $("#infvalor").append(valores[4]);
            cont = 4;
        }

    });
    $("#pc6").click(function () {
        if (nomes[5] != null) {
            document.getElementById("lateral2").style.display = "block";
            $("#infnome").text("");
            $("#infnome").append(nomes[5]);
            $("#infmaquina").text("");
            $("#infmaquina").append(6);
            $("#inftempo").text("");
            $("#inftempo").append(valores[5] / 2 + " hora(s)");
            $("#infvalor").text("");
            $("#infvalor").append(valores[5]);
            cont = 5;
        }

    });
    $("#pc7").click(function () {
        if (nomes[6] != null) {
            document.getElementById("lateral2").style.display = "block";
            $("#infnome").text("");
            $("#infnome").append(nomes[6]);
            $("#infmaquina").text("");
            $("#infmaquina").append(7);
            $("#inftempo").text("");
            $("#inftempo").append(valores[6] / 2 + " hora(s)");
            $("#infvalor").text("");
            $("#infvalor").append(valores[6]);
            cont = 6;
        }

    });
    $("#pc8").click(function () {
        if (nomes[7] != null) {
            document.getElementById("lateral2").style.display = "block";
            $("#infnome").text("");
            $("#infnome").append(nomes[7]);
            $("#infmaquina").text("");
            $("#infmaquina").append(8);
            $("#inftempo").text("");
            $("#inftempo").append(valores[7] / 2 + " hora(s)");
            $("#infvalor").text("");
            $("#infvalor").append(valores[7]);
            cont = 7;
        }
    });

});