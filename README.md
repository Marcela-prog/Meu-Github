# Buscador de Perfis do GitHub

Aplicação Front-End que consulta a API pública do GitHub e exibe informações de um perfil a partir do nome de usuário pesquisado.

Projeto desenvolvido para praticar consumo de API, requisições assíncronas e atualização dinâmica da interface com JavaScript.

## Demonstração

Acesse a versão online:

[Visualizar Buscador de Perfis do GitHub](https://meu-github-two.vercel.app/)

## Sobre o projeto

A aplicação permite pesquisar um usuário do GitHub e visualizar informações básicas do perfil encontrado. Ao abrir a página, o perfil marcela-prog é carregado automaticamente como exemplo.

Depois de informar outro nome de usuário, a aplicação faz uma requisição à API pública do GitHub e atualiza os dados exibidos na tela sem recarregar a página.

## Funcionalidades

- Busca de perfis pelo nome de usuário do GitHub;
- Carregamento automático de um perfil padrão;
- Exibição da foto de perfil;
- Exibição do nome e do nome de usuário;
- Exibição da quantidade de repositórios públicos;
- Exibição da quantidade de seguidores;
- Exibição da quantidade de pessoas seguidas;
- Link direto para o perfil encontrado no GitHub;
- Estado de carregamento durante a busca;
- Mensagem para usuário não encontrado;
- Mensagem para limite da API atingido;
- Tratamento de erro de conexão;
- Interface responsiva para diferentes tamanhos de tela.

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript
- GitHub REST API
- Vercel

## Como funciona

1. O usuário informa um nome de usuário do GitHub no campo de busca.
2. A aplicação envia uma requisição para a API pública do GitHub.
3. Os dados recebidos são processados com JavaScript.
4. A interface é atualizada com as informações do perfil.
5. Em caso de erro, uma mensagem correspondente é exibida para o usuário.

A requisição utiliza o endpoint público:

```text
https://api.github.com/users/{usuario}
```

## Estrutura do projeto

```text
Meu-Github/
├── index.html
├── main.css
├── script.js
└── README.md
```

## Como executar o projeto localmente

### Pré-requisitos

Você precisa ter um navegador moderno instalado. Não é necessário instalar dependências ou configurar um servidor para testar a versão básica do projeto.

### Instalação

Clone este repositório:

```bash
git clone https://github.com/Marcela-prog/Meu-Github.git
```

Entre na pasta do projeto:

```bash
cd Meu-Github
```

### Execução

Abra o arquivo index.html no navegador.

Também é possível abrir a pasta no VS Code e utilizar uma extensão como o Live Server para executar o projeto durante o desenvolvimento.

## Aprendizados

Este projeto contribuiu para a prática de:

- Consumo de APIs REST;
- Uso de fetch e async/await;
- Manipulação do DOM;
- Tratamento de estados de carregamento;
- Tratamento de erros HTTP e de rede;
- Uso de eventos de formulário;
- Criação de interfaces responsivas;
- Organização de um projeto Front-End sem dependências externas.

## Observações

A aplicação depende da disponibilidade da API pública do GitHub. O limite de requisições da API pode variar, e a própria interface informa quando esse limite é atingido.

## Autora

Desenvolvido por Marcela Nogueira.

- GitHub: [Marcela-prog](https://github.com/Marcela-prog)
- LinkedIn: [Marcela Nogueira](https://www.linkedin.com/in/marcela-nogueira-855272191)
