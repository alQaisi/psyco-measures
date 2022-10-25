import { useContext, useState, useEffect, Children } from 'react';
import { useParams,useNavigate,Navigate } from 'react-router';
import { useItemsContext } from '../../context/Items.context';
import { Header,Back,QuestionsContainer,ProgressBar,Answer } from './type.styles';
import { LangCont,LangIcon } from '../../components/container/container.styles';

const types=["sad","job","heart","good","brain"];

function Type(){
    const {currentItem,setLang,lang,questions}=useItemsContext();
    const [item,setItem]=useState();
    const [currentQuestion,setCurrentQuestion]=useState(0);
    const [userAnswers,setuserAnswers]=useState([]);
    const navigate=useNavigate();
    const {type}=useParams();

    useEffect(()=>{
        const newItem=currentItem(type)[0];
        setItem(newItem);
        //eslint-disable-next-line
    },[type,lang]);

    function setUserChoices(questionIndex,answerIndex){
        const userAnswer={answerIndex,ar:questions[questionIndex].answers["ar"][answerIndex],en:questions[questionIndex].answers["en"][answerIndex]}
        let newUserAnswers=[...userAnswers];
        newUserAnswers[questionIndex]=userAnswer;
        setuserAnswers(newUserAnswers);
    }

    if(!types.includes(type))
        return <Navigate to="/"/>

    if(!item)
        return <></>
        
    return (
        <>
        <Header className={`${item.num} ${lang}`}>
            <LangCont onClick={()=>setLang(lang==="ar"?"en":"ar")} className={`${lang}`}><LangIcon/>{lang==="ar"?"العربية":"English"}</LangCont>
            <h1>{ item.text }</h1>
            <Back onClick={()=>navigate("/")}>{ lang==="ar"?"الرجوع":"Back" }</Back>
        </Header>
        <QuestionsContainer className={lang}>
            <h1>{ questions[currentQuestion].questionTitle[lang] }</h1>
            { Children.toArray(questions[currentQuestion].answers[lang].map((answer,index)=><Answer onClick={()=>setUserChoices(currentQuestion,index)} className={userAnswers[currentQuestion]?.answerIndex===index?"active":""} >{answer}</Answer>)) }
            <ProgressBar>
                <span className={lang} style={{width:`${(currentQuestion+1)/questions.length*100}%`}}/>
            </ProgressBar>
            <button onClick={(userAnswers[currentQuestion] && currentQuestion!==questions.length-1 ) ? (()=>setCurrentQuestion(currentQuestion+1)):undefined}>{ lang==="ar"?"التالي":"next" }</button>
        </QuestionsContainer>
        </>
    );
}
export default Type;