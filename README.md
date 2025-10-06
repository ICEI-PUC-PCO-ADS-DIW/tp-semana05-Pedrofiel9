[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/KZhXwLZL)
[![Open in Codespaces](https://classroom.github.com/assets/launch-codespace-2972f46106e565e64193e422d61a12cf1da4916b45550586e14ef0a7c637dd04.svg)](https://classroom.github.com/open-in-codespaces?assignment_repo_id=20650000)
# Trabalho Prático 05 - Semanas 7 e 8

**Páginas de detalhes dinâmicas**

Nessa etapa, vamos evoluir o trabalho anterior, acrescentando a página de detalhes, conforme o  projeto escolhido. Imagine que a página principal (home-page) mostre um visão dos vários itens que existem no seu site. Ao clicar em um item, você é direcionado pra a página de detalhes. A página de detalhe vai mostrar todas as informações sobre o item do seu projeto. seja esse item uma notícia, filme, receita, lugar turístico ou evento.

Leia o enunciado completo no Canvas. 

**IMPORTANTE:** Assim como informado anteriormente, capriche na etapa pois você vai precisar dessa parte para as próximas semanas. 

**IMPORTANTE:** Você deve trabalhar e alterar apenas arquivos dentro da pasta **`public`,** mantendo os arquivos **`index.html`**, **`styles.css`** e **`app.js`** com estes nomes, conforme enunciado. Deixe todos os demais arquivos e pastas desse repositório inalterados. **PRESTE MUITA ATENÇÃO NISSO.**

## Informações Gerais

- Nome: Pedro Enzo Campos Fiel
- Matricula: 903847
- Proposta de projeto escolhida: Carreira do cantor veigh
- Breve descrição sobre seu projeto: Nesse projeto irei falar sobre a carrreira, músicas, albuns e projetos do presente e do futuro.

## Print da Home-Page

<img width="1419" height="738" alt="homepage05" src="https://github.com/user-attachments/assets/7da26e16-eb31-4f0b-a469-41e3174e1426" />


## Print da página de detalhes do item

![Uploading veighparatrabalho.png…]()


## Cole aqui abaixo a estrutura JSON utilizada no app.js
// Dados dos álbuns de Veigh
const albuns = [
  {
    "id": 1,
    "titulo": "Dos Prédios Deluxe",
    "ano": "2023",
    "descricao": "Versão Deluxe do sucesso 'Dos Prédios', trazendo participações inéditas e produções refinadas que marcaram o trap brasileiro.",
    "imagem": "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1770&q=80",
    "autor": "Veigh",
    "faixas": ["Nova Era", "Deus Perdoa", "Pra Sempre", "Deluxe"]
  },
  {
    "id": 2,
    "titulo": "Dos Prédios",
    "ano": "2022",
    "descricao": "Álbum de estreia que colocou Veigh no topo das paradas, unindo letras sinceras e batidas modernas.",
    "imagem": "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1770&q=80",
    "autor": "Veigh",
    "faixas": ["Tipo de Fé", "Nada Mudou", "Amor & Trap"]
  },
  {
    "id": 3,
    "titulo": "Veigh Sessions",
    "ano": "2021",
    "descricao": "Gravado ao vivo em estúdio, o projeto mostra a essência artística de Veigh com novas versões e participações especiais.",
    "imagem": "https://images.unsplash.com/photo-1507878866276-a947ef722fee?auto=format&fit=crop&w=1770&q=80",
    "autor": "Veigh",
    "faixas": ["Sessão 1", "Sessão 2", "Sessão 3"]
  }
];

// Página inicial: gerar os cards de álbuns
const containerAlbuns = document.getElementById("container-albuns");

if (containerAlbuns) {
  albuns.forEach(album => {
    const card = document.createElement("article");
    card.classList.add("cartao-album");
    card.innerHTML = `
      <img src="${album.imagem}" alt="Capa do álbum ${album.titulo}">
      <div class="info-album">
        <h3>${album.titulo}</h3>
        <p>${album.ano}</p>
        <a href="detalhes.html?id=${album.id}" class="btn">Ver detalhes</a>
      </div>
    `;
    containerAlbuns.appendChild(card);
  });
}

// Página de detalhes: exibir informações completas
const detalhesContainer = document.getElementById("detalhes-album");
if (detalhesContainer) {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"));
  const album = albuns.find(a => a.id === id);

  if (album) {
    detalhesContainer.innerHTML = `
      <img src="${album.imagem}" alt="${album.titulo}" class="img-detalhe">
      <h2>${album.titulo}</h2>
      <p><strong>Ano:</strong> ${album.ano}</p>
      <p><strong>Autor:</strong> ${album.autor}</p>
      <p>${album.descricao}</p>
      <h4>Faixas:</h4>
      <ul>${album.faixas.map(faixa => `<li>${faixa}</li>`).join('')}</ul>
      <a href="index.html" class="btn">← Voltar</a>
    `;
  } else {
    detalhesContainer.innerHTML = `<p>Álbum não encontrado.</p>`;
  }
