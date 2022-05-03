import React, { Component } from 'react'
import StyledNav from './styles/nav/Nav.styled'
import Button from './Button'

export default class Nav extends Component {
  render() {
    return (
      <StyledNav>
          <Button  color='rgba(94, 206, 123, 1)' text='WOMEN' borderColor='rgba(94, 206, 123, 1)'/>
          <Button  color='rgba(29, 31, 34, 1)' text='MEN' borderColor='rgba(255, 255, 255, 1)'/>
          <Button  color='rgba(29, 31, 34, 1)' text='KIDS' borderColor='rgba(255, 255, 255, 1)'/>
      </StyledNav>
    )
  }
}
