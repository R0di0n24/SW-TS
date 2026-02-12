import {type ComponentType, useContext, useEffect} from "react";
import {characters, defaultHero} from "../utils/constants.ts";
import ErrorPage from "../components/ErrorPage.tsx";
import {SwContext} from "../utils/context.ts";
import {useParams} from "react-router-dom";


export const withErrorPage = <T extends object>(PageComponent: ComponentType<T>) => (props: T) => {
    const {changeHero} = useContext(SwContext);
    const {heroId = defaultHero} = useParams();

    useEffect(() => {
        if (characters[heroId]) {changeHero(heroId);}
        else {changeHero('Error');}
    }, [heroId, changeHero])
    return characters[heroId] ? (
        <PageComponent heroId={heroId} {...props}/>
    ) : <ErrorPage/>
};

