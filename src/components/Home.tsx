import Hero from "./Hero.tsx";
import DreamTeam from "./DreamTeam.tsx";
import FarGalaxy from "./FarGalaxy.tsx";
import {useContext, useEffect} from "react";
import {SwContext} from "../utils/context.ts";
import {useParams} from "react-router-dom";
import {characters, defaultHero} from "../utils/constants.ts";
import ErrorPage from "./ErrorPage.tsx";

const Home = () => {
    const {changeHero} = useContext(SwContext);
    const {heroId = defaultHero} = useParams();
    useEffect(() => {
        if (characters[heroId]) changeHero(heroId)
        else return;
    }, [heroId])
    return characters[heroId] ? (
            // className="clearfix"
            <main>
                <Hero/>
                <DreamTeam/>
                <FarGalaxy/>
            </main>
        )
        : <ErrorPage/>;
};

export default Home;