import styled from 'styled-components'

const PageContainer = styled.div`
    width: 100vm;
    height: 100vh;
    background-color: #373737
`

const PageGridContainer = styled(PageContainer)`
    display: grid;
    grid-gap: 50px 100px;
    grid-template-columns: auto 35%;
    grid-template-rows: 50% 30% auto;
`

export { 
    PageContainer,
    PageGridContainer
}