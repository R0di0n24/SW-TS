import {SwContext} from "../utils/context.ts";
import {useContext} from "react";
interface Props {
    itemTitle: string
}
const NavItem = ({itemTitle}:Props) => {
    const {changePage} = useContext(SwContext)
    return (
        <li onClick={() => changePage(itemTitle)} className={`bg-danger rounded-[5px] border-black border-2 px-3 py-2 cursor-pointer hover:text-white hover:bg-red-500`}>{itemTitle}</li>
    );
};

export default NavItem;
//"nav-item btn btn-danger mx-1"