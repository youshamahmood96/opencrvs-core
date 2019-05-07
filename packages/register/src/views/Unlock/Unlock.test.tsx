import * as React from 'react'
import { ReactWrapper } from 'enzyme'
import { createTestComponent, flushPromises } from 'src/tests/util'
import { createStore } from 'src/store'
import { Unlock } from './Unlock'
import { storage } from 'src/storage'
import { pins } from './ComparePINs'

const clearPassword = (component: ReactWrapper) => {
  const backSpaceElem = component.find('#keypad-backspace').hostNodes()
  backSpaceElem.update()
  backSpaceElem.simulate('click')
  backSpaceElem.simulate('click')
  backSpaceElem.simulate('click')
  backSpaceElem.simulate('click')
}

describe('Unlock page loads Properly', () => {
  // mock indexeddb
  const indexedDB = {
    USER_DETAILS: JSON.stringify({ userMgntUserID: 'shakib75' }),
    USER_DATA: JSON.stringify([
      {
        userID: 'shakib75',
        userPIN: '$2a$10$xQBLcbPgGQNu9p6zVchWuu6pmCrQIjcb6k2W1PIVUxVTE/PumWM82',
        drafts: []
      }
    ]),
    screenLock: undefined,
    USER_ID: 'shakib75',
    locked_time: undefined
  }

  storage.getItem = jest.fn(async (key: string) =>
    Promise.resolve(indexedDB[key])
  )

  storage.setItem = jest.fn(
    async (key: string, value: string) => (indexedDB[key] = value)
  )

  const { store } = createStore()
  const testComponent = createTestComponent(
    <Unlock onCorrectPinMatch={() => null} />,
    store
  )

  it('Should load the Unlock page properly', () => {
    const elem = testComponent.component.find('#unlockPage').hostNodes().length
    expect(elem).toBe(1)
  })

  it('There should be no error message after providing successfull Pin', () => {
    clearPassword(testComponent.component)
    const numberElem = testComponent.component.find('#keypad-0').hostNodes()

    numberElem.simulate('click')
    numberElem.simulate('click')
    numberElem.simulate('click')
    numberElem.simulate('click')
    testComponent.component.update()

    const errorElem = testComponent.component.find('#errorMsg').hostNodes()
      .length
    expect(errorElem).toBe(0)
  })
})

describe('For wrong inputs', async () => {
  const { store } = createStore()
  const testComponent = createTestComponent(
    <Unlock onCorrectPinMatch={() => null} />,
    store
  )

  // These tests are only for wrong inputs, so this mock fn only returns a promise of false
  pins.comparePins = jest.fn(async (pin1, pin2) => Promise.resolve(false))

  it('Should Display Incorrect error message', async () => {
    clearPassword(testComponent.component)
    const numberElem = testComponent.component.find('#keypad-1').hostNodes()
    numberElem.simulate('click')
    numberElem.simulate('click')
    numberElem.simulate('click')
    numberElem.simulate('click')
    testComponent.component.update()

    setTimeout(() => {
      const errorElem = testComponent.component
        .find('#errorMsg')
        .hostNodes()
        .text()
      expect(errorElem).toBe('Incorrect pin. Please try again')
    }, 1000)
  })

  it('Should display the Last try message', async () => {
    await flushPromises()
    testComponent.component.update()
    const numberElem = testComponent.component.find('#keypad-1').hostNodes()
    numberElem.simulate('click')
    numberElem.simulate('click')
    numberElem.simulate('click')
    numberElem.simulate('click')

    await flushPromises()
    testComponent.component.update()

    clearPassword(testComponent.component)
    numberElem.simulate('click')
    numberElem.simulate('click')
    numberElem.simulate('click')
    numberElem.simulate('click')

    await flushPromises()
    testComponent.component.update()

    setTimeout(() => {
      const errorElem = testComponent.component
        .find('#errorMsg')
        .hostNodes()
        .text()
      expect(errorElem).toBe('Last Try')
    }, 1000)
  })

  it('Should display Locked Message', async () => {
    const numberElem = testComponent.component.find('#keypad-1').hostNodes()
    numberElem.simulate('click')
    numberElem.simulate('click')
    numberElem.simulate('click')
    numberElem.simulate('click')

    await flushPromises()
    testComponent.component.update()

    setTimeout(() => {
      const errorElem = testComponent.component
        .find('#errorMsg')
        .hostNodes()
        .text()
      expect(errorElem).toBe('Locked')
    }, 1000)
  })

  it('Should not accept correct pin while locked', async () => {
    clearPassword(testComponent.component)
    const numberElem = testComponent.component.find('#keypad-0').hostNodes()
    numberElem.simulate('click')
    numberElem.simulate('click')
    numberElem.simulate('click')
    numberElem.simulate('click')

    await flushPromises()
    testComponent.component.update()

    setTimeout(() => {
      const errorElem = testComponent.component
        .find('#errorMsg')
        .hostNodes()
        .text()
      expect(errorElem).toBe('Locked')
    }, 1000)
  })
})

describe('Logout Sequence', async () => {
  const { store } = createStore()
  const redirect = jest.fn()
  const testComponent = createTestComponent(
    <Unlock onCorrectPinMatch={() => redirect} />,
    store
  )

  it('Should Pop the Logout modal', () => {
    testComponent.component
      .find('#logout')
      .hostNodes()
      .simulate('click')
    testComponent.component.update()
    const modalIsDisplayed = testComponent.component
      .find('#logout_confirm')
      .hostNodes().length
    expect(modalIsDisplayed).toBe(1)
  })
})
