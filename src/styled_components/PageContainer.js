import styled from 'styled-components'

export default styled.div`
    width: 100vm;
    height: 100vh;
    background-color: #373737
    display:  ${props => props.grid ? "grid" : "block"}
`