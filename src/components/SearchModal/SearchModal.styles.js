// styles
import styled from "styled-components";
// import { colors } from "../config/theme"

const SearchModalWrapper = styled.div `
    margin: 0rem;
    padding: 0rem;
    display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    
`;

const ModalHeader = styled.div`
    padding: 1rem;

    display: flex;
    align-items: center;
    grid-template-columns: 1fr auto;
    grid-column-gap: 1rem;
    .ModalHeaderWrapper{
        margin-left: 1rem;
        cursor: pointer;
        color: #FFF;
    }
`;

export { SearchModalWrapper, ModalHeader}