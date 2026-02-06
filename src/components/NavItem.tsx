
interface Props {
    itemTitle: string
}
const NavItem = ({itemTitle}:Props) => {
    return (

        <li className={`bg-danger rounded-[5px] border-black border-2 px-3 py-2 cursor-pointer hover:text-white hover:bg-red-500`}>
        <a href={`/${itemTitle}`}>{itemTitle} </a>
        </li>
    );
};

export default NavItem;
//"nav-item btn btn-danger mx-1"