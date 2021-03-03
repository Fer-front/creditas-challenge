import './main.scss';
import init from './js/view/creditos';

export default class CreditasChallenge {
  static initialize() {
    this.registerEvents();
  }
  static registerEvents() {
    init();
  }
}

document.addEventListener('DOMContentLoaded', function () {
  CreditasChallenge.initialize();
});
