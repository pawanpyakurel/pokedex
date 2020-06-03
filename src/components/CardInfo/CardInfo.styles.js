import { colors } from "../../config/theme";
import styled from "styled-components";

const CardInfoWrapper = styled.div`
    margin: 0rem;
    padding: 0.2rem;
    display: flex;
    justify-content: center;
    text-align: center;

    .cardInfoContent{
        height: 3rem;
        text-transform: capitalize;

        h1{
            font-size: 2rem;
            font-size: 1.8rem;
        }
    }
`;

export { CardInfoWrapper }