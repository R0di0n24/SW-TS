import {starWarsInfo} from "../utils/constants.ts";

const StarWars = () => {
    return (
        // <div className={'farGalaxy'}>
        <div className={`text-[2em] text-justify tracking-[0.2em] leading-normal p-1.5`}>
            {starWarsInfo}
        </div>
    );
};

export default StarWars;