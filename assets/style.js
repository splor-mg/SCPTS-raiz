// assets/style.js

function setTargetBlank() {
  const all_links = document.querySelectorAll('a[href]');
  for (let i = 0; i < all_links.length; i++) {
    const a = all_links[i];
    const href = a.getAttribute('href');

    if (!href) continue;

    // Links externos
    if (a.hostname !== location.hostname && a.parentElement.id !== 'download-button') {
      a.setAttribute('target', '_blank');
      a.setAttribute('rel', 'noopener noreferrer');
    }

    // Links para documentos (PDF, Word, Excel, PowerPoint)
    if (href.match(/\.(pdf|docx?|xlsx?|pptx?)$/i)) {
      a.setAttribute('target', '_blank');
      a.setAttribute('rel', 'noopener noreferrer');
    }
  }
}

// Executa ao carregar o site
document.addEventListener('DOMContentLoaded', setTargetBlank);

// Executa também após trocas de página via navigation.instant
document.addEventListener('DOMContentSwitch', setTargetBlank);
