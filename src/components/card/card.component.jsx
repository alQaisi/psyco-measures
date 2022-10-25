import { CardCont,CardHead,Right,Left,Heart,Brain,Sad,Good,Job,Text } from "./card.styles";

function Card({type,num,text,language,handleClick}){
    const types={"heart":<Heart/>,"brain":<Brain/>,"sad":<Sad/>,"good":<Good/>,"job":<Job/>}
    return(
        <CardCont className={`${language} ${num}`} onClick={handleClick}>
            <CardHead>
                <Left/>
                {types[type]}
                <Right/>
            </CardHead>
            <Text>{text}</Text>
        </CardCont>
    );
}
export default Card;