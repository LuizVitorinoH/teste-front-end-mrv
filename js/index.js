document.addEventListener("DOMContentLoaded", function (event) {

    const http = new XMLHttpRequest();
    const url = 'https://servicodados.ibge.gov.br/api/v1/localidades/distritos?orderBy=nome';
    http.open("GET", url);
    http.send();
    var select = document.getElementById("cidades");
    http.onreadystatechange = (e) => {
        var response = JSON.parse(http.responseText);
        response.forEach(function (valor, indice) {
            var opt = document.createElement("option");
            opt.value = indice;
            opt.innerHTML = valor.nome; // whatever property it has

            // then append it to the select element
            select.append(opt);
        });
    };
});


function conferir() {
    window.location = "./"
};

function validation() {
    var selectCidades = document.getElementById("cidades");
    var selectAtuacao = document.getElementById("atuacao");
    var selectVagas = document.getElementById("vagas");

    if (selectCidades.value == "default" || selectAtuacao.value == "default" || selectVagas.value == "default") {
        alert("Selecione todas a opções antes de buscar sua vaga");
    }
    else {
        alert("Busca Realizada");
    }   
}