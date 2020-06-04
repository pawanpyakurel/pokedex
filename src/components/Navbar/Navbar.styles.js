import styled from "styled-components";
import { colors} from "../../config/theme"

const NavbarWrapper = styled.div`
    background-color: ${colors.darkBackground};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 3rem;
    position: fixed;
    right: 0;
    left: 0;
    top: 0;
    color: ${colors.text};
    z-index: 2;
    transition: all 1s ease-in-out;
    box-shadow: 0.1rem 0.2rem 1rem #000000;

    .menu_icon{
        &:hover {
            cursor: pointer;
            transform: scale(1.05);
        }
    }
    img{
        width: 5rem;
        height: auto;
    }
    svg{
        &:hover {
            cursor: pointer;
            transform: scale(1.05);
        }
    }

`;

export { NavbarWrapper }