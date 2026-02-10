import './App.css'
import Header from "./components/Header.tsx";
import Main from "./components/Main.tsx";
import Footer from "./components/Footer.tsx";
import {useState} from "react";
import {defaultHero} from "./utils/constants.ts";
import {SwContext} from "./utils/context.ts";

function App() {
    const [hero, setHero] = useState(defaultHero);
    return (
        <>
            <SwContext.Provider value={{hero, changeHero: setHero}}>
                <Header/>
                <Main/>
                <Footer/>
            </SwContext.Provider>
        </>
    )
}

export default App
