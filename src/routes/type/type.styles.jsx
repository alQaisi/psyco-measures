import styled from "styled-components";

const color1="#486EF7";
const color2="#be8c0e";
const color3="#0588ac";
const color4="#08a55c";
const color5="#024F7B";

export const Back=styled.button`
    background-color:#ddd;
    border: 1px solid transparent;
    outline:none;
    border-radius:8px;
    cursor: pointer;
    :hover{
        color:#ddd !important;
        background-color: transparent !important;
        border: 1px solid #ddd;
    }
    position: absolute;
    font-family: 'Cairo', sans-serif;
    font-weight: 600;
    padding:5px 25px;
    font-size: 1rem;
    right:15px;
    top: 25px;
`;

export const Header=styled.header`
    &.one{
        background-color:${color1};
        ${Back}{
            color: ${color1};
        }
    }
    &.two{
        background-color:${color2};
        ${Back}{
            color: ${color2};
        }
    }
    &.three{
        background-color:${color3};
        ${Back}{
            color: ${color3};
        }
    }
    &.four{
        background-color:${color4};
        ${Back}{
            color: ${color4};
        }
    }
    &.five{
        background-color:${color5};
        ${Back}{
            color: ${color5};
        }
    }
    width: 100%;
    height: 350px;
    text-align: center;
    box-sizing: border-box;
    padding:100px 25px 25px;
    color: #ddd;
    font-family: 'Cairo', sans-serif;
    & h1{
        margin-block: 0;
    }
    &.en{
        font-family: 'Montserrat', sans-serif;
        ${Back}{
            font-family: 'Montserrat', sans-serif;
            right:unset;
            left: 15px;
        }
    }
    & span{
        position: absolute;
        top: 0;
        *{
            color:#ddd;
        }
    }
`;

export const ProgressBar=styled.span`
    display: block;
    position:absolute;
    bottom:0px;
    left: 0;
    width:100%;
    height:8px;
    background-color:#c9c9c9;
    & span{
        transition:width .25s ease-in-out;
        position: absolute;
        bottom:0;
        height:100%;
        width: 25%;
        background-color: #2670f8;
        &.ar{
            right: 0;
        }
        &.en{
            left: 0;
        }
    }
`;

export const Answer=styled.p`
    color:#4d4d4d;
    background-color:#e9e9e9c1;
    border:1px solid transparent;
    border-radius: 8px;
    font-family: 'Cairo', sans-serif;
    text-align: right;
    padding: 15px 25px;
    box-sizing: border-box;
    width: 95%;
    margin: 25px auto;
    font-size: 1.2rem;
    font-weight: 500;
    transition: all .25s ease-in-out;
    :hover,&.active{
        cursor: pointer;
        background-color: #487ff72e;
        border: 1px solid #486EF7;
        color: #092792;
    }
    @keyframes initialAnimate {
        from{
            opacity: 0;
        }to{
            opacity: 1;
        }
    }
    animation: initialAnimate .65s ease-in-out .15s 1 normal forwards;
`;

export const QuestionsContainer=styled.div`
    overflow: hidden;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius:12px;
    width:95%;
    max-width: 750px;
    margin: 0 auto 25px;
    position: relative;
    top:-110px;
    padding: 25px 15px 50px;
    box-sizing: border-box;
    color:#2a2a2a;
    text-align: right;
    font-family: 'Cairo', sans-serif;
    &.en,&.en ${Answer}{
        text-align: left;
        font-family: 'Montserrat', sans-serif;
    }
    h1{
        font-size: 1.75rem;
        margin-bottom:50px;
    }
    button{
        all: unset;
        text-transform: capitalize;
        font-size: 1.25rem;
        float:left;
        margin: 15px 25px -5px;
        color:#fff;
        background-color: #486EF7;
        padding: 13px 30px;
        border-radius: 11px;
        cursor: pointer;
        :hover{
            opacity: .85;
        }
    }
    &.en button{
        float: right;
    }
`;