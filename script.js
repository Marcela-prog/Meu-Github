const USUARIO_PADRAO = "marcela-prog";
const API_URL = "https://api.github.com/users/";

const elementos = {
  form: document.getElementById("formBusca"),
  campo: document.getElementById("campoUsuario"),
  botao: document.querySelector("#formBusca button"),
  avatar: document.getElementById("avatar"),
  nome: document.getElementById("nome"),
  username: document.getElementById("username"),
  repositorios: document.getElementById("repositorios"),
  seguidores: document.getElementById("seguidores"),
  seguindo: document.getElementById("seguindo"),
  link: document.getElementById("linkGithub"),
};

function preencherPerfil(dados) {
  elementos.avatar.src = dados.avatar_url;
  elementos.avatar.alt = `Foto de perfil de ${dados.name ?? dados.login}`;
  elementos.nome.textContent = dados.name ?? dados.login;
  elementos.username.textContent = `@${dados.login}`;
  elementos.repositorios.textContent = dados.public_repos;
  elementos.seguidores.textContent = dados.followers;
  elementos.seguindo.textContent = dados.following;
  elementos.link.href = dados.html_url;
  elementos.link.hidden = false;
}

function limparPerfil() {
  elementos.avatar.removeAttribute("src");
  elementos.avatar.alt = "";
  elementos.username.textContent = "";
  elementos.repositorios.textContent = "-";
  elementos.seguidores.textContent = "-";
  elementos.seguindo.textContent = "-";
  elementos.link.hidden = true;
}

function mostrarErro(mensagem) {
  limparPerfil();
  elementos.nome.textContent = mensagem;
}

function mensagemDeErro(status) {
  if (status === 404) return "Usuário não encontrado 😕";
  if (status === 403) return "Limite da API atingido. Tente mais tarde ⏳";
  return "Não foi possível carregar o perfil";
}

function setCarregando(carregando) {
  elementos.botao.disabled = carregando;
  elementos.botao.textContent = carregando ? "Buscando..." : "Buscar";
  if (carregando) elementos.nome.textContent = "Carregando...";
}

async function buscarPerfil(usuario) {
  setCarregando(true);

  try {
    const resposta = await fetch(API_URL + encodeURIComponent(usuario));

    if (!resposta.ok) {
      mostrarErro(mensagemDeErro(resposta.status));
      return;
    }

    const dados = await resposta.json();
    preencherPerfil(dados);
  } catch (erro) {
    console.error("Erro de rede:", erro);
    mostrarErro("Sem conexão. Verifique sua internet 📡");
  } finally {
    setCarregando(false);
  }
}

// Quando o usuário envia o formulário (clique ou Enter)
elementos.form.addEventListener("submit", (evento) => {
  evento.preventDefault(); // impede a página de recarregar
  const usuario = elementos.campo.value.trim();
  if (usuario) buscarPerfil(usuario);
});

// Carrega o perfil padrão ao abrir a página
buscarPerfil(USUARIO_PADRAO);
