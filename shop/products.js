/* ============================================================================
   THE CURLING STRATEGY — CATALOGO PUZZLE E MERCHANDISING
   ----------------------------------------------------------------------------
   Questo è l'UNICO file da modificare per gestire la sezione Merchandising.
   Non serve toccare index.html.

   COME AGGIUNGERE UN PRODOTTO
     1. carica l'immagine in  assets/shop/
     2. copia un blocco dentro "products" e cambia id, cat, nome, testo, img
     3. salva e ripubblica

   COME AGGIUNGERE UNA CATEGORIA (es. magliette, cappellini, pietre da collezione)
     1. aggiungi un blocco dentro "categories"
     2. usa il suo id nel campo "cat" dei prodotti
     Il filtro in alto alla sezione si aggiorna da solo.

   PREZZI
     price: null  ->  sul sito compare il segnaposto "Prezzo da confermare"
     price: 39.9  ->  compare "39,90 €"
     Il prezzo scritto nella categoria vale per tutti i suoi prodotti;
     quello scritto nel singolo prodotto ha la precedenza.

   PAGAMENTO (Stripe)
     stripe: "https://buy.stripe.com/XXXX"  ->  il pulsante ACQUISTA apre
     il checkout Stripe. Finché il campo resta vuoto, il pulsante apre
     un'e-mail d'ordine già compilata verso orderEmail.
     Vale la stessa regola dei prezzi: prima il prodotto, poi la categoria.

   IMMAGINI
     I dodici soggetti sono illustrazioni vettoriali (SVG) disegnate per il
     sito: scalano a qualunque dimensione, quindi anche al formato di stampa
     50x70 / 70x50. Se arrivano le opere definitive (dipinti, foto) basta
     metterle in assets/shop/ e cambiare il campo "img" (meglio con un nome
     nuovo, per via della cache). Le stesse immagini alimentano anche il
     puzzle online della sezione "Gioca online": non c'e' altro da toccare.
   ========================================================================== */

