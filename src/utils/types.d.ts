export interface SWContextInterface {
    page: string,
    changePage: (page: string) => void,
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