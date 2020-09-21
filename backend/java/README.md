## Desafio - Store

Você está revisando as decisões de design de um software que processa Pedidos online - Store. Para esses pedidos são realizados pagamentos que recebem tratamentos a depender as situações específicas de cada um como segue:

  - Se o pagamento for para um item físico, você deverá gerar um `shipping label` para o mesmo ser colocado na caixa do envio;
  - Um item do tipo alcoolico não pode ser adicionado caso a Customer seja uma pessoa menor de idade.
  - Caso o pagamento seja uma assinatura de serviço, você precisa ativar a assinatura, e notificar o usuário através de e-mail sobre isto;
  - Caso o pagamento seja um livro comum, você precisa gerar o `shipping label` com uma notificação de que trata-se de um item isento de impostos conforme disposto na Constituição Art. 150, VI, d.
  - Caso o pagamento seja de alguma mídia digital (música, vídeo), além de enviar a descrição da compra por e-mail ao comprador, conceder um voucher de desconto de R$ 10 ao comprador associado ao pagamento.

__O que faremos nessa etapa?__
Para o software em questão temos implementada apenas uma regra. Então, na entrevista, iremos juntas construir as regras pendentes. A ideia dessa etapa não é que construamos todas as regras específicas, mas sim entender como trabalhamos em uma dinâmica de pareamento onde possamos chegar em soluções com conjunto.

__Recadinhos__
Sugerimos que você se certifique que a aplicação está executando normalmente (compilando e com o teste passando) antes de iniciarmos

Você irá conduzir o pareamento e precisará compartilhar sua tela, então certifique-se que não está compartilhando nenhum conteúdo confidencial

Até mais!

