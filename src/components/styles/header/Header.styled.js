import styled from 'styled-components'
export const StyledHeader = styled.header`
 background-color: ${({theme}) => theme.colors.header};
 padding-top: 28px;
 display: flex;
 position: sticky;
 top: 0;
 flex-direction: row;
 justify-content: space-between;
 .logo {
    cursor: pointer;
 }
 .navButtons{
    display: flex;
    flex-direction: row;
 }
 .dropDownMenu{
    display: none;
    color: rgba(94, 206, 123, 1);
    width: 41px;
    height: 41px
 }
 @media (max-width: 600px){
   .dropDownMenu{
      display: block;
   }

   .logo {
      margin-left: auto;
   }

 }
`