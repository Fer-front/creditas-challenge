# Desafio Analytics Data Development

## Introdução

Olá! We're glad to know you intend to work with us in the Creditas Data Engineering team. It means a lot you're taking time to do this programming assignment! :smiley:

This challenge mimics a task we ourselves deal with on a daily basis and it was designed to asses your coding skills. We expect you to deliver a professional solution, taking into account correctness, performance and code organization. :nerd_face:

## O Problema: Eficiência de Marketing Digital

### Um resumo sobre marketing digital

Marketing Digital são todas as formas de atrair novos clientes usando ferramentas online, como: facebook, google, LinkedIn, entre outras. Todas essas plataformas requerem pagamentos enquanto exibem produtos *- em forma de anúncios -* aos potenciais consumidores. Em resumo, marketing digital é como o marketing tradicional mas utiliza mídias digitais ao invés de mídias físicas. Há também uma diferença importante: Com mídias digitais é possível acompanhar o engajamento do usuário e ajustar a estratégia, otimizando assim o investimento em Marketing.

Esse desafio trata-se de como preparar os dados para analisar a efetividade do Marketing Digital na Creditas. Se você não conhece Marketing digital: tá tudo bem! Você não precisa ter conhecimento prévio em marketing digital para concluir o nosso teste. Abaixo listamos alguns dos principais conceitos de marketing digital:

- ***Campaign***: Uma campanha de marketing é um conjunto de ações publicitárias que tem o intuito de impactar um grupo específico de potenciais clientes;
 - ***Ad Creative***: Imagem ou vídeo que convém com a mensagem a ser divulgada;
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
| Mr35TsBJtE | 581565131 | 2018-10-01 00:10:22 | D               | 2018-10-01 10:17:22 |                     |          |
| 1ZBFWuW5Qd | 100080974 | 2018-10-01 01:32:12 | A               | 2018-10-04 21:00:12 | 2018-10-07 01:59:12 | 19340.61 |

Tenha em mente que *"lead"* é uma pessoa interessada, que pode ou não se tornar um cliente. Um *lead* torna-se um cliente quando assina o contrato.

Atente-se que na coluna *`credit_decision`*, um `A` representa ***Aprovado*** e um `D` representa ***Negado***. Além disso, você pode observar que mesmo que um cliente seja aprovado, ele pode desistir e não assinar o contrato; que, por sua vez, não gerará receita. 

### What the user needs to answer

The digital marketing team is a highly data driven and results oriented team. They need you to prepare the analytical database/tables where they will perform queries to answer the following business questions:

1. What was the most expensive campaign?
2. What was the most profitable campaign?
3. Which ad creative is the most effective in terms of clicks?
4. Which ad creative is the most effective in terms of generating leads?

### What you need to do

Using `python` and other tools of your choice:
 - ingest the data in a database;
 - provide a single table ready to be used to answer the questions above;
 - provide 4 SQL queries in your README that are answers for each business question presented above;
 - explain how to reproduce your solution;

We expect you to understand the data, how the datasets fit together and how to best store/represent data to the end data user.

### How to deliver your solution

Create a github private repository and grant access to the user `marcionetov`. Please also reply the original e-mail with the link to this page informing you submitted your solution.