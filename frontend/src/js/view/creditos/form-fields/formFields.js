import { el } from './domElments.js';
import createElement from '../../../utils/createElement';
import formatCurrency from '../../../utils/formatCurrency';

class FormFields {
  constructor() {
    this.store = {
      prazo: undefined,
      tipoGarantia: undefined,
      valorGarantia: undefined,
      valorEmprestimo: undefined,
    };
  }

  get valorGarantia() {
    return el.input_valor_garantia.value;
  }
  get valorEmprestimo() {
    return el.input_valor_emprestimo.value;
  }
  get rangeGarantia() {
    return el.input_range_garantia.value;
  }
  get rangeEmprestimo() {
    return el.input_range_emprestimo.value;
  }
  get prazo() {
    return el.select_parcelas.value;
  }
  get tipoGarantia() {
    return el.select_garantia.value;
  }

  updateValorGarantia(value) {
    el.input_valor_garantia.value = value;
  }
  updateRangeGarantia(min, max) {
    el.input_range_garantia.min = min;
    el.input_range_garantia.max = max;
  }
  updateLabelGarantia(min, max) {
    el.label_garantia_min.textContent = formatCurrency(min);
    el.label_garantia_max.textContent = formatCurrency(max);
  }

  updateValorEmprestimo(value) {
    el.input_valor_emprestimo.value = value;
  }
  updateRangeEmprestimo(min, max) {
    el.input_range_emprestimo.min = min;
    el.input_range_emprestimo.max = max;
  }
  updateLabelEmprestimo(min, max) {
    el.label_emprestimo_min.textContent = formatCurrency(min);
    el.label_emprestimo_max.textContent = formatCurrency(max);
  }
  updatePrazo(prazos) {
    el.select_parcelas.innerHTML = '';

    prazos.forEach((prazo) => {
      const option = createElement('option', { value: prazo });
      option.textContent = prazo;
      el.select_parcelas.appendChild(option);
    });
  }

  registerHandleChangeEmprestimo(callback) {
    el.input_range_emprestimo.addEventListener('change', callback);
  }
  registerHandleChangeGarantia(callback) {
    el.input_range_garantia.addEventListener('change', callback);
  }
  registerHandleChangePrazo(callback) {
    el.select_parcelas.addEventListener('change', callback);
  }
  registerHandleChangeTipoGarantia(callback) {
    el.select_garantia.addEventListener('change', callback);
  }
  registerHandleInputGarantia(callback) {
    el.input_valor_garantia.addEventListener('input', callback);
  }
  registerHandleInputEmprestimo(callback) {
    el.input_valor_emprestimo.addEventListener('input', callback);
  }
}

export default FormFields;
