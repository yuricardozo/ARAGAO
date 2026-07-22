# Site + Painel — Cesar Aragão Corretor de Imóveis

## Arquivos

| Arquivo | Para que serve |
|---|---|
| `index.html` | O site público |
| `admin.html` | Painel do corretor (login, cadastro e edição de imóveis) |
| `config.js` | Onde ficam a URL e a chave do Supabase |
| `conteudo.js` | Textos fixos do site: perfil, números, processo, depoimentos |
| `imagens.js` | Ilustrações usadas enquanto não há foto real |
| `banco.sql` | Script que cria as tabelas no Supabase |

---

## Passo a passo do Supabase (uma vez só, ~10 minutos)

**1. Criar o projeto**
Acesse supabase.com → New project. Escolha região South America (São Paulo). Guarde a senha do banco.

**2. Criar as tabelas**
No menu lateral: SQL Editor → New query. Cole todo o conteúdo de `banco.sql` e clique em Run.
Isso cria a tabela de imóveis, a de contatos, as regras de segurança, a pasta de fotos e seis imóveis de exemplo.

**3. Pegar as chaves**
Project Settings → API. Copie:
- **Project URL** → cole em `config.js`, no campo `url`
- **anon public** → cole em `config.js`, no campo `chave`

A chave `anon` é pública de propósito — quem manda são as regras de segurança do banco. Só nunca cole a `service_role` em nenhum arquivo do site.

**4. Criar o login do corretor**
Authentication → Users → Add user → Create new user.
Preencha e-mail e senha e **marque "Auto Confirm User"**. Esse é o login que ele vai usar em `admin.html`.

**5. Desligar o cadastro público** (importante)
Authentication → Providers → Email → desmarque "Enable sign ups".
Assim ninguém cria conta sozinho; só você cadastra usuários pelo painel do Supabase.

---

## Como o cliente usa o painel

Abre `seusite.com.br/admin.html`, entra com e-mail e senha e tem:

- **Lista de imóveis** com miniatura, busca e filtro por finalidade
- **+ Novo imóvel** — formulário completo: código, título, tipo, finalidade, valor, bairro, medidas, dormitórios, suítes, banheiros, vagas, descrição e diferenciais
- **Fotos** — arrasta e solta (ou clica para escolher). Vão direto para o Storage do Supabase e a primeira vira a capa. Dá para remover qualquer uma
- **Publicado / Fora do ar** — tira o imóvel do site sem apagar o cadastro (útil quando está em negociação)
- **Destaque** — coloca o selo amarelo na listagem
- **Excluir** — apaga de vez, com confirmação
- **Contatos** — todo mundo que preenche o formulário do site cai aqui, com botão de responder no WhatsApp e marcação de atendido

Tudo que ele salva aparece no site na hora, sem republicar nada.

---

## Sobre as imagens

O site nunca mostra imagem quebrada. A regra é:

1. Se o imóvel tem foto cadastrada no painel → mostra a foto real
2. Se não tem → desenha uma ilustração arquitetônica na paleta da marca, escolhida pelo tipo do imóvel (casa, prédio, terreno, barracão, chácara), com a etiqueta "ILUSTRAÇÃO" no canto

As ilustrações aparecem na miniatura da listagem, na ficha do imóvel, na faixa de imagens logo abaixo da abertura e no lugar da foto do corretor. São desenhadas em SVG pelo próprio site — não dependem de banco de imagem, não têm licença a pagar e não pesam no carregamento.

**Para colocar a foto do corretor:** crie uma pasta `fotos/` ao lado do `index.html`, salve a imagem lá e escreva o caminho em `conteudo.js` → `perfil.foto: "fotos/aragao.jpg"`. Vertical, boa luz, de preferência em um imóvel — vale mais que qualquer ilustração.

---

## Publicar

Jogue a pasta inteira na Vercel (arrasta e solta ou conecta ao GitHub). É site estático, sem build. Depois aponte o domínio.

Duas coisas antes de subir:
- preencha o CRECI e o WhatsApp reais em `conteudo.js`
- troque os seis imóveis de exemplo pelos reais no painel

---

## Se o Supabase estiver fora do ar

O site continua no ar mostrando os imóveis de exemplo do `conteudo.js`. Nada quebra, nada fica em branco. O formulário também segue funcionando — ele abre o WhatsApp mesmo se não conseguir gravar o contato no banco.
