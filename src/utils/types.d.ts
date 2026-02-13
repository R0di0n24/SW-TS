export interface SWContextInterface {
    hero: string,
    changeHero: (hero: string) => void,
    isError: boolean,
    setIsError: (isError: boolean) => void
    // [key: string]: unknown,
}

export interface HeroInfo {
    name: string,
    gender: string,
    birth_year: string,
    height: number,
    mass: number,
    hair_color: string,
    skin_color: string,
    eye_color: string
}

export interface PlanetsStore {
    payload: Array<string>,
    time: number
}

export interface NavItemInterface {
    title: string,
    path: string
}

export interface HeroInterface {
    name: string,
    img: string,
    url: string
}
export interface CharactersInterface {
    [key: string]: HeroInterface
}