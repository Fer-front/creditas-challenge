<img src="https://www.creditas.com.br/static/images/logo-creditas-color-8367919c2a.svg" width="400">
<!-- ![Logo of the project](https://www.creditas.com.br/static/images/logo-creditas-color-8367919c2a.svg) -->

# Challenge Frontend - Creditas
> Esse é um teste focado em design de código e conhecimento de orientação a objeto e design patterns em JavaScript. O objetivo é avaliar sua experiência em escrever código de fácil manutenção, baixo acoplamento e alta coesão.

A brief description of your project, what it is used for.

## Installing / Getting started

A quick introduction of the minimal setup you need to get a hello world up &
running.

```shell
commands here
```

Here you should say what actually happens when you execute the code above.

## Developing

### Built With
Este projeto possui algumas bibliotecas para nos auxiliar nos testes e rodar a aplicação, são eles: Webpack, Babel, Jest e Eslint...

List main libraries, frameworks used including versions (React, Angular etc...)

### Prerequisites
Você precisa minimamente do [NodeJs](https://nodejs.org/en/) instalado para rodar a apliação e o [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) para baixar o repositório e submeter um pull-request...

What is needed to set up the dev environment. For instance, global dependencies or any other tools. include download links.


### Setting up Dev

Você precisa conhecer um pouco sobre o Git, que é uma ferramente que nos ajudar a fazer o controle de versão dos nossos arquivos...

Here's a brief intro about what a developer must do in order to start developing
the project further:

```shell
git clone https://github.com/Creditas/challenge.git
cd frontend/
npm install
npm start
```

Se tudo estiver ok, acesse a url [http://localhost:3000/](http://localhost:3000/)

And state what happens step-by-step. If there is any virtual environment, local server or database feeder needed, explain here.

## Configuration

Here you should write what are all of the configurations a user can enter when
using the project.

## Tests

Describe and show how to run the tests with code examples.
Explain what these tests test and why.

```shell
npm test
```

## Style guide

Nossos estilos estão seguindo um padrão chamado BEM, mas você pode modificá-lo o quanto quiser...
Explain your code style and show how to check it.

#

#

## Teste frontend - Creditas

Esse é um teste focado em design de código, e conhecimento de orientação a 
objeto. O objetivo é avaliar sua experiênica em escrever código de fácil 
manutenção, baixo acoplamento, e alta coesão.

### Apresentação do problema

O arquivo `index.html` contém o esqueleto de uma aplicação de chat totalmente 
*bare-bones*: uma `<ul>` com uma lista de mensagens enviadas, e um `<button>` + `<input>` 
para envio de novas mensagens.

A feature inicial de nossa aplicação é bastante simples: o usuário deve poder 
entrar uma mensagem na caixa de texto e, ao apertar o botão "Enviar" (ou 
pressionar <kbd>Enter</kbd>), a mensagem deverá aparecer na lista de mensagens.

Isoladamente essa é uma feature simples de implementar, mas queremos que você 
leve em conta a evolução futura do software. Imagine que o app irá crescer em 
features, e adicionar coisas como:
* envio de mensagens via ajax, com as respostas vindo via `long-polling`
* chat em realtime via WebRTC
* ter vários chats visíveis ao mesmo tempo, adicionadas dinamicamente com base nas ações do usuário

Você deve pensar num design de código que suporte esses casos de uso sem 
grandes modificações.

### Avaliação

Para nos enviar seu código, você pode:
* Fazer um fork desse repositório e nos mandar uma pull-request
* Dar acesso ao seu repositório privado no [Github](http://github.com) ou [Gitlab](http://gitlab.com) para `creditaschallenge`.
* Enviar um `git bundle` do seu repositório para o e-mail challenge@creditas.com.br
