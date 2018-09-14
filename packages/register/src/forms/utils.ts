import {
  IFormField,
  Ii18nFormField,
  Ii18nSelectOption,
  ISelectOption,
  IConditionals,
  IFormSectionData,
  IConditional
} from './'
import { InjectedIntl } from 'react-intl'

export const internationaliseFieldObject = (
  intl: InjectedIntl,
  field: IFormField
): Ii18nFormField => {
  return {
    ...field,
    label: intl.formatMessage(field.label),
    options: field.options
      ? internationaliseOptions(intl, field.options)
      : undefined
  } as Ii18nFormField
}

export const internationaliseOptions = (
  intl: InjectedIntl,
  options: ISelectOption[]
): Ii18nSelectOption[] => {
  return options.map(opt => {
    return {
      ...opt,
      label: intl.formatMessage(opt.label)
    } as Ii18nSelectOption
  })
}

export const getConditionalActionsForField = (
  field: IFormField,
  values: IFormSectionData
): string[] => {
  if (!field.conditionals) {
    return []
  }
  return field.conditionals
    .filter(conditional =>
      /* tslint:disable-next-line: no-eval */
      eval(conditional.expression)
    )
    .map((conditional: IConditional) => conditional.action)
}

export const conditionals: IConditionals = {
  fathersDetailsExist: {
    action: 'hide',
    expression: '!values.fathersDetailsExist'
  },
  permanentAddressSameAsMother: {
    action: 'hide',
    expression: 'values.permanentAddressSameAsMother'
  },
  addressSameAsMother: {
    action: 'hide',
    expression: 'values.addressSameAsMother'
  },
  countryPermanent: {
    action: 'hide',
    expression: '!values.countryPermanent'
  },
  statePermanent: {
    action: 'hide',
    expression: '!values.statePermanent'
  },
  districtPermanent: {
    action: 'hide',
    expression: '!values.districtPermanent'
  },
  addressLine4Permanent: {
    action: 'hide',
    expression: '!values.addressLine4Permanent'
  },
  addressLine3Options1Permanent: {
    action: 'hide',
    expression: '!values.addressLine3Options1Permanent'
  },
  country: {
    action: 'hide',
    expression: '!values.country'
  },
  state: {
    action: 'hide',
    expression: '!values.state'
  },
  district: {
    action: 'hide',
    expression: '!values.district'
  },
  addressLine4: {
    action: 'hide',
    expression: '!values.addressLine4'
  },
  addressLine3Options1: {
    action: 'hide',
    expression: '!values.addressLine3Options1'
  }
}
