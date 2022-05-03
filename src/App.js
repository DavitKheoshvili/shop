import { ThemeProvider } from "styled-components"
import React, { Component} from 'react'
import Header from "./components/Header"
import GlobalStyles from "./components/styles/Global.styled"
import Category from './pages/category/Category'

const theme = {
  colors: {
    header: 'white',
    body: 'green',
    footer: 'blue'
  }
}

export default class App extends Component{
  render() {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Category />
      </ThemeProvider>
    ) 
  }
  
}

 
