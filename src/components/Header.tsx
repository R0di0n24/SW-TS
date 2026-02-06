import Navigation from "./Navigation.tsx";
//className=rounded-top-4 changed to rounded-t-2xl
const Header = () => {
    return (
        <header className={`bg-gray rounded-t-2xl`}>
        {/*<header className="bg-customGray rounded-t-2xl">*/}
            <Navigation/>
            <h1 className="text-center py-6 text-3xl">Luke Skywalker</h1>
        </header>
    );
};

export default Header;