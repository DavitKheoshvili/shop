import React, { Component } from 'react'
import { StyledHeader } from './styles/header/Header.styled'
import logo from '../assets/a-logo.svg'
import Actions from './Actions'
import {AiOutlineMenu} from 'react-icons/ai'
import Nav from './Nav'
export default class Header extends Component {
  render() {
    return (
      <StyledHeader >
        <AiOutlineMenu className='dropDownMenu'></AiOutlineMenu>
        <Nav className='nav'>
        </Nav>
        
        <img className='logo' src={logo}></img>
        <Actions />
        
      </StyledHeader>
    )
  }
}
