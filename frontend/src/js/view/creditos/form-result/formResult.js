import el from './domElements'
import taxas from '../../../constants/taxas'
import formatCurrency from '../../../utils/formatCurrency'

const checkFormValidity = formElement => formElement.checkValidity()

const getFormValues = formElement =>
  Object.values(formElement.elements)
    .filter(element => ['SELECT', 'INPUT'].includes(element.nodeName))
    .map(element => ({ field: element.name, value: element.value }))

const toStringFormValues = values => {
  const match = matchString => value => value.field === matchString
  const IOF = taxas.IOF / 100
  const INTEREST_RATE = taxas.TAXA_JUROS / 100
  const TIME = values.find(match('parcelas')).value / 1000
  const VEHICLE_LOAN_AMOUNT = values.find(match('valor-emprestimo')).value

  return `Confirmação\n${values
    .map(value => `Campo: ${value.field}, Valor: ${value.value}`)
    .join('\n')}`.concat(
      `\nTotal ${(IOF + INTEREST_RATE + TIME + 1) * VEHICLE_LOAN_AMOUNT}`
  )
}

function Send (values) {
  return new Promise((resolve, reject) => {
    try {
      resolve(toStringFormValues(values))
    } catch (error) {
      reject(error)
    }
  })
}

class FormResult {
  constructor () {
    this.totalEmprestimo = 0
    this.valorParcela = 0
  }

  updateParcela (valor) {
    this.valorParcela = valor
    el.valor_parcela.textContent = formatCurrency(valor)
  }

  updateTotalEmprestimo (valor) {
    this.totalEmprestimo = valor
    el.total_emprestimo.textContent = formatCurrency(valor)
  }

  updateTaxaJuros (valor) {
    el.tax_juros.textContent = `${valor}%`
  }

  Submit (formElement) {
    el.btn_submit.addEventListener('click', (event) => {
      event.preventDefault()

      if (checkFormValidity(formElement)) {
        Send(getFormValues(formElement))
          .then(result => window.confirm(result, 'Your form submited success'))
          .catch(error => window.Alert('Your form submited error', error))
      }
    })
  }
}

export default FormResult
