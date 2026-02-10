import {characters, defaultHero, starWarsInfo} from "../utils/constants.ts";
import {useContext, useEffect} from "react";
import {SwContext} from "../utils/context.ts";
import {useParams} from "react-router-dom";
import ErrorPage from "./ErrorPage.tsx";

const StarWars = () => {
    const {changeHero} = useContext(SwContext);
    const {heroId = defaultHero} = useParams();
    useEffect(() => {
        if (characters[heroId]) changeHero(heroId)
        else return;
    }, [heroId])
    return characters[heroId] ? (
        // <div className={'farGalaxy'}>
        <div className={`text-[2em] text-justify tracking-[0.2em] leading-normal p-1.5`}>
            {starWarsInfo}
        </div>
    ):<ErrorPage/>;
};

export default StarWars;