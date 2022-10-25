import { AiOutlineHeart } from "react-icons/ai";
import { BiBrain,BiBriefcase,BiChevronLeft,BiChevronRight } from "react-icons/bi";
import { RiEmotionSadLine } from "react-icons/ri";
import { GrStatusGood } from "react-icons/gr";
import styled,{ css } from "styled-components";

const color1="#486EF7";
const color2="#be8c0e";
const color3="#0588ac";
const color4="#08a55c";
const color5="#024F7B";

const IconStyles=css`
    color:#eee;
    font-size:1.65rem;
    & *{
        stroke:#eee;
    }
`;

export const Heart=styled(AiOutlineHeart)`
    ${IconStyles}
`;
export const Brain=styled(BiBrain)`
    ${IconStyles}
`;
export const Sad=styled(RiEmotionSadLine)`
    ${IconStyles}
`;
export const Good=styled(GrStatusGood)`
    ${IconStyles}
`;
export const Job=styled(BiBriefcase)`
    ${IconStyles}
`;
export const Left=styled(BiChevronLeft)`
    font-size: 1.75rem;
`;
export const Right=styled(BiChevronRight)`
    font-size: 1.75rem;
`;

export const CardHead=styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Text=styled.p`
    color:#eee;
    font-size: 1rem;
    font-family: 'Cairo', sans-serif;
    font-weight:700;
    line-height: 1.5rem;
`;

export const CardCont=styled.div`
    &.one{
        background-color:${color1};
        &:hover{
            border: 1px solid ${color1};
            *{
                color:${color1};
                stroke: ${color1};
            }
        }
    }
    &.two{
        background-color:${color2};
        &:hover{
            border: 1px solid ${color2};
            *{
                color:${color2};
                stroke: ${color2};
            }
        }
    }
    &.three{
        background-color:${color3};
        &:hover{
            border: 1px solid ${color3};
            *{
                color:${color3};
                stroke: ${color3};
            }
        }
    }
    &.four{
        background-color:${color4};
        &:hover{
            border: 1px solid ${color4};
            *{
                color:${color4};
                stroke: ${color4};
            }
        }
    }
    &.five{
        background-color:${color5};
        &:hover{
            border: 1px solid ${color5};
            *{
                color:${color5};
                stroke: ${color5};
            }
        }
    }
    :hover{
        background-color: transparent;
        cursor: pointer;
    }
    transition: all .25s ease-in-out;
    border: 1px solid transparent;
    border-radius: 7px;
    color:#fff;
    width: 100%;
    max-width:185px;
    height:115px;
    text-align: right;
    padding:25px 15px 5px;
    ${Left}{
        display: initial;
    }
    ${Right}{
        display:none;
    }
    &.en{
        text-align: left;
        ${Left}{
            display: none;
        }
        ${Right}{
            display:initial;
        }
        ${Text}{
            font-family: 'Montserrat', sans-serif;
        }
    }
`;