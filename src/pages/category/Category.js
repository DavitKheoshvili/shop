import React, { Component } from 'react'
import Header from '../../components/Header'
import StyledHeaderText from '../../components/styles/headerText/HeaderText.styled'
import ContentGrid from '../../components/ContentGrid'
import StyledCategory from '../../components/styles/category/Category.styled'

export default class Category extends Component {
  render() {
    return (
      <StyledCategory>
        <Header />
        <StyledHeaderText>Category name</StyledHeaderText>
        <ContentGrid></ContentGrid>
      </StyledCategory>
    )
  }
}
