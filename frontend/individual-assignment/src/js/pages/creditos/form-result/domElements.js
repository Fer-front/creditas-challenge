const ID = {
  btn_submit: 'btn_submit',
  tax_juros: 'tax_juros',
  total_emprestimo: 'total_emprestimo',
  valor_parcela: 'valor_parcela'
}

function registerElementForm () {
  const element = {}
  for (const idKey in ID) {
    element[idKey] = document.getElementById(ID[idKey])
  }
  return element
}
const el = registerElementForm()

export default el