window.SHOP = {

  /* E-mail usata per gli ordini finché manca il link Stripe del prodotto. */
  orderEmail: "info@newdesignsrl.com",

  /* ---------------------------------------------------------------------- */
  categories: [
    {
      id: "puzzle-1000",
      it: { name: "Puzzle 1000 pezzi", tag: "Collezione" },
      en: { name: "1000-piece puzzles", tag: "Collection" },
      specs: {
        it: ["Puzzle collezionistico da 1000 pezzi", "Formato 50 × 70 cm", "Collezione The Curling Strategy", "Distribuito da New Design Srl"],
        en: ["1000-piece collector's puzzle", "Size 50 × 70 cm", "The Curling Strategy collection", "Distributed by New Design Srl"]
      },
      badge: { it: "1000 pezzi", en: "1000 pieces" },
      shape: "portrait",
      price: null,
      stripe: ""
    },
    {
      id: "puzzle-500",
      it: { name: "Puzzle 500 pezzi", tag: "Collezione" },
      en: { name: "500-piece puzzles", tag: "Collection" },
      specs: {
        it: ["Puzzle collezionistico da 500 pezzi", "Formato 70 × 50 cm", "Collezione The Curling Strategy", "Distribuito da New Design Srl"],
        en: ["500-piece collector's puzzle", "Size 70 × 50 cm", "The Curling Strategy collection", "Distributed by New Design Srl"]
      },
      badge: { it: "500 pezzi", en: "500 pieces" },
      shape: "landscape",
      price: null,
      stripe: ""
    }
  ],

  /* ---------------------------------------------------------------------- */
  products: [

    /* ── PUZZLE 1000 PEZZI ── */
    { id:"puzzle-1000-01", cat:"puzzle-1000", img:"assets/shop/puzzle-1000-01.svg",
      it:{ name:"La scivolata", desc:"Il giocatore in scivolata sotto i riflettori, la pietra rossa appena lasciata e la casa laggiù, in fondo al ghiaccio." },
      en:{ name:"The delivery", desc:"The player sliding out under the floodlights, the red stone just released and the house far away at the end of the ice." } },

    { id:"puzzle-1000-02", cat:"puzzle-1000", img:"assets/shop/puzzle-1000-02.svg",
      it:{ name:"Le scope", desc:"Due spazzatori chini sulla pietra, le scope che corrono sul ghiaccio per allungarle la strada." },
      en:{ name:"The brooms", desc:"Two sweepers bent over the stone, brooms racing across the ice to carry it further." } },

    { id:"puzzle-1000-03", cat:"puzzle-1000", img:"assets/shop/puzzle-1000-03.svg",
      it:{ name:"La casa dall'alto", desc:"La casa vista dall'alto con le pietre rosse e gialle sparse intorno al bottone: a chi va il punto?" },
      en:{ name:"The house from above", desc:"The house seen from above with red and yellow stones scattered around the button: whose point is it?" } },

    { id:"puzzle-1000-04", cat:"puzzle-1000", img:"assets/shop/puzzle-1000-04.svg",
      it:{ name:"Lo skip", desc:"Lo skip in piedi sulla casa, la scopa piantata come bersaglio, sotto un cielo di stelle." },
      en:{ name:"The skip", desc:"The skip standing in the house, broom planted as the target, under a sky full of stars." } },

    { id:"puzzle-1000-05", cat:"puzzle-1000", img:"assets/shop/puzzle-1000-05.svg",
      it:{ name:"Il lago ghiacciato", desc:"Una partita all'aperto su un lago di montagna, fra i pini, con il sole che scende dietro le vette." },
      en:{ name:"The frozen lake", desc:"An outdoor game on a mountain lake, among the pines, with the sun going down behind the peaks." } },

    { id:"puzzle-1000-06", cat:"puzzle-1000", img:"assets/shop/puzzle-1000-06.svg",
      it:{ name:"La pietra", desc:"Una pietra di granito dal manico rosso, sola sotto il faro, specchiata nel ghiaccio." },
      en:{ name:"The stone", desc:"A granite stone with a red handle, alone under the spotlight, mirrored in the ice." } },

    /* ── PUZZLE 500 PEZZI ── */
    { id:"puzzle-500-01", cat:"puzzle-500", img:"assets/shop/puzzle-500-01.svg",
      it:{ name:"Notte nell'arena", desc:"Quattro piste sotto le luci del palazzetto, il pubblico sugli spalti e tre partite in corso." },
      en:{ name:"Arena at night", desc:"Four sheets under the arena lights, the crowd in the stands and three games under way." } },

    { id:"puzzle-500-02", cat:"puzzle-500", img:"assets/shop/puzzle-500-02.svg",
      it:{ name:"Il doppio", desc:"La pietra rossa entra in casa e ne manda via due gialle in un colpo solo." },
      en:{ name:"The double", desc:"The red stone comes into the house and sends two yellow ones flying in a single shot." } },

    { id:"puzzle-500-03", cat:"puzzle-500", img:"assets/shop/puzzle-500-03.svg",
      it:{ name:"L'isola del granito", desc:"L'isola scozzese da cui arriva il granito delle pietre, all'alba, con il mare che la circonda." },
      en:{ name:"The granite island", desc:"The Scottish island the granite for the stones comes from, at dawn, with the sea all around it." } },

    { id:"puzzle-500-04", cat:"puzzle-500", img:"assets/shop/puzzle-500-04.svg",
      it:{ name:"Il martello", desc:"Ultima mano, la pietra rossa sul bottone e il tabellone dei punti ancora da chiudere." },
      en:{ name:"The hammer", desc:"Last end, the red stone on the button and the scoreboard still waiting to be closed." } },

    { id:"puzzle-500-05", cat:"puzzle-500", img:"assets/shop/puzzle-500-05.svg",
      it:{ name:"Bonspiel sul lago", desc:"Il grande torneo all'aperto: decine di giocatori sul lago ghiacciato mentre cade la neve." },
      en:{ name:"Bonspiel on the loch", desc:"The great outdoor tournament: dozens of players on the frozen loch as the snow falls." } },

    { id:"puzzle-500-06", cat:"puzzle-500", img:"assets/shop/puzzle-500-06.svg",
      it:{ name:"Il bottone", desc:"Gli anelli della casa trasformati in un manifesto: cinque pietre intorno al centro." },
      en:{ name:"The button", desc:"The rings of the house turned into a poster: five stones around the centre." } }

  ]
};
