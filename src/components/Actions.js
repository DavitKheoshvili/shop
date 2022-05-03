import React, { Component } from 'react'
import { StyledActions }from './styles/actions/Actions.styled'
import Button from './Button'
import currency from '../assets/Group 1.svg'
import shop from '../assets/Vector.svg'
import Currency from './Currency'
import Bag from './Bag'

export default class Actions extends Component {
  render() {
    return (
      <StyledActions>
            <img className='currency' src={currency} />
            <img className='shop' src={shop} />
        <Currency />
        <Bag />
      </StyledActions>
    )
  }
}
