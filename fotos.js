/* =====================================================================
   FOTOS REAIS — banco de imagens provisório
   Fotos do Pexels (licença livre, uso comercial liberado, sem exigência
   de crédito). Servem enquanto o corretor não sobe as fotos dos imóveis
   dele pelo painel.
   ---------------------------------------------------------------------
   REGRA DO SITE:
   1. Imóvel com foto cadastrada no painel  -> mostra a foto real
   2. Imóvel sem foto                       -> mostra uma destas, com o
                                               selo "Foto ilustrativa"
   3. Se a imagem não carregar              -> cai na ilustração em SVG
   ---------------------------------------------------------------------
   Para trocar qualquer foto: pegue o número do link em pexels.com
   (ex.: .../photo/nome-da-foto-1974596/ -> 1974596) e coloque na lista.
   ===================================================================== */

const FOTOS = (function(){
  const url = (id, w) =>
    `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w || 1200}`;

  const bancos = {
    casa:        [1974596, 7031604, 7031581, 323781, 19344325, 20296321, 15422346, 11018246, 8482510],
    apartamento: [18214902, 323780, 18774970, 20858565, 32115995, 18078684, 27953061],
    comercial:   [36006588, 32390903, 31904842, 20170984, 10501161, 19782763, 11666903]
  };

  /* imagem grande da abertura */
  const abertura = url(7031604, 1920);

  function porTipo(tipo, seed){
    const t = (tipo || "").toLowerCase();
    let lista = null;
    if(t.indexOf("apart") === 0) lista = bancos.apartamento;
    else if(t.indexOf("sala") === 0 || t.indexOf("barr") === 0 ||
            t.indexOf("galp") === 0 || t.indexOf("comerc") === 0) lista = bancos.comercial;
    else if(t.indexOf("casa") === 0) lista = bancos.casa;
    /* terreno, chácara e área rural continuam na ilustração:
       foto de terreno alheio confunde mais do que ajuda */
    if(!lista) return null;
    return url(lista[Math.abs(seed || 0) % lista.length]);
  }

  return { porTipo, abertura, url, bancos };
})();
