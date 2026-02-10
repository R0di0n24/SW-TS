import {createContext} from "react";
import type {SWContextInterface} from "./types";
import {defaultHero} from "./constants.ts";

export const SwContext = createContext<SWContextInterface>({
    hero: defaultHero,
    changeHero: (hero:string)=> console.log(hero)//page.length,
});