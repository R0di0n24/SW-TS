
import {navItems} from "../utils/constants.ts";
import NavItem from "./NavItem.tsx";

const Navigation = () => {
    return (
        // <nav className="fixed-top mt-2 ms-5">
        <nav className={`fixed top-2 left-10`}>
            {/*<ul className="nav">*/}
            <div className={`flex space-x-4`}>
                {navItems.map(item => <NavItem item={item} key={item.path}/>)}
            </div>
        </nav>
    );
};

export default Navigation;