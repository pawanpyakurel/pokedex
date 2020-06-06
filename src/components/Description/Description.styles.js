import { colors } from "../../config/theme";
import styled from "styled-components";

const DescriptionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 70vw;
    color: ${colors.text};
    font-size: 2rem;
    font-family: serif;
    padding: 1rem;

    @media (min-width: 900px) {
        width: 750px;
    }
   
    @media (max-width: 400px) {
        width: 100vw;
    }
`;

export { DescriptionWrapper}