import {type ComponentType, useEffect, useState} from "react";
import {characters, period_month} from "../utils/constants.ts";
import type {HeroInfo} from "../utils/types";
import {withErrorPage} from "../hoc/withErrorPage.tsx";

interface AboutMeProps {
    heroId?: string;
}

export const AboutMe: ComponentType<AboutMeProps> = ({heroId}: AboutMeProps) => {
    const [hero, setHero] = useState<HeroInfo>();
    // const {heroId = defaultHero} = useParams();

    useEffect(() => {
        const hero = JSON.parse(localStorage.getItem(heroId!)!);
        if (hero && ((Date.now() - hero.timestamp) < period_month)) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setHero(hero.payload);
        } else {
            fetch(characters[heroId!].url)
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
}


export default withErrorPage(AboutMe);