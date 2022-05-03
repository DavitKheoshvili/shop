import React, { Component } from 'react'
import BagItem from './BagItem'
import StyledBag from './styles/bag/Bag.styled'

export default class Bag extends Component {
  render() {
    return (
      <StyledBag>
        <h4>My Bag.<span> {'2'} items</span></h4> 
        <BagItem />
      </StyledBag>
    )
  }
}
