import React, { Component } from 'react'
import { StyledNavButton } from './styles/button/NavButton.styled'
export default class Button extends Component {
  render() {
    return (
      <StyledNavButton color={this.props.color} borderColor={this.props.borderColor}>
        {this.props.text}
      </StyledNavButton>
    )
  }
}
