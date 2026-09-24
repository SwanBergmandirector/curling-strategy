# The Curling Strategy — sito vetrina

Sito statico di **The Curling Strategy**, il gioco da tavolo del curling
di New Design Srl. Nessuna build: Netlify pubblica la cartella così com'è.

    index.html                       il sito (una pagina sola, italiano e inglese)
    netlify.toml                     pubblicazione, header di sicurezza, cache, redirect
    assets/                          immagini del sito
    assets/shop/                     soggetti dei puzzle (SVG)
    shop/products.js                 catalogo merchandising
    shop/LEGGIMI-merchandising.txt   come si gestisce il catalogo
    LEGGIMI-CURLING.txt             da dove arrivano i contenuti e cosa manca

Dominio previsto: www.thecurlingstrategy.com

## Come si aggiorna

Si modifica il file, si fa commit e push su `main`: Netlify ripubblica da solo.
Per il merchandising basta `shop/products.js` — vedi `shop/LEGGIMI-merchandising.txt`.

## Attenzione

Le regole del gioco sono una proposta adattata dal curling vero: cosa arriva
dal regolamento World Curling e cosa è stato inventato per il tavolo è scritto
in `LEGGIMI-CURLING.txt`, insieme ai punti da sistemare prima di pubblicare.
Le immagini sono illustrazioni SVG disegnate per il sito; i soggetti dei puzzle
sono descritti in `PUZZLE-SOGGETTI.md`.
