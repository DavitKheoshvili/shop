import styled from 'styled-components'

const StyledCard = styled.div`
    box-sizing: border-box;
    min-width: 240px;
    display: flex;
    flex-direction: column;
    padding: 16px;

    .itemNamePrice{

    }
    .itemDetails {
        display: flex;
    }
    .cartIcon {
        margin-top: -26px;
        width: 52px;
        height: 52px;
        margin-left: auto;
        margin-right: 15px;
        display: none;
    }
    .text {
        color: rgba(29, 31, 34, 1);
        line-height: 28.8px;
        margin-top: 24px;
        font-weight: 300;
        font-size: 18px;
        
    }
    .price {
        color: rgba(29, 31, 34, 1);
        line-height: 28.8px;
        font-weight: 500;
        font-size: 18px;
    }
    &:hover{
        box-shadow: 0px 4px 35px 0px rgba(168, 172, 176, 0.19);
        img {
            cursor: pointer;
        }
        .cartIcon{
            display: block;
            cursor: pointer;
        }
    }
   
`
export default StyledCard