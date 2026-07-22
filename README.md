# Aragão — Corretor e Avaliador Imobiliário

Site institucional e vitrine de imóveis, com painel administrativo próprio.
Lucas do Rio Verde / MT.

## Como funciona

Site estático (HTML, CSS e JavaScript puro — sem build) com banco de dados
Supabase por trás. Os imóveis exibidos vêm do banco; o corretor cadastra,
edita e publica tudo pelo painel, sem tocar em código.

## Arquivos

| Arquivo | Função |
|---|---|
| `index.html` | Site público |
| `admin.html` | Painel do corretor (login, imóveis, contatos) |
| `config.js` | URL e chave pública do Supabase |
| `conteudo.js` | Textos fixos: perfil, serviços, números, depoimentos |
| `imagens.js` | Ilustrações SVG usadas enquanto não há foto real |
| `banco.sql` | Script de criação das tabelas no Supabase |
| `vercel.json` | URLs limpas, cabeçalhos de segurança, noindex no painel |

## Rodar localmente

Não precisa de servidor. Abra `index.html` no navegador.
Para o painel funcionar, `config.js` precisa estar preenchido.

## Publicar

Deploy automático na Vercel a cada push na branch `main`.

## Segurança

A chave em `config.js` é a **publishable** do Supabase — pública por
natureza, protegida pelas regras de RLS do banco.
A chave `service_role` **nunca** deve entrar neste repositório.
