import './styles.scss'
import init from './js/pages/creditos'

export default class CreditasChallenge {
  static initialize () {
    this.registerEvents()
  }
  static registerEvents () {
    init()
  }
}

document.addEventListener('DOMContentLoaded', function () {
  CreditasChallenge.initialize()
})
