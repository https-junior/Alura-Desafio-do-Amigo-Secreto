let listaNomes = [];
let tamanhoLista = listaNomes.length;

function adicionarAmigo() {
    let nomes = document.querySelector('input').value;

    if (nomes == "") {
        alert('Por favor, insira um nome');
    } else {
        listaNomes.push(nomes);
        tamanhoLista = listaNomes.length;
        limparCampo('input');
        listarAmigos();
    }
}

function listarAmigos() {
    let lista = document.querySelector('ul');
    lista.innerHTML = "";

    for (let i = 0; i < listaNomes.length; i++) {
        let li = document.createElement("li");
        li.textContent = listaNomes[i];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    if (listaNomes.length === 0) {
        alert("A lista está vazia. Adicione amigos antes de sortear!");
        return;
    }
    
    let sortearAmigoSecreto = Math.floor(Math.random() * listaNomes.length);
    let sorteio = document.getElementById('resultado');
    sorteio.innerHTML = (`Seu amigo secreto é: ${listaNomes[sortearAmigoSecreto]}`);
}

function limparCampo(tag) {
    document.querySelector(tag).value = '';
}

function reiniciarJogo() {
    listaNomes = [];
    listarAmigos();
    let id = document.getElementById('resultado');
    id.innerHTML = '';
}
