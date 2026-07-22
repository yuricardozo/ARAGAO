/* =====================================================================
   IMAGENS ILUSTRATIVAS — v2
   Agora os cards são grandes e a foto manda no site. Enquanto o imóvel
   não tiver foto real, o site desenha uma cena em SVG na paleta da marca:
   céu em degradê, luz quente, vegetação e profundidade.
   Assim que a foto é enviada pelo painel, ela assume o lugar.
   ===================================================================== */

const CENA = (function(){
  const P = {
    ceu1:"#DCE7E1", ceu2:"#F4F2EC", sol:"#E8C88A",
    verde:"#0E4B3A", verde2:"#17694F", folha:"#2C7A5D",
    areia:"#E5DED2", parede:"#FBFAF6", tinta:"#101413",
    vidro:"#9FBCB4", telha:"#8C5A3C", ambar:"#C8873A"
  };
  const rnd = s => { const x = Math.sin((s+1) * 9973) * 10000; return x - Math.floor(x); };

  function base(seed, meio, frente){
    const solX = 120 + Math.round(rnd(seed) * 520);
    return `<svg viewBox="0 0 1000 700" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="c${seed}" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="${P.ceu1}"/><stop offset="62%" stop-color="${P.ceu2}"/>
        </linearGradient>
        <radialGradient id="s${seed}" cx="50%" cy="50%">
          <stop offset="0%" stop-color="${P.sol}" stop-opacity=".85"/>
          <stop offset="100%" stop-color="${P.sol}" stop-opacity="0"/>
        </radialGradient>
        <linearGradient id="g${seed}" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="${P.folha}" stop-opacity=".55"/>
          <stop offset="100%" stop-color="${P.verde}" stop-opacity=".85"/>
        </linearGradient>
      </defs>
      <rect width="1000" height="700" fill="url(#c${seed})"/>
      <circle cx="${solX}" cy="150" r="210" fill="url(#s${seed})"/>
      ${meio}
      <path d="M0 560 Q250 528 520 552 T1000 536 L1000 700 L0 700Z" fill="url(#g${seed})"/>
      ${frente}
      <g opacity=".72">
        <rect x="28" y="632" width="128" height="26" rx="13" fill="${P.parede}"/>
        <text x="46" y="649" font-family="Plus Jakarta Sans, sans-serif" font-size="11"
              letter-spacing="2.5" fill="${P.tinta}">ILUSTRAÇÃO</text>
      </g>
    </svg>`;
  }

  const arvore = (x, y, r, op) =>
    `<g opacity="${op}"><rect x="${x-4}" y="${y-6}" width="8" height="${r+30}" fill="${P.tinta}" opacity=".45"/>
     <circle cx="${x}" cy="${y-r*0.5}" r="${r}" fill="${P.folha}"/>
     <circle cx="${x-r*0.6}" cy="${y-r*0.15}" r="${r*0.66}" fill="${P.verde2}"/>
     <circle cx="${x+r*0.6}" cy="${y-r*0.2}" r="${r*0.58}" fill="${P.verde}" opacity=".8"/></g>`;

  const janela = (x, y, w, h, s) =>
    `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="3" fill="${P.vidro}" opacity="${.5 + rnd(s)*.45}"/>
     <line x1="${x+w/2}" y1="${y}" x2="${x+w/2}" y2="${y+h}" stroke="${P.parede}" stroke-width="2" opacity=".8"/>`;

  function casa(seed){
    const meio = `
      ${arvore(880, 560, 78, .9)} ${arvore(120, 545, 62, .75)}
      <polygon points="270,330 560,214 850,330" fill="${P.telha}"/>
      <polygon points="270,330 560,214 560,330" fill="${P.telha}" opacity=".75"/>
      <rect x="300" y="330" width="500" height="235" fill="${P.parede}"/>
      <rect x="300" y="330" width="500" height="235" fill="none" stroke="${P.tinta}" stroke-opacity=".12"/>
      ${janela(340,375,100,78,seed)} ${janela(470,375,100,78,seed+3)} ${janela(600,375,100,78,seed+6)}
      <rect x="720" y="430" width="66" height="135" rx="3" fill="${P.verde}"/>
      <rect x="300" y="556" width="500" height="12" fill="${P.tinta}" opacity=".14"/>`;
    const frente = `
      <ellipse cx="560" cy="596" rx="260" ry="20" fill="${P.tinta}" opacity=".1"/>
      <rect x="430" y="586" width="270" height="8" rx="4" fill="${P.areia}" opacity=".8"/>
      ${arvore(240, 620, 44, .95)}`;
    return base(seed, meio, frente);
  }

  function predio(seed){
    let j = "";
    for(let l = 0; l < 7; l++)
      for(let c = 0; c < 6; c++)
        j += janela(400 + c*58, 170 + l*54, 40, 36, seed + l*6 + c);
    const meio = `
      <rect x="640" y="250" width="180" height="320" fill="${P.areia}" opacity=".65"/>
      <rect x="370" y="140" width="390" height="430" fill="${P.parede}"/>
      <rect x="370" y="130" width="390" height="18" rx="4" fill="${P.verde}"/>
      ${j}
      <rect x="500" y="480" width="120" height="90" rx="4" fill="${P.verde}" opacity=".9"/>
      <rect x="180" y="330" width="150" height="240" fill="${P.parede}" opacity=".9"/>
      ${janela(205,365,45,38,seed+1)} ${janela(265,365,45,38,seed+2)}
      ${janela(205,435,45,38,seed+3)} ${janela(265,435,45,38,seed+4)}`;
    const frente = `${arvore(880, 600, 70, .95)} ${arvore(110, 610, 52, .9)}
      <ellipse cx="560" cy="600" rx="240" ry="18" fill="${P.tinta}" opacity=".09"/>`;
    return base(seed, meio, frente);
  }

  function terreno(seed){
    let cerca = "";
    for(let i = 0; i < 11; i++) cerca += `<rect x="${180 + i*64}" y="440" width="7" height="110" rx="3" fill="${P.parede}"/>`;
    const meio = `
      ${arvore(890, 520, 72, .8)} ${arvore(95, 530, 58, .7)}
      <g stroke="${P.parede}" stroke-width="6" opacity=".9">
        <line x1="180" y1="466" x2="820" y2="466"/><line x1="180" y1="510" x2="820" y2="510"/>
      </g>
      ${cerca}
      <g stroke="${P.ambar}" stroke-width="3" stroke-dasharray="14 10" fill="none">
        <path d="M180 400 L820 400"/>
      </g>
      <rect x="430" y="360" width="140" height="34" rx="17" fill="${P.parede}"/>
      <text x="463" y="383" font-family="Plus Jakarta Sans, sans-serif" font-size="16"
            letter-spacing="3" fill="${P.verde}">LOTE</text>`;
    const frente = `<ellipse cx="500" cy="612" rx="300" ry="20" fill="${P.tinta}" opacity=".08"/>`;
    return base(seed, meio, frente);
  }

  function galpao(seed){
    let ondas = "";
    for(let i = 0; i < 16; i++) ondas += `<line x1="${230 + i*38}" y1="300" x2="${230 + i*38}" y2="565" stroke="${P.tinta}" stroke-opacity=".08"/>`;
    const meio = `
      <polygon points="200,300 540,222 880,300" fill="${P.verde}"/>
      <rect x="230" y="300" width="620" height="265" fill="${P.parede}"/>
      ${ondas}
      <rect x="330" y="380" width="250" height="185" rx="4" fill="${P.vidro}" opacity=".55"/>
      <g stroke="${P.parede}" stroke-width="3" opacity=".9">
        ${[0,1,2,3,4].map(i => `<line x1="330" y1="${400+i*36}" x2="580" y2="${400+i*36}"/>`).join("")}
      </g>
      <rect x="650" y="440" width="90" height="125" rx="3" fill="${P.verde}"/>
      <rect x="760" y="470" width="70" height="95" rx="3" fill="${P.areia}"/>`;
    const frente = `
      <rect x="180" y="586" width="640" height="10" rx="5" fill="${P.areia}" opacity=".7"/>
      ${arvore(920, 610, 56, .85)}
      <ellipse cx="540" cy="600" rx="290" ry="18" fill="${P.tinta}" opacity=".09"/>`;
    return base(seed, meio, frente);
  }

  function chacara(seed){
    let pomar = "";
    for(let i = 0; i < 6; i++) pomar += arvore(120 + i*160 + rnd(seed+i)*40, 500 + rnd(seed+i+3)*40, 46 + rnd(seed+i+7)*22, .85);
    const meio = `
      <path d="M0 430 Q220 372 470 418 T1000 396 L1000 560 L0 560Z" fill="${P.folha}" opacity=".35"/>
      ${pomar}
      <polygon points="380,352 540,268 700,352" fill="${P.telha}"/>
      <rect x="405" y="352" width="270" height="205" fill="${P.parede}"/>
      ${janela(435,392,72,60,seed)} ${janela(545,392,72,60,seed+2)}
      <rect x="605" y="470" width="58" height="87" rx="3" fill="${P.verde}"/>
      <rect x="740" y="440" width="130" height="118" rx="4" fill="${P.areia}"/>
      <polygon points="730,440 805,398 880,440" fill="${P.verde}" opacity=".85"/>`;
    const frente = `<ellipse cx="540" cy="592" rx="250" ry="18" fill="${P.tinta}" opacity=".09"/>`;
    return base(seed, meio, frente);
  }

  function sala(seed){
    return `<svg viewBox="0 0 1000 700" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      <rect width="1000" height="700" fill="${P.parede}"/>
      <rect x="0" y="520" width="1000" height="180" fill="${P.areia}" opacity=".8"/>
      <rect x="600" y="120" width="330" height="380" rx="6" fill="${P.vidro}" opacity=".55"/>
      <line x1="765" y1="120" x2="765" y2="500" stroke="${P.parede}" stroke-width="8"/>
      <rect x="120" y="330" width="360" height="140" rx="16" fill="${P.verde}"/>
      <rect x="140" y="300" width="120" height="46" rx="12" fill="${P.verde2}"/>
      <rect x="280" y="300" width="120" height="46" rx="12" fill="${P.verde2}"/>
      <ellipse cx="300" cy="500" rx="220" ry="16" fill="${P.tinta}" opacity=".08"/>
      <rect x="520" y="410" width="130" height="70" rx="8" fill="${P.telha}" opacity=".7"/>
      <circle cx="880" cy="470" r="42" fill="${P.folha}" opacity=".6"/>
      <rect x="874" y="470" width="12" height="60" fill="${P.tinta}" opacity=".4"/>
      <g opacity=".72">
        <rect x="28" y="632" width="128" height="26" rx="13" fill="${P.parede}"/>
        <text x="46" y="649" font-family="Plus Jakarta Sans, sans-serif" font-size="11"
              letter-spacing="2.5" fill="${P.tinta}">ILUSTRAÇÃO</text>
      </g>
    </svg>`;
  }

  function porTipo(tipo, seed){
    const t = (tipo || "").toLowerCase();
    if(t.indexOf("apart") === 0) return predio(seed);
    if(t.indexOf("sala") === 0) return sala(seed);
    if(t.indexOf("terr") === 0) return terreno(seed);
    if(t.indexOf("barr") === 0 || t.indexOf("galp") === 0 || t.indexOf("comerc") === 0) return galpao(seed);
    if(t.indexOf("chac") === 0 || t.indexOf("chác") === 0 || t.indexOf("rural") > -1) return chacara(seed);
    return casa(seed);
  }

  function retrato(){
    return `<svg viewBox="0 0 700 900" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      <rect width="700" height="900" fill="${P.areia}"/>
      <circle cx="350" cy="330" r="230" fill="${P.parede}" opacity=".7"/>
      <circle cx="350" cy="360" r="120" fill="${P.verde}"/>
      <path d="M350 500c-128 0-210 76-227 183-4 22 10 37 32 37h390c22 0 36-15 32-37-17-107-99-183-227-183z" fill="${P.verde}"/>
      <rect x="196" y="782" width="308" height="34" rx="17" fill="${P.parede}"/>
      <text x="228" y="805" font-family="Plus Jakarta Sans, sans-serif" font-size="14"
            letter-spacing="3" fill="${P.tinta}">FOTO DO CORRETOR</text>
    </svg>`;
  }

  return { porTipo, retrato, casa, predio, terreno, galpao, chacara, sala };
})();
