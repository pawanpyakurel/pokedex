import styled from "styled-components";
import { colors} from "../../config/theme";

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
            font-size: 1.8rem;
        }
    }
    .item-title {
        text-transform: capitalize !important;
        font-size: 1.8rem;
        font-weight: bolder;
        margin-bottom: 0;
        display: -webkit-flex;
        color: ${colors.text};
        text-transform: none;
        white-space: nowrap;
        margin-left: 0rem;
      }
`;

export { CardInfoWrapper }