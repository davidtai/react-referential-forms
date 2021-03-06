import React from 'react'

import control from './control'
import { BaseMuiText } from './mui-text'

import TextField from '@material-ui/core/TextField'
import MaskedInput from 'react-text-mask'

function TextMaskCustom(props) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
      placeholderChar={'\u2000'}
      showMask
    />
  );
}

@control
export default class MuiPhone extends BaseMuiText{
  change = (e) => {
    if (e && e.target && e.target.value) {
      e = parseInt(e.target.value.replace(/[^0-9]+/g, ''), 10)
    }

    if (this.props.onChange) {
      this.props.onChange(e)
    }
  }

  render() {
    let {
      data,
      emitter,
      showErrors,
      scrollToError,
      value,
      defaultValue,
      valid,
      errorMessage,
      middleware,
      instructions,
      InputProps,
      forceNewValue,
      ...props
    } = this.props

    props.onChange = this.change

    value = value || defaultValue || ""

    let helper = instructions

    if(showErrors && errorMessage) {
      helper = errorMessage
    }

    if (!InputProps) {
      InputProps = { onChange: this.change }
    }
    InputProps.inputComponent = TextMaskCustom

    return pug`TextField(
      ...props
      defaultValue=value
      value=forceNewValue ? value : undefined
      helperText=helper
      error=!!errorMessage
      InputProps=InputProps
      InputLabelProps={ shrink: true }
    )`
  }
}

