import {useContext} from "react";
import {SwContext} from "../utils/context.ts";
import {characters, defaultHero} from "../utils/constants.ts";

const Hero = () => {
        const {hero} = useContext(SwContext);
        const heroImage = characters[hero]? characters[hero].img: characters[defaultHero].img;
    return (
        <section className={`float-left w-1/4 mr-4`}>
            <img className={`w-full shadow-hero`} src={heroImage} alt="Hero"/>
        </section>
    );
};

export default Hero;