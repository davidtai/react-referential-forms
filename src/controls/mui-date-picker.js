import React from 'react'

import control from './control'
import { BaseMuiText } from './mui-text'

import { InlineDatePicker, MuiPickersContextConsumer } from 'material-ui-pickers'
import { defaultFormat, renderUIDate, renderJSONDate } from '../utils/date'
export { MuiPickersUtilsProvider } from 'material-ui-pickers'

import moment from 'moment-timezone'

@control
export default class MuiDatePicker extends BaseMuiText{
  change = (e) => {
    if (this.props.onChange) {
      let v = renderJSONDate(e)

      this.props.onChange(v)
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
      ...props
    } = this.props

    props.onChange = this.change

    value = value || defaultValue || moment()

    let helper = instructions

    if(showErrors && errorMessage) {
      helper = errorMessage
    }

    return <MuiPickersContextConsumer>
      { (utils) => {
        return <InlineDatePicker
          { ...props }
          value={ moment(value) }
          keyboard
          utils={ utils }
          onChange={ this.change }
          format={ defaultFormat() }
          mask={ [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/] }
        />
      } }
    </ MuiPickersContextConsumer>
  }
}
