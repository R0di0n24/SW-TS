import {createContext} from "react";
import type {SWContextInterface} from "./types";

export const SwContext = createContext<SWContextInterface>({
    page: 'Home',
    changePage: (page:string)=> console.log(page)//page.length,
});