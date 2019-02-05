import React from 'react'

import control from './control'
import { BaseMuiText } from './mui-text'

import { getLibrary } from '../library'

let countryOpts

export default @control class MuiCountry extends BaseMuiText{
  static defaultProps = {
    type: 'text',
    autoComplete: 'new-password',
    autoFocus: undefined,
    disabled: undefined,
    maxLength: undefined,
    readOnly: undefined,
    placeholder: '',
    label: '',
    instructions: '',
    wrap: '',
    spellCheck: '',
    rows: undefined,
    cols: undefined,
    showErrors: true,
    options: undefined,
    select: true,
  }

  constructor(props) {
    super(props)

    let { countries } = getLibrary()

    this.options = countryOpts || {}

    if (countryOpts) {
      return
    }

    countries = countries.sort((a, b) => {
      if (a.name < b.name) { return -1 }
      if (a.name > b.name) { return 1 }
      return 0
    })

    for (let k in countries) {
      let country = countries[k]

      this.options[country.code.toUpperCase()] = country.name
    }

    countryOpts = this.options
  }
}

