import React, { Component } from 'react'
import StyledBagItem from './styles/bagItem/BagItem.styled'
import {StyledSizeQuantityBtn} from './styles/button/Button.styled'

export default class BagItem extends Component {
  render() {
    return (
      <StyledBagItem>
        <p className='itemName'>Apollo
Running Short</p>
        <h4 className='itemPrice'>{'$'}{'50.00'}</h4>
        <div className='sizeContainer'>
          <StyledSizeQuantityBtn>S</StyledSizeQuantityBtn>
        </div>
      </StyledBagItem>
    )
  }
}
