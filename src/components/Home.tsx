import Hero from "./Hero.tsx";
import DreamTeam from "./DreamTeam.tsx";
import FarGalaxy from "./FarGalaxy.tsx";
import {withErrorPage} from "../hoc/withErrorPage.tsx";


export const Home = () => {
    // const {changeHero} = useContext(SwContext);
    // const {heroId = defaultHero} = useParams();
    // useEffect(() => {
    //     if (characters[heroId]) changeHero(heroId)
    //     else return;
    // }, [heroId])
    // return characters[heroId] ? (
    return  (
            // className="clearfix"
            <main>
                <Hero/>
                <DreamTeam/>
                <FarGalaxy/>
            </main>
        )
        // : <ErrorPage/>;
}

export default withErrorPage(Home)