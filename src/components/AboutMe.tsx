import {useEffect, useState} from "react";
import {characters, defaultHero, period_month} from "../utils/constants.ts";
import type {HeroInfo} from "../utils/types";
import {useParams} from "react-router-dom";
import {withErrorPage} from "../hoc/withErrorPage.tsx";


export const AboutMe = () => {
    const [hero, setHero] = useState<HeroInfo>();
    const {heroId = defaultHero} = useParams();
    // const {changeHero} = useContext<SWContextInterface>(SwContext);
    useEffect(() => {
        // if (!characters[heroId]) {
        //     return;
        // }
        //
        // changeHero(heroId);
        const hero = JSON.parse(localStorage.getItem(heroId)!);
        if (hero && ((Date.now() - hero.timestamp) < period_month)) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setHero(hero.payload);
        } else {
            fetch(characters[heroId].url)
                // fetch(characters[heroId as keyof typeof characters].url)
                // fetch(`${base_url}/v1/peoples/1`)
                .then(response => response.json())
                .then(data => {
                    const info = {
                        name: data.name,
                        gender: data.gender,
                        birth_year: data.birth_year,
                        height: data.height,
                        mass: data.mass,
                        hair_color: data.hair_color,
                        skin_color: data.skin_color,
                        eye_color: data.eye_color
                    }
                    setHero(info);
                    localStorage.setItem(heroId!, JSON.stringify({
                        payload: info,
                        timestamp: Date.now()
                    }));
                })
        }

    }, [heroId]) //working every time when the component is rendered, useEffect runing only once if [](an array of dependencies is empty and if not then everty time after any dependence(variable) from array is changed

    // return characters[heroId]? (
        return (
            <>
                {(!!hero) &&
                    <div className='text-[2em] leading-normal text-justify ms-12'>
                        {Object.keys(hero).map(key =>
                            <p key={key}>
                                <span className='text-[4rem] capitalize'>{key.replace('_', ' ')}:</span>
                                {hero[key as keyof HeroInfo]}
                            </p>)}
                    </div>
                }
            </>
        )
        // : <ErrorPage/>;
}



export default withErrorPage(AboutMe);