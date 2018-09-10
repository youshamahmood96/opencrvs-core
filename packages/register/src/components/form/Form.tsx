import * as React from 'react'
import { withFormik, FormikProps } from 'formik'
import { isEqual } from 'lodash'
import { InjectedIntlProps, injectIntl } from 'react-intl'
import { internationaliseFieldObject } from '../../forms/utils'
import {
  InputField,
  TextInput,
  Select,
  DateField,
  TextArea,
  ISelectProps,
  IDateFieldProps,
  ITextInputProps,
  IInputFieldProps,
  RadioGroup,
  SubSectionDivider
} from '@opencrvs/components/lib/forms'
import styled from '../../styled-components'
import {
  IFormField,
  Ii18nFormField,
  Ii18nSelectOption,
  IFormSectionData,
  IConditional
} from '../../forms'
import { Omit } from '../../utils'

export const FormItem = styled.div`
  margin-bottom: 2em;
`

const FormSectionTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.lightFont};
  color: ${({ theme }) => theme.colors.copy};
`

const getConditionalsToRun = (
  field: Ii18nFormField,
  values: IFormSectionData
): string[] => {
  const conditionalsToRun: string[] = []
  if (field.conditionals) {
    field.conditionals.forEach((conditional: IConditional) => {
      /* tslint:disable-next-line: no-eval */
      if (eval(conditional.expression)) {
        conditionalsToRun.push(conditional.action)
      }
    })
  }
  return conditionalsToRun
}

type InputProps = ISelectProps | ITextInputProps | IDateFieldProps

type GeneratedInputFieldProps = {
  field: Ii18nFormField
  values: IFormSectionData
  onChange: (e: React.ChangeEvent<any>) => void
  onGetDynamicSelectOptions: (
    field: Ii18nFormField,
    values: IFormSectionData
  ) => Ii18nSelectOption[]
  onSetFieldValue: (name: string, value: string) => void
} & Omit<IInputFieldProps, 'id'> &
  InputProps

function GeneratedInputField({
  field,
  values,
  onChange,
  onSetFieldValue,
  onGetDynamicSelectOptions,
  ...props
}: GeneratedInputFieldProps) {
  const conditionalsToRun: string[] = getConditionalsToRun(field, values)
  if (!conditionalsToRun.includes('hide')) {
    if (field.type === 'select') {
      const dynamicSelectOptions: Ii18nSelectOption[] = onGetDynamicSelectOptions(
        field,
        values
      )
      if (dynamicSelectOptions && dynamicSelectOptions.length) {
        return (
          <InputField
            component={Select}
            id={field.name}
            onChange={(value: string) => onSetFieldValue(field.name, value)}
            options={dynamicSelectOptions}
            label={field.label}
            name={field.name}
            required={field.required}
            {...props}
          />
        )
      } else {
        return (
          <InputField
            component={Select}
            id={field.name}
            onChange={(value: string) => onSetFieldValue(field.name, value)}
            {...field}
            {...props}
          />
        )
      }
    }
    if (field.type === 'radioGroup') {
      return (
        <InputField
          component={RadioGroup}
          id={field.name}
          onChange={(value: string) => onSetFieldValue(field.name, value)}
          {...field}
          {...props}
        />
      )
    }

    if (field.type === 'date') {
      return (
        <InputField
          component={DateField}
          onChange={(value: string) => onSetFieldValue(field.name, value)}
          id={field.name}
          {...field}
          {...props}
        />
      )
    }
    if (field.type === 'textarea') {
      return (
        <InputField
          component={TextArea}
          id={field.name}
          onChange={onChange}
          {...field}
          {...props}
        />
      )
    }
    if (field.type === 'textarea') {
      return (
        <InputField
          component={TextArea}
          id={field.name}
          onChange={onChange}
          {...field}
          {...props}
        />
      )
    }
    if (field.type === 'subSection') {
      return (
        <SubSectionDivider
          key={`${field.name}`}
          label={field.label}
          {...field}
          {...props}
        />
      )
    }

    return (
      <InputField
        component={TextInput}
        id={field.name}
        onChange={onChange}
        {...field}
        {...props}
      />
    )
  } else {
    return null
  }
}

const fieldsToValues = (fields: IFormField[]) =>
  fields.reduce(
    (memo, field) => ({ ...memo, [field.name]: field.initialValue }),
    {}
  )

interface IFormSectionProps {
  fields: IFormField[]
  title: string
  id: string
  onChange: (values: IFormSectionData) => void
  onGetDynamicSelectOptions: (
    field: Ii18nFormField,
    values: IFormSectionData
  ) => Ii18nSelectOption[]
}

type Props = IFormSectionProps &
  FormikProps<IFormSectionData> &
  InjectedIntlProps

class FormSectionComponent extends React.Component<Props> {
  componentWillReceiveProps(nextProps: Props) {
    if (!isEqual(nextProps.values, this.props.values)) {
      this.props.onChange(nextProps.values)
    }
  }
  render() {
    const {
      handleSubmit,
      handleChange,
      handleBlur,
      values,
      fields,
      setFieldValue,
      onGetDynamicSelectOptions,
      id,
      intl,
      title
    } = this.props

    /*
     * HACK
     *
     * No idea why, but when "fields" prop is changed from outside,
     * "values" still reflect the old version for one render.
     *
     * This causes React to throw an error. You can see this happening by doing:
     *
     * if (fields.length > Object.keys(values).length) {
     *   console.log({ fields, values })
     * }
     */
    const fieldsWithValuesDefined = fields.filter(
      field => values[field.name] !== undefined
    )
    return (
      <section>
        <FormSectionTitle id={`form_section_title_${id}`}>
          {title}
        </FormSectionTitle>
        <form onSubmit={handleSubmit}>
          {fieldsWithValuesDefined.map(field => {
            return (
              <FormItem key={`${field.name}`}>
                <GeneratedInputField
                  field={internationaliseFieldObject(intl, field)}
                  onBlur={handleBlur}
                  values={values}
                  onChange={handleChange}
                  onSetFieldValue={setFieldValue}
                  onGetDynamicSelectOptions={onGetDynamicSelectOptions}
                  value={values[field.name]}
                />
              </FormItem>
            )
          })}
        </form>
      </section>
    )
  }
}

export const Form = withFormik<IFormSectionProps, IFormSectionData>({
  enableReinitialize: true,
  mapPropsToValues: props => fieldsToValues(props.fields),
  handleSubmit: values => {
    console.log(values)
  }
})(injectIntl(FormSectionComponent))
