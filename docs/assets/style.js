// Target external links blank
var all_links = document.querySelectorAll('a');
for (var i = 0; i < all_links.length; i++){
     var a = all_links[i];
     var href = a.getAttribute('href');

     // Links externos
     if(a.hostname != location.hostname && a.parentElement.id != 'download-button') {
            a.target = '_blank';
     }

     // Links para PDFs (internos ou externos)
     if(href && href.toLowerCase().endsWith('.pdf')) {
        a.target = '_blank';
     }
}
