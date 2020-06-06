// styles
import { colors } from "../../config/theme";
import styled from "styled-components";

const CardWrapper = styled.div `
    margin: 1.5rem;

    padding: 0rem;

    height: auto;
    width: 15rem;
    border-radius: 0.7rem;
    color: ${colors.text};
    background: ${colors.darkBackground};
    
    box-shadow: 1px 1px 5px 1px #000;

    &:hover {
        cursor: pointer;
        transform: scale(1.02);
        text-decoration-line: underline; 
        text-decoration-color: ${colors.darkBackground};
    }
    .card_content{
        // background : #0b7d03;
        background-image: linear-gradient(90deg,#0b7d03,#035c7d);
        height: auto;
        width: 100%;
        border-radius: 0.7rem;
    }
    
    .card_image{
        background: url(${props => props.pokemon_image});
        height: 15rem;
        width: 100%;
        background-size: cover;
        background-position: center;
        border-radius: 0rem;
        border-top-left-radius : 0.7rem;
        border-top-right-radius : 0.7rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .card_info{
        background: ${colors.darkBackground};
        border-bottom-right-radius: 0.7rem;
        border-bottom-left-radius: 0.7rem;
        text-decoration-line: underline; 
        text-decoration-color: ${colors.darkBackground};
    }

`;

export { CardWrapper}