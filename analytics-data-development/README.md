# Desafio Analytics Data Development

## Introdução

Olá! Estamos felizes em saber que você pretende trabalhar conosco na equipe de Analytics Data Development da Creditas. Significa muito para nós você dispor do seu tempo para fazer esse desafio. :smiley:

O desafio consiste em representar uma tarefa que faz parte do nosso cotidiano e que foi pensada para analisar suas habilidades de programação e manipulação de dados. Esperamos que você nos forneça uma solução eficaz, levando em consideração a clareza, desempenho e organização do código. :nerd_face:

## O Problema: Eficiência de Marketing Digital

Esse desafio trata-se de como preparar os dados para analisar a efetividade do Marketing Digital na Creditas. Se você não conhece Marketing digital: tá tudo bem! Você não precisa desse conhecimento para concluir o nosso teste. Abaixo listamos alguns dos principais conceitos de marketing digital:

- ***Campaign***: Uma campanha de marketing é um conjunto de ações publicitárias que tem o intuito de impactar um grupo específico de potenciais clientes;
 - ***Ad Creative***: Imagem ou vídeo representando a mensagem a ser divulgada;
 - ***Ad Impressions***: Uma exibição de um anúncio a um potencial cliente;
 - ***Clicks***: Um clique em um anúncio que direciona o cliente ao site da empresa anunciante;

### Os dados

Temos 4 diferentes datasets para manipular e integrá-los. Todos eles foram gerados: *não tratam-se de dados reais.*

#### `google_ads_media_costs.jsonl`

Esse dataset exibe os custos de campanha do *Google Ads Platform*, contendo uma *String json* por linha.

Exemplo:

```json
{
    "date": "2018-10-01",
    "google_campaign_id": 1001,
    "google_campaign_name": "emprestimo_garantia|auto|natal2018",
    "ad_creative_id": 20001,
    "ad_creative_name": "homem_sorrindo_fundo_carro_012",
    "clicks": 3979,
    "impressions": 157767,
    "cost": 20.4
}
```

#### `facebook_ads_media_costs.jsonl`

Esse dataset exibe os custos de campanha do *Facebook Ads*, contendo uma *String json* por linha. É bem parecido com o anterior, porém sem o campo *ad_creative_id*.

Exemplo:

```json
{
    "date": "2018-10-01",
    "fb_campaign_id": 3001,
    "fb_campaign_name": "emprestimo_garantia|auto|natal2018",
    "clicks": 2265,
    "impressions": 397781,
    "cost": 246.78
}
```

#### `pageviews.txt`

Esse arquivo vem do servidor web e contém informações sobre a visita do cliente ao nosso site. É um arquivo de texto onde deve-se extrair as informações analisando cada linha e capturando apenas o necessário.

Exemplo:

```txt
203.0.181.219 - [2018-10-01 00:00:00] "GET / HTTP/1.1" 200 http://www.creditas.com.br/emprestimo-com-garantia?ad_creative_id=20003&campaign_id=1002 | device_id: mmRe2Qts07 | referer: http://google.com.br
192.0.5.86 - [2018-10-01 00:00:00] "GET / HTTP/1.1" 200 http://www.bankfacil.com.br/emprestimo-com-garantia?campaign_id=3005 | device_id: i2IJLNavik | referer: http://www.facebook.com
192.14.66.90 - [2018-10-01 00:15:00] "GET / HTTP/1.1" 200 http://www.bankfacil.com.br/emprestimo-com-garantia | device_id: Pk9yEGx715 | referer: https://www.moreira.br/

```

No endereço da URL você pode encontrar o *`ad_creative_id`* e o *`campaign_id`*. Também encontra-se o *`referer`* que indica de onde o cliente veio, podendo ser: *Google Ads* (`http://google.com.br`), *Facebook Ads* (`http://www.facebook.com`) ou tráfego orgânico (qualquer coisa).

#### `customer_leads_funnel.csv`

Esse arquivo representa uma réplica da tabela analítica existente na nossa infra-estrutura.

| device_id  | lead_id   | registered_at       | credit_decision | credit_decision_at  | signed_at           | revenue  |
| ---------- | --------- | ------------------- | --------------- | ------------------- | ------------------- | -------- |
| 3HTZRCZdLc | 578419657 | 2018-10-01 00:00:50 | A               | 2018-10-05 19:37:50 |                     |          |
| Mr35TsBJtE | 581565131 | 2018-10-01 00:10:22 | N               | 2018-10-01 10:17:22 |                     |          |
| 1ZBFWuW5Qd | 100080974 | 2018-10-01 01:32:12 | A               | 2018-10-04 21:00:12 | 2018-10-07 01:59:12 | 19340.61 |

Tenha em mente que *"lead"* é uma pessoa interessada, que pode ou não se tornar um clieFeshonte. Um *lead* torna-se um cliente quando assina o contrato.

Atente-se que na coluna *`credit_decision`*, um `A` representa ***Aprovado*** e um `N` representa ***Negado***. Além disso, você pode observar que mesmo que um cliente seja aprovado, ele pode desistir e não assinar o contrato; que, por sua vez, não gerará receita. 

### O que os usuários precisam responder

O time de marketing digital é altamente *data-driven* e orientado a resultados. Eles precisam que você prepare o banco de dados contendo tabelas analíticas onde eles poderão executar queries para responder as seguintes questões:

1. Qual foi a campanha mais cara?
2. Qual foi a campanha mais lucrativa?
3. Qual *ad creative* foi o mais eficiente com relação a cliques?
4. Qual *ad creative* foi o mais eficiente com relação a geração de *leads*?

### O que você precisa fazer

Usando `python` e outras ferramentas de sua escolha:
 - Fazer a ingestão dos dados em um banco de dados (*para facilitar, criamos um arquivo Connection.py que utiliza SQLite em um banco de dados local, mas caso deseje pode utilizar o banco de dados de sua preferência*);
 - Gerar uma tabela para responder as questões acima;
 - Escrever 4 queries em SQL no seu README que respondam cada uma das questões acima;
 - Explicar como executar a sua solução.

Nós esperamos que você entenda os dados, como eles se relacionam entre si e qual a melhor forma de armazenar e exibir esses dados para o usuário final.

### Como entregar a sua solução

Crie um repositório privado no GitHub e conceda acesso ao usuário: `marcionetov`.
Também responda o e-mail original com o link da sua solução informando que você concluiu o teste.
