// styles
import styled from "styled-components";
import { colors } from "../../config/theme";

const DetailsHeader = styled.div`
    padding: 1rem;
    display: flex;
    align-items: center;
    position: fixed;
    grid-template-columns: 1fr auto;
    grid-column-gap: 1rem;
    .DetailHeaderWrapper{
        cursor: pointer;
        color: #FFF;
    }
`;

const DetailsWrapper = styled.div `
    background: ${colors.background};
    z-index:3;
    top: 0;
    position: fixed;
    width: 100%;
    height: 100%;

    .DetailsBody{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }
   .DetailsBodyWrapper{ 
        margin-top: 6rem;
        padding: 0rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: ${colors.backgroundDark};
        padding: 0rem 2rem 2rem 2rem;
    }

    .PokemonName{
        width: 100%;
        color: ${colors.text};
        text-align: center;
        font-size: 4rem;
        text-transform: capitalize;
        font-weight: bold;
        padding-bottom: 1rem;
        justify-content: center;
        text-shadow: 2px 2px #092626;
    }

    .PokemonInfo{
        display: flex;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
        width: 100%;
    }
    .CardContentWrapper{
        display: flex;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: space-around;
        width: auto%;
    }

    @media (min-width: 900px) {
        .PokemonInfo{
            width: 900px;
        }
    }
    @media (max-width: 400px) {
        .PokemonInfo{
            width: 100vw;
        }
    }
    
`;


export { DetailsWrapper, DetailsHeader}