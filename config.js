/* =====================================================================
   CONEXÃO COM O BANCO DE DADOS (SUPABASE)
   Preencha os dois campos abaixo com os dados do seu projeto.
   Onde achar: painel do Supabase → Project Settings → API
   ---------------------------------------------------------------------
   A chave "publishable" (sb_publishable_...) é pública por natureza — pode
   ficar aqui sem risco, porque as regras de segurança (RLS) do banco é que
   controlam o acesso. NUNCA cole aqui a chave "secret" / "service_role".
   ===================================================================== */

const SUPA = {
  url: "https://cgbbghnlawxptucokpwt.supabase.co",
  chave: "sb_publishable_Btjh9je0mEWxkGVcrAiAWA_avu4va4b",
  bucket: "imoveis"            // pasta de fotos criada no Storage
};

/* Cria o cliente. Se ainda não estiver configurado, o site funciona
   normalmente usando os imóveis de exemplo do arquivo conteudo.js. */
const CONFIGURADO = SUPA.url.indexOf("SEU-PROJETO") === -1 && SUPA.chave.indexOf("SUA_CHAVE") === -1;

let db = null;
try{
  if(CONFIGURADO && window.supabase) db = window.supabase.createClient(SUPA.url, SUPA.chave);
}catch(e){
  console.warn("Não consegui conectar ao Supabase:", e.message);
}

window.SUPA = SUPA;
window.CONFIGURADO = CONFIGURADO && !!db;
window.db = db;
