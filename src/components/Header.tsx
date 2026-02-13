import Navigation from "./Navigation.tsx";
import {useContext} from "react";
import {SwContext} from "../utils/context.ts";
import {characters} from "../utils/constants.ts";
// import {useLocation} from "react-router-dom";

const Header = () => {
    // const location = useLocation();
    // let title = location.pathname.split('/')[2];
    // title = title? title.toUpperCase():'Lucke Skywalker';
    const {hero, isError} = useContext(SwContext);
    const title = !isError? characters[hero].name : 'ERROR';
    return (
        <header className={`bg-gray rounded-t-2xl`}>
            <Navigation/>
            <h1 className="text-center py-6 text-3xl">{title}</h1>
        </header>
    );
};

export default Header;