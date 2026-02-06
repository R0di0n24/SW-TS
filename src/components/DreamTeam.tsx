import {friends} from "../utils/constants.ts";
import Friend from "./Friend.tsx";

const DreamTeam = () => {
    return (
        // <section className="float-end w-50 row border rounded-bottom-4 mx-2">
        <section className={`float-right w-1/2 mx-2 border border-base rounded-b-2xl grid grid-cols-3 gap-0.5`}>
            <h2 className="col-span-3 text-center text-[2rem]">Dream team</h2>
            {friends.map((f, i) => <Friend picture={f} key={i} pos={i + 1} />)}
        </section>
    );
};

export default DreamTeam;