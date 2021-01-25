export default function formatCurrency (valor, precisao = 2, moeda = 'BRL') {
  const config = { style: 'currency', currency: moeda, minimumFractionDigits: precisao }
  return new Intl.NumberFormat('pt-br', config).format(valor)
}