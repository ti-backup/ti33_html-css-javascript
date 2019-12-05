function validacao(){
    var autorizacao = false;
    var msg = "";

    // VALIDACAO DO CAMPO NOME
    var nome = document.getElementById("nome");
    if (nome.length < 1){
        msg += "\r\n- O campo nome é de preenchimento obrigatório.";
    }

    // VALIDACAO DO CAMPO IDADE
    var idade = document.getElementById("idade").value;
    if (idade < 18 || idade > 120){
        msg += "\r\n- O campo idade deve ser preenchido com um valor entre 18 e 120";
    }

    // VALIDACAO DAS AREAS DE INTERESSE
    var areas = document.getElementsByName("areas[]");
    var contador = 0;
    var i;
    for(i = 0; i < areas.length; i++){
        if (areas[i].checked) contador++;
    }
    if (contador < 1){
        msg += "\r\n- Selecione pelo menos uma área de interesse."
    }

    if (msg == "") autorizacao = true;
    else alert("Verifique os seguintes campos:" + msg);
    return autorizacao;
}

function VisualizaAreas(){
    var areas = document.getElementsByName("areas[]");
    var msg = "";
    var i;
    for(i = 0; i < areas.length; i++){
        if (areas[i].checked) msg += "\r\n- " + areas[i].value;
    }

    if (msg == "") msg = "Nenhuma área de interesse foi selecionada.";
    else msg = "Áreas selecionadas: " + msg;
    
    alert(msg);
}

function visualizaSenha(id, idBtn){
    var elemento = document.getElementById(id);
    var botao = document.getElementById(idBtn);
    
    if (elemento.type == "text"){
        elemento.type = "password";
        botao.innerHTML = "@";
    } else {
        elemento.type = "text";
        botao.innerHTML = "#";
    }
}

function comparaSenhas(){
    var senha = document.getElementById("senha").value;
    var confirma = document.getElementById("confirma").value;
    var erro = document.getElementById("erroSenha");

    var msgErro = "As senhas não correspondem";
    if (senha != confirma){
        alert(msgErro);
        erro.innerHTML = msgErro;
    } else {
        erro.innerHTML = "";
    }
}