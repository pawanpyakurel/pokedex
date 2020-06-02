// styles
import { colors } from "../../config/theme";
import styled from "styled-components";

const SpinnerWrapper = styled.div`
width: 100%;
height: 100vh;
/*background: ${colors.background};*/
display: flex;
justify-content: center;
align-items: center;
font-size: 20rem;
.Spinner {
    width: 8rem;
    height: 8rem;
    border-radius: 100%;
    border: 1rem solid #14192F;
    border-top-color: ${colors.red};
    border-bottom-color: ${colors.green};
    overflow: hidden;
    animation: spin 1s ease-in-out infinite;
}

@keyframes spin {
    to {
        -webkit-transform: rotate(360deg);
    }
}
`;

export {SpinnerWrapper};