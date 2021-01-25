function unFormatCurrency (valor) {
  return valor.replace(/[R$\s.]/g, '').replace(/,/g, '.')
}

export default unFormatCurrency
