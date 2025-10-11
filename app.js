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
}
