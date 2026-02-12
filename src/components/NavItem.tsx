import type {NavItemInterface} from "../utils/types";
import {NavLink} from "react-router-dom";
import {useContext} from "react";
import {SwContext} from "../utils/context.ts";
import {characters, defaultHero} from "../utils/constants.ts";

interface Props {
    item: NavItemInterface
}

const NavItem = ({item}: Props) => {
    const {hero} = useContext(SwContext);
const pathHero = characters[hero]? hero: defaultHero;

    return (
        <NavLink className={`bg-danger rounded-[5px] border-black border-2 px-3 py-2 cursor-pointer hover:text-white hover:bg-red-500`}
            to={`/${item.path}/${pathHero}`}>
            {item.title}
        </NavLink>
    );
};

export default NavItem;
//"nav-item btn btn-danger mx-1"