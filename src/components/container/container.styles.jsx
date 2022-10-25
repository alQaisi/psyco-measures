import styled from "styled-components";
import { MdLanguage } from "react-icons/md";

export const LangIcon=styled(MdLanguage)`
    font-size:1.45rem;
    position: relative;
    top: 1px;
    color: #2a2a2a;
`;
export const LangCont=styled.span`
    font-size: 1.35rem;
    display: block;
    cursor: pointer;
    position: relative;
    margin:25px 0 35px;
    width: fit-content;
    left:50%;
    transform: translateX(-50%);
    font-family: 'Cairo', sans-serif;
    &.en{
        font-family: 'Montserrat', sans-serif;
    }
    display: flex;
    align-items: center;
    gap: 10px;
`;

export const CardsContainer=styled.div`
    display: flex;
    flex-direction: row;
    gap: 25px;
    align-items:stretch;
    align-content:center;
    justify-content: center;
    flex-wrap: wrap;
    width:95%;
    margin:45px auto 45px;
    width: 100%;
    max-width: 100vw;
    min-height:75vh;
`;