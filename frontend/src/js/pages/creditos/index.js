import FormFields from './form-fields/formFields'
import FormResult from './form-result/formResult'
import Credito from '../../core/credito/credito'
import taxas from '../../core/credito/taxas'
import veiculos from '../../core/credito/veiculos'
import imovel from '../../core/credito/imovel'

const form = new FormFields()
const formResult = new FormResult()

function getPegarRegrasTipoGarantia () {
  const tipoGaratia = form.tipoGarantia === 'veiculo' ? veiculos : imovel
  return { ...tipoGaratia.REGRAS }
}

function updateParcela () {
  const parcela = Credito.calcValorParcela(form.prazo, formResult.totalEmprestimo)
  formResult.updateParcela(parcela)
}

function updateTotalEmprestimo () {
  const totalEmprestimo = Credito.calcTotalEmprestimo(form.prazo, form.valorEmprestimo)
  formResult.updateTotalEmprestimo(totalEmprestimo)
}

function registerHandleFormResult () {
  updateTotalEmprestimo()
  updateParcela()
}

function registerHandleFormField () {
  const data = getPegarRegrasTipoGarantia()

  form.updatePrazo(data.prazo)
  formResult.updateTaxaJuros(taxas.TAXA_JUROS)

  const maxEmprestimo = Credito.calcLimiteEmprestimo(data.min_garantia)

  form.updateRangeEmprestimo(data.min_emprestimo, maxEmprestimo)
  form.updateLabelEmprestimo(data.min_emprestimo, maxEmprestimo)
  form.updateValorEmprestimo(data.min_emprestimo)

  form.updateRangeGarantia(data.min_garantia, data.max_garantia)
  form.updateLabelGarantia(data.min_garantia, data.max_garantia)
  form.updateValorGarantia(data.min_garantia)

  registerHandleFormResult()

  form.registerHandleChangeEmprestimo((e) => {
    form.updateValorEmprestimo(e.target.value)
    registerHandleFormResult()
  })

  form.registerHandleChangeGarantia((e) => {
    form.updateValorGarantia(e.target.value)

    const maxEmprestimo = Credito.calcLimiteEmprestimo(e.target.value)
    form.updateRangeEmprestimo(data.min_emprestimo, maxEmprestimo)
    form.updateLabelEmprestimo(data.min_emprestimo, maxEmprestimo)
  })
  form.registerHandleChangePrazo(() => {
    registerHandleFormResult()
  })
  formResult.Submit(document.querySelector('.form'))
}

function init () {
  registerHandleFormField()

  form.registerHandleChangeTipoGarantia(() => {
    registerHandleFormField()
  })
}

export default init
