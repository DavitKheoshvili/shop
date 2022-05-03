import React, { Component } from 'react'
import StyledCard from './styles/card/Card.styled'
import image from '../assets/Image.svg'
import cartIcon from '../assets/Common.svg'


export default class Card extends Component {
  render() {
    return (
      <StyledCard>
        <img src={image}></img>
        <div className='itemDetails'>
            <div className='itemNamePrice'>
                <p className='text'>{this.props.text}</p>
                <p className='price'>${this.props.price}</p>
            </div>
            
            <img src={cartIcon} className="cartIcon"></img>
        </div>
        
      </StyledCard>
    )
  }
}
