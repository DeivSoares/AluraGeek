const listaProdutos = () => {
    return fetch("https://64aef1c2c85640541d4df0b3.mockapi.io/produtos")
        .then(resposta => resposta.json())
        .catch(error => console.log(error));
}

const getProdutoPorId = (id) => {
    return fetch(`https://64aef1c2c85640541d4df0b3.mockapi.io/produtos/${id}`)
        .then(resposta => resposta.json())
        .catch(error => console.log(error));
}

const atualizarProduto = (id, produtoAtualizado) => {
    return fetch(`https://64aef1c2c85640541d4df0b3.mockapi.io/produtos/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(produtoAtualizado)
    })
        .then(resposta => resposta.json())
        .catch(error => console.log(error));
}

const criarProduto = (novoProduto) => {
    return fetch('https://64aef1c2c85640541d4df0b3.mockapi.io/produtos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(novoProduto)
    })
        .then(resposta => resposta.json())
        .catch(error => console.log(error));
}

const deletarProduto = (idProduto) => {
    return fetch(`https://64aef1c2c85640541d4df0b3.mockapi.io/produtos/${idProduto}`, {
        method: 'DELETE',
    })
        .then(resposta => resposta.json())
        .catch(error => console.log(error));
}

export const produtoServicos = {
    listaProdutos,
    getProdutoPorId,
    atualizarProduto,
    criarProduto,
    deletarProduto
}