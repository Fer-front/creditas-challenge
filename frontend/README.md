<img src="https://www.creditas.com.br/static/images/logo-creditas-color-8367919c2a.svg" width="400">

# Challenge Frontend - Creditas
> Esse é um teste focado em design de código e conhecimento de orientação a objeto e design patterns em JavaScript. O objetivo é avaliar sua experiência em escrever código de fácil manutenção, baixo acoplamento e alta coesão.

<img style="display: block; margin: 0 auto;" src="./layout.png">

## Apresentação do problema

Você deverá implementar algumas funcionalidades para uma calculadora de simulação de crédito.

A interface está previamente definida, assim como os estilos.

Sinta-se à vontade para componentizar o que achar que deve ser componentizado. 
Só gostariamos que o teste fosse realizado com Javascript puro, nosso querido vanilla. O que acha de encarar o desafio? 

### Caso de uso

A aplicação deve atender os seguintes casos de uso:

O usuário deverá escolher o tipo de garantia que quer utilizar no pedido de empréstimo: "Veículo" ou "Imóvel" (o preenchimento padrão é "Veículo");

**Regras em comum**
- Taxa de IOF: 6.38%;
- Taxa de Juros: 2.34%;
- Valor máximo para empréstimo: 80% do valor da garantia; 

*Fórmula do valor total a pagar*

```javascript
const valorTotalAPagar = ((iof / 100) + (taxaDeJuros / 100) + (prazo / 1000) + 1) * valorDoEmprestimo
```

*Fórmula do valor da parcela*

```javascript
const valorDaParcela = valorTotalAPagar / prazo
```

## Desafios a cumprir

### CSS
Atualmente o arquivo CSS possui muitos estilos, o que dificulta a legibilidade. Esperamos que você faça uma boa arganização dos estilos, isolando-os para torná-los mais legíveis e, assim, facilitar a manutenção.

### HTML / JS
Hoje, a Creditas possui dois produtos: empréstimo com garantia de veículo e de imóvel. Na interface deste projeto, ao mudar o tipo de garantia no elemento `select`, o usuário deve ver as opções de valores e prazos referentes ao tipo selecionado. Ou seja, ao selecionar veículo ou imóvel, você deve mostrar na tela opções diferentes nos campos do formulário e no slider. Veja abaixo os valores correspondentes:

**Veículo**
- Valor mínimo para empréstimo: R$ 3.000,00;
- Valor máximo para empréstimo: R$ 100.000,00;
- Prazos para veículo : 24 / 36 / 48 meses;

**Imóvel**
- Valor mínimo para empréstimo: R$ 30.000,00;
- Valor máximo para empréstimo: R$ 4.500.000,00;
- Prazos para imóvel : 120 / 180 / 240 meses;

Por fim, você deve exibir o valor da parcela no campo correspondente a cada mudança nos inputs do formulário.

## Design de código Javascript

**Legibilidade e separação de responsabilidades**

Atualmente, o arquivo `index.js` possui muitas funções, o que dificulta a legibilidade. Se você reparar, partes delas podem ser utilizadas em múltiplos lugares. Esperamos que você organize seu código seguindo algum modelo de sua escolha. Leve em consideração a possibilidade de adicionar e/ou remover regras e produtos. Imagine que este código é parte de um projeto a longo prazo da empresa. Esperamos que cada responsabilidade esteja separada e isolada, para tornar a manutenção mais simples para toda a equipe de desenvolvimento.

## Desenvolvimento

### Construído com
Este projeto possui algumas bibliotecas para nos auxiliar nos testes e rodar a aplicação, são eles: Webpack, Babel, Jest e Eslint

### Pré-requisitos
Você precisa minimamente do [NodeJs](https://nodejs.org/en/) instalado para rodar a apliação e o [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) para baixar o repositório e submeter um pull-request

### Configurações para rodar o ambiente

Você precisa conhecer um pouco sobre o Git, que é uma ferramenta que nos ajuda a fazer o controle de versão dos nossos arquivos.

```shell
git clone https://github.com/Creditas/challenge.git
cd frontend/
npm install
npm start
```

Se tudo estiver ok, acesse a url [http://localhost:3000/](http://localhost:3000/)

## Tests

Para rodar os testes é necessário executar o comando abaixo:

```shell
npm test
```
