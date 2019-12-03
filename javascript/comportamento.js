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

    if (senha != confirma) alert("As senhas não correspondem");
}