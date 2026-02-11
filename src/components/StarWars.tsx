import {starWarsInfo} from "../utils/constants.ts";
import {withErrorPage} from "../hoc/withErrorPage.tsx";

const StarWars = () => {

    return (

        <div className={`text-[2em] text-justify tracking-[0.2em] leading-normal p-1.5`}>
            {starWarsInfo}
        </div>
    )
};

export default withErrorPage(StarWars);