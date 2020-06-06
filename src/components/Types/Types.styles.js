// styles
import { colors } from "../../config/theme";
import styled from "styled-components";

const TypesWrapper = styled.div`
    height: auto;
    width: 15rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin: 1rem 1.5rem;

    .BadgeWrapper{
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .TypeBadge{
        color: ${colors.text};
        background-color: rgb(147, 69, 148);
        color: white;
        width: 45%;
        height: 3rem;
        border-radius: 0.5rem;
        text-align: center;
        box-shadow: 0px 0px 5px 0px #000;
    }
`;

export {TypesWrapper};