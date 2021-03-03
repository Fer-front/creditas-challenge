export const ID = {
  input_valor_garantia: 'valor-garantia',
  input_range_garantia: 'valor-garantia-range',
  label_garantia_min: 'min-garantia',
  label_garantia_max: 'max-garantia',

  input_valor_emprestimo: 'valor-emprestimo',
  input_range_emprestimo: 'valor-emprestimo-range',
  label_emprestimo_min: 'min-emprestimo',
  label_emprestimo_max: 'max-emprestimo',

  select_garantia: 'garantia',
  select_parcelas: 'parcelas',
};

function registerElementForm() {
  const element = {};

  for (const idKey in ID) {
    element[idKey] = document.getElementById(ID[idKey]);
  }

  return element;
}

export const el = registerElementForm();
