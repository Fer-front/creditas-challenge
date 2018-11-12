import {
  getByLabelText,
  getByText,
  getByTestId,
  queryByTestId,
  wait,
  fireEvent
} from 'dom-testing-library'
import 'jest-dom/extend-expect'

import CreditasChallenge, {
  checkFormValidity,
  getFormValues,
  toStringFormValues,
  Send,
  Submit
} from '../src/index'

function initializeAppMock () {
  document.body.innerHTML = `
    <form class="form" data-testid="form">
      <label for="valor-garantia">Valor da Garantia</label>
      <input id="valor-garantia" required />
      <button type="button"></button>
    </form>
  `
}

function clean () {
  document.body.innerHTML = ''
}

describe('Creditas Challenge', () => {
  beforeEach(() => {
    initializeAppMock()
  })

  afterEach(() => {
    clean()
  })

  describe('Method: checkFormValidity', () => {
    it('should return true when form has valid', () => {
      const form = document.querySelector('.form')
      const input = document.querySelector('input')
      input.value = 10
      expect(checkFormValidity(form)).toBeTruthy()
    })

    it('should return false when form has not valid', () => {
      const form = document.querySelector('.form')
      expect(checkFormValidity(form)).toBeFalsy()
    })
  })

  describe('Method: Submit', () => {
    it('should add event listener to submit data form', () => {
      const container = document.querySelector('.form')
      Submit(container)
    })
  })
})
