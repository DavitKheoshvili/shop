import styled from 'styled-components'

const StyledContentGrid = styled.div`
    margin-top: 85px;
    display: grid;
    grid-template-columns: repeat(3, 30%);
    grid-gap: 5%;
    @media (max-width: 850px) {
        grid-template-columns: repeat(2, 47.5%);
    }
    @media (max-width: 600px) {
        grid-template-columns: repeat(1, 100%);
    }
`
export default StyledContentGrid