// assets/style.js

function setTargetBlank() {
  const all_links = document.querySelectorAll('a[href]');
  for (let i = 0; i < all_links.length; i++) {
    const a = all_links[i];
    const href = a.getAttribute('href');

    if (!href) continue;

    // Links externos
    // Verifica se o hostname do link é diferente do hostname atual
    // E se o link não é o botão de download (para evitar abrir o próprio site em nova aba)
    if (a.hostname !== location.hostname && a.parentElement.id !== 'download-button') {
      a.setAttribute('target', '_blank');
      a.setAttribute('rel', 'noopener noreferrer');
    }

    // Links para documentos (PDF, Word, Excel, PowerPoint)
    // Verifica se o href termina com uma das extensões de documento especificadas
    if (href.match(/\.(pdf|docx?|xlsx?|pptx?)$/i)) {
      a.setAttribute('target', '_blank');
      a.setAttribute('rel', 'noopener noreferrer');
    }
  }
}

// Executa a função quando o DOM estiver pronto e também após cada navegação instantânea
document.addEventListener('DOMContentLoaded', () => {
  setTargetBlank();
});

// O Material for MkDocs dispara um evento 'mkdocs-material:ready' após cada carregamento de página
// (incluindo navegações instantâneas) e após a inicialização inicial.
// Isso garante que o script seja executado para todo o conteúdo da página, mesmo com navegação instantânea.
document.addEventListener('mkdocs-material:ready', () => {
  setTargetBlank();
});