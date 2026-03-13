const endpoint = 'https://api.github.com/users/marcela-prog';

async function buscarDados() {

    try {

        const resposta = await fetch(endpoint);
        const dados = await resposta.json();

        document.getElementById('avatar').src = dados.avatar_url;

        document.getElementById('nome').innerText = dados.name;

        document.getElementById('username').innerText = '@' + dados.login;

        document.getElementById('repositorios').innerText = dados.public_repos;

        document.getElementById('seguidores').innerText = dados.followers;

        document.getElementById('seguindo').innerText = dados.following;

        document.getElementById('linkGithub').href = dados.html_url;

    } catch (erro) {

        console.log('Erro ao buscar dados do Github', erro);

    }

}

buscarDados();