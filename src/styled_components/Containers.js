import styled from 'styled-components'

const PageContainer = styled.div`
    width: 100vm;
    height: 100vh;
    background-color: #F8F9FC
`

const PageGridContainer = styled(PageContainer)`
    display: grid;
    grid-gap: 50px 100px;
    grid-template-columns: auto 40%;
    grid-template-rows: 50% 25% auto;
    grid-template-areas:
        'about      skills'
        'contact    skills'
        'cv         skills'
        ;
`

const GridItem = styled.div`
    padding: 20px;
    grid-area: ${props => 
        props.about ? "about" 
        : props.contact ? "contact" 
        : props.cv ? "cv" 
        : "skills" }
        ;
`

export { 
    PageContainer,
    PageGridContainer,
    GridItem
}