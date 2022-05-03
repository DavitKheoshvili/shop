import React, { Component } from 'react'
import StyledContentGrid from './styles/contentGrid/ContentGrid.styled'
import Card from './Card'

export default class ContentGrid extends Component {
  render() {
    return (
      <StyledContentGrid>
        <Card text="Apollo Running Short" price="50.00"/>
        <Card text="Apollo Running Short" price="50.00"/>
        <Card text="Apollo Running Short" price="50.00"/>
        
      </StyledContentGrid>
    )
  }
}
