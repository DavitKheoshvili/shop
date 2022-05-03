import React, { Component } from 'react'
import StyledCurrency from './styles/currency/Currency.styled'

export default class Currency extends Component {
  render() {
    return (
      <StyledCurrency>
        <p>$ USD</p>
        <p>€ EUR</p>
        <p>¥ JPY</p>

      </StyledCurrency>
    )
  }
}
