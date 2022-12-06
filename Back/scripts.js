//Furmalário Orçamento
function dadosOrcamento() {
    var nome = document.getElementById("name").value;
    var contato = document.getElementById("contato").value;
    var email = document.getElementById("email").value;
    var destino = document.getElementById("destino").value;
    var periodoi = document.getElementById("periodoi").value;
    var periodof = document.getElementById("periodof").value;
    var acompanhantes = document.getElementById("acompanhantes").value;
    console.log("name:" + nome + "contato:" + contato + "email:" + email + "destino:" + destino + "periodoi:" + periodoi + "periodof:" + periodof + "acompanhantes:" + acompanhantes);
     alert("Enviado Com Sucesso, aguarde!");
}


//Formulário Rodapé

function mostrarDados() {
    var nome = document.getElementById("fname").value;
    var telefone = document.getElementById("tFone").value;
    var email = document.getElementById("eMail").value;
    console.log("nome:" + nome + "telefone:" + telefone + "email:" + email);
    alert("Dados Enviados com Sucesso!");
}
