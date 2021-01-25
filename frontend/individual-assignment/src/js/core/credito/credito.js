import taxas from './taxas'

class Credito {
  static calcTotalEmprestimo (prazo, valorDoEmprestimo) {
    return ((taxas.IOF / 100) + (taxas.TAXA_JUROS / 100) + (prazo / 1000) + 1) * valorDoEmprestimo
  }
  static calcValorParcela (prazo, valorTotalAPagar) {
    return valorTotalAPagar / prazo
  }
  static calcLimiteEmprestimo (valorGarantia) {
    return valorGarantia * taxas.LIMITE_EMPRESTIMO
  }
}

export default Credito
