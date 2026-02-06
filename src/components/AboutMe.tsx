import {useEffect, useState} from "react";
import {base_url, period_month} from "../utils/constants.ts";
import type {HeroInfo} from "../utils/types";

const AboutMe = () => {
    const [hero, setHero] = useState<HeroInfo>();
    useEffect(() => {
        const hero = JSON.parse(localStorage.getItem("hero")!);
        if (hero && ((Date.now() - hero.timestamp) < period_month)) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setHero(hero.payload);
        } else {
            fetch(`${base_url}/v1/peoples/1`)
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
                    localStorage.setItem("hero", JSON.stringify({
                        payload: info,
                        timestamp: Date.now()
                    }));
                })
        }

    }, [])

    return (
        <>
            {(!!hero) &&
                // <div className='fs-2 lh-lg text-justify ms-5'>
                <div className='text-3xl leading-normal text-justify ms-12'>
                    {Object.keys(hero).map(key => <p key={key}><span
                        className='text-[4rem] capitalize'>{key.replace('_',' ')}:</span> {hero[key as keyof HeroInfo]}</p>) }
                    {/*<p><span className='text-[4rem]'>name:</span> {hero.name}</p>*/}
                    {/*<p><span className='text-[4rem]'>gender:</span> {hero.gender}</p>*/}
                    {/*<p><span className='text-[4rem]'>birth year:</span> {hero.birth_year}</p>*/}
                    {/*<p><span className='text-[4rem]'>height:</span> {hero.height}</p>*/}
                    {/*<p><span className='text-[4rem]'>mass:</span> {hero.mass}</p>*/}
                    {/*<p><span className='text-[4rem]'>hair color:</span> {hero.hair_color}</p>*/}
                    {/*<p><span className='text-[4rem]'>skin color:</span> {hero.skin_color}</p>*/}
                    {/*<p><span className='text-[4rem]'>eye color:</span> {hero.eye_color}</p>*/}
                </div>
            }
        </>
    );
}

export default AboutMe;