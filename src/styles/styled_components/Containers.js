import styled from 'styled-components'

const PageContainer = styled.div`
    width: 100vm;
    height: 100vh;
`

const PageFlexContainer = styled(PageContainer)`
    display: flex;
    justify-content: center;
    align-items: ${props => 
        props.left ? "flex-start"
        : props.right ? "flex-end"
        : "center"
    };
    flex-direction: column;
    text-align: ${props => 
        props.left ? "left"
        : props.right ? "right"
        : "center"
    };
`

const PageGridContainer = styled(PageContainer)`
    display: grid;
    grid-gap: 50px 100px;
    grid-template-columns: auto 40%;
    grid-template-rows: 65% auto;
    grid-template-areas:
        'about      skills'
        'contact    skills'
        ;
`

const GridItem = styled.div`
    padding: 20px;
    grid-area: ${props => 
        props.about ? "about" 
        : props.contact ? "contact" 
        : "skills" }
        ;
`

export { 
    PageContainer,
    PageFlexContainer,
    PageGridContainer,
    GridItem
}