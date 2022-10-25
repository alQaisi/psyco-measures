import { createContext,useState,useContext } from "react";

const ItemContext=createContext({});

const questions=[
    {questionTitle:{ar:"في عملي اشعر بأنني مرهق ذهنيا",en:"At work, I feel tired"},answers:{ar:["ابداً","نادراً","احياناً","غالبا","دائماً"],en:["never","rarely","sometimes","usually","always"]}},
    {questionTitle:{ar:"كل ما اقوم به في العمل يتطلب جهد عالي جداً",en:"Everything I do at work requires a lot of effort"},answers:{ar:["ابداً","نادراً","احياناً","غالبا","دائماً"],en:["never","rarely","sometimes","usually","always"]}},
    {questionTitle:{ar:"في عملي اشعر بأنني مرهق جسديا",en:"At work, I feel physically exhausted"},answers:{ar:["ابداً","نادراً","احياناً","غالبا","دائماً"],en:["never","rarely","sometimes","usually","always"]}},
    {questionTitle:{ar:"اعاني لاجد الحماس لعملي",en:"I struggle to find enthusiasm for my work"},answers:{ar:["ابداً","نادراً","احياناً","غالبا","دائماً"],en:["never","rarely","sometimes","usually","always"]}},
    {questionTitle:{ar:"في عملي اشعر بأنني مرهق ذهنيا",en:"At work, I feel tired"},answers:{ar:["ابداً","نادراً","احياناً","غالبا","دائماً"],en:["never","rarely","sometimes","usually","always"]}},
    {questionTitle:{ar:"كل ما اقوم به في العمل يتطلب جهد عالي جداً",en:"Everything I do at work requires a lot of effort"},answers:{ar:["ابداً","نادراً","احياناً","غالبا","دائماً"],en:["never","rarely","sometimes","usually","always"]}},
    {questionTitle:{ar:"في عملي اشعر بأنني مرهق جسديا",en:"At work, I feel physically exhausted"},answers:{ar:["ابداً","نادراً","احياناً","غالبا","دائماً"],en:["never","rarely","sometimes","usually","always"]}},
    {questionTitle:{ar:"اعاني لاجد الحماس لعملي",en:"I struggle to find enthusiasm for my work"},answers:{ar:["ابداً","نادراً","احياناً","غالبا","دائماً"],en:["never","rarely","sometimes","usually","always"]}},
];

const arItemsData=[
    {type:"job",num:"five",text:"مقياس الاحتراق الوظيفي",language:"ar"},
    {type:"good",num:"four",text:"مقياس تقدير الذات",language:"ar"},
    {type:"sad",num:"three",text:"مقياس الوسواس القهري",language:"ar"},
    {type:"brain",num:"two",text:"مقياس القلق",language:"ar"},
    {type:"heart",num:"one",text:"مقياس الاكتئاب",language:"ar"}
];

const enItemsData=["Job burnout","Self-esteem","Obsessive-compulsive disorder","Stress","Depression"]
    .map((text,index)=>({...arItemsData[index],text,language:"en"}));

export function ItemsProvider({children}){

    const [lang,setLang]=useState("en");
    const items=lang==="ar"?arItemsData:enItemsData;

    function currentItem(type){
        return items.filter(item=>item.type===type);
    }

    const value={lang,setLang,items,currentItem,questions};
    return(
        <ItemContext.Provider value={value}>{children}</ItemContext.Provider>
    );
}

export function useItemsContext(){
    const data=useContext(ItemContext);
    return data;
}