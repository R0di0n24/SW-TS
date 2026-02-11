import {type ComponentType, useContext, useEffect} from "react";
import {characters, defaultHero} from "../utils/constants.ts";
import ErrorPage from "../components/ErrorPage.tsx";
import {SwContext} from "../utils/context.ts";
import {useParams} from "react-router-dom";

export const withErrorPage = (PageComponent: ComponentType) => (props:object) =>{
    const {changeHero} = useContext(SwContext);
    const {heroId = defaultHero} = useParams();

        useEffect(() => {
        if (characters[heroId]) {changeHero(heroId);}
    }, [heroId, changeHero])
    return characters[heroId] ? (
        <PageComponent {...props}/>
    ) : <ErrorPage/>
};

