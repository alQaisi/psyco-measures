import Card from "../card/card.component";
import { Children } from "react";
import { CardsContainer,LangCont,LangIcon } from "./container.styles";
import { useItemsContext } from "../../context/Items.context";
import { useNavigate } from 'react-router';

function Container(){
    const navigate=useNavigate();
    const {items,setLang,lang}=useItemsContext();
    const cards=items && Children.toArray(items.map(item=>(
        <Card {...item} handleClick={()=>navigate(`/${item.type}`)}/>
    )));
    return(
        <>
        <LangCont onClick={()=>setLang(lang==="ar"?"en":"ar")} className={`${lang}`}><LangIcon/>{lang==="ar"?"العربية":"English"}</LangCont>
        <CardsContainer className="container">
            {cards}
        </CardsContainer>
        </>
    );
}
export default Container;