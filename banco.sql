-- =====================================================================
-- BANCO DE DADOS — ARAGÃO CORRETOR DE IMÓVEIS
-- Cole este arquivo inteiro no Supabase → SQL Editor → New query → Run.
-- Pode rodar mais de uma vez sem quebrar nada.
-- =====================================================================

-- ---------- TABELA DE IMÓVEIS ----------
create table if not exists public.imoveis (
  id          uuid primary key default gen_random_uuid(),
  codigo      text unique not null,
  titulo      text not null,
  finalidade  text not null default 'venda',   -- o corretor trabalha só com venda
  tipo        text not null default 'Casa',
  bairro      text,
  cidade      text default 'Lucas do Rio Verde',
  area        numeric default 0,               -- área construída (m²)
  terreno     numeric default 0,               -- área do terreno (m²)
  dormitorios int default 0,
  suites      int default 0,
  banheiros   int default 0,
  vagas       int default 0,
  preco       text,                            -- como aparece no site: "R$ 420.000"
  valor       numeric default 0,               -- número puro, usado para ordenar
  descricao   text,
  itens       text[] default '{}',
  fotos       text[] default '{}',
  destaque    boolean default false,
  ativo       boolean default true,            -- desmarque para tirar do ar sem apagar
  ordem       int default 0,
  criado_em   timestamptz default now()
);

create index if not exists imoveis_ativo_idx on public.imoveis (ativo, ordem, criado_em desc);

-- ---------- TABELA DE CONTATOS RECEBIDOS ----------
create table if not exists public.contatos (
  id        uuid primary key default gen_random_uuid(),
  nome      text not null,
  telefone  text not null,
  objetivo  text,
  tipo      text,
  prazo     text,
  mensagem  text,
  imovel    text,          -- código do imóvel, quando o contato veio de uma ficha
  lido      boolean default false,
  criado_em timestamptz default now()
);

create index if not exists contatos_data_idx on public.contatos (criado_em desc);

-- ---------- SEGURANÇA (RLS) ----------
alter table public.imoveis  enable row level security;
alter table public.contatos enable row level security;

-- Qualquer visitante lê apenas imóveis ativos
drop policy if exists "imoveis leitura publica" on public.imoveis;
create policy "imoveis leitura publica" on public.imoveis
  for select using (ativo = true);

-- Quem estiver logado no painel faz tudo
drop policy if exists "imoveis admin" on public.imoveis;
create policy "imoveis admin" on public.imoveis
  for all to authenticated using (true) with check (true);

-- Visitante só pode ENVIAR contato, nunca ler os contatos dos outros
drop policy if exists "contatos envio publico" on public.contatos;
create policy "contatos envio publico" on public.contatos
  for insert to anon, authenticated with check (true);

drop policy if exists "contatos admin" on public.contatos;
create policy "contatos admin" on public.contatos
  for select to authenticated using (true);

drop policy if exists "contatos admin edita" on public.contatos;
create policy "contatos admin edita" on public.contatos
  for update to authenticated using (true) with check (true);

drop policy if exists "contatos admin apaga" on public.contatos;
create policy "contatos admin apaga" on public.contatos
  for delete to authenticated using (true);

-- ---------- PASTA DE FOTOS (STORAGE) ----------
insert into storage.buckets (id, name, public)
values ('imoveis', 'imoveis', true)
on conflict (id) do update set public = true;

drop policy if exists "fotos leitura publica" on storage.objects;
create policy "fotos leitura publica" on storage.objects
  for select using (bucket_id = 'imoveis');

drop policy if exists "fotos envio admin" on storage.objects;
create policy "fotos envio admin" on storage.objects
  for insert to authenticated with check (bucket_id = 'imoveis');

drop policy if exists "fotos troca admin" on storage.objects;
create policy "fotos troca admin" on storage.objects
  for update to authenticated using (bucket_id = 'imoveis');

drop policy if exists "fotos exclusao admin" on storage.objects;
create policy "fotos exclusao admin" on storage.objects
  for delete to authenticated using (bucket_id = 'imoveis');

-- ---------- IMÓVEIS DE EXEMPLO (pode apagar depois pelo painel) ----------
insert into public.imoveis (codigo,titulo,finalidade,tipo,bairro,area,terreno,dormitorios,suites,banheiros,vagas,preco,valor,descricao,itens,destaque,ordem)
values
('LRV-001','Casa alto padrão em condomínio fechado','venda','Casa','Residencial Bandeirantes',280,420,3,1,3,2,'R$ 1.250.000',1250000,
 'Projeto arquitetônico assinado, área gourmet integrada, piscina aquecida e acabamento em porcelanato retificado. Condomínio com portaria 24h.',
 '{"Piscina","Área gourmet","Portaria 24h","Aquecimento solar"}', true, 1),
('LRV-002','Apartamento 2 dormitórios próximo ao centro','venda','Apartamento','Centro',68,0,2,1,2,1,'R$ 420.000',420000,
 'Andar alto, sol da manhã, sacada com churrasqueira. Prédio com elevador e salão de festas, a três quadras da avenida principal.',
 '{"Elevador","Sacada com churrasqueira","Salão de festas"}', false, 2),
('LRV-003','Terreno comercial em avenida de fluxo','venda','Terreno','Parque das Emas',0,600,0,0,0,0,'R$ 690.000',690000,
 'Esquina plana, 20m de frente, pronta para construir. Zoneamento comercial e infraestrutura de rede instalada.',
 '{"Esquina","Plano","Zoneamento comercial"}', false, 3),
('LRV-004','Barracão logístico às margens da rodovia','venda','Barracão','Distrito Industrial',900,2000,0,0,2,8,'R$ 2.400.000',2400000,
 'Pé-direito de 8 metros, escritório interno climatizado, pátio de manobra para carreta e energia trifásica.',
 '{"Pé-direito 8m","Pátio para carreta","Energia trifásica"}', true, 4),
('LRV-005','Casa térrea pronta para morar','venda','Casa','Jardim Primavera',120,300,3,1,2,2,'R$ 520.000',520000,
 'Quintal murado, churrasqueira e garagem coberta para dois carros. Rua tranquila, perto de escola e mercado.',
 '{"Quintal murado","Churrasqueira","Garagem coberta"}', false, 5),
('LRV-006','Chácara com casa sede a 12 km da cidade','venda','Chácara','Zona rural',180,20000,3,1,2,4,'R$ 980.000',980000,
 'Dois hectares com pomar formado, poço artesiano, galpão e casa sede em alvenaria. Acesso por estrada cascalhada.',
 '{"Poço artesiano","Pomar formado","Galpão","Energia rural"}', false, 6)
on conflict (codigo) do nothing;
