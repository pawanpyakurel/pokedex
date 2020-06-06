import { colors } from "../../config/theme";
import styled from "styled-components";

const ProgressBarWrapper = styled.div`
    padding: 0rem;
    width:35rem;


    .progressWrapper{
        padding: 0.5rem 0rem;
        width:100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .StatsTitle{
        font-size: 1rem;
        line-height: 2rem;
        color: ${colors.text}
    }
    @media (max-width: 400px) {
        width: 100vw;

    }
`;

const ProgressMeter = styled.div`
    width: 70%;
    height: 20px; 
    position: relative;
    background: ${colors.darkBackground};
    -moz-border-radius: 25px;
    -webkit-border-radius: 25px;
    border-radius: 25px;
    padding: 10px;
    box-shadow: inset 0 -1px 1px rgba(255,255,255,0.3);

    .ValueWrapper{
        height: 100%;
        width: 100%;
        top: -3px;
        position: absolute;
        background: transparent;
        z-index: 1;
        text-align: center;
        color: ${colors.text}
        
    }
    .ProgressStatus{
        width :${props => props.progressValue>= 100? `100`: props.progressValue}%;
        display: block;
        height: 100%;
        border-top-right-radius: ${props => props.progressValue>=100? `20px`: `8px`};
        border-bottom-right-radius:${props => props.progressValue>=100? `20px`: `8px`};
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;
        background-color: #${props => props.themeColor};
        box-shadow: 
          inset 0 2px 9px  rgba(255,255,255,0.3),
          inset 0 -2px 6px rgba(0,0,0,0.4);
        overflow: hidden;
        position: absolute;
        top: 0;
        left: 0;
        overflow: hidden;
    }

    @media (max-width: 400px) {
        width: 100vw;
    }
`;

export { ProgressBarWrapper, ProgressMeter}