import styled from 'styled-components'

export const StyledNavButton = styled.button`
background-color: white;

 color: ${props => props.color};
 padding: 0 16px;
 padding-bottom: 30px;
 font-weight: 600;
 font-size: 16px;
 border: 0;
 border-bottom: 2px solid ${props => props.borderColor};
 
 &:hover{
    cursor: pointer;
 }
 
`