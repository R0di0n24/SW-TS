
import {useEffect, useState} from "react";
import {base_url, period_month} from "../utils/constants.ts";
import type {PlanetsStore} from "../utils/types";


//  const [planets, setPlanets] Array<string>, (Array<string>) => void

const Contact = () => {
    const [planets, setPlanets] = useState<Array<string>>(['wait...']);
    const styleLabel = 'w-full text-danger'
    const styleInput = 'text-gray-600 w-full p-3 border border-gray-300 rounded-sm box-border mt-1.5 mb-4 resize-y'

    //text-gray-600 w-full p-3 border border-gray-300 rounded-sm box-border mt-1.5 mb-4 resize-y
    async function fillPlanets(url: string) {
        const response = await fetch(url);
        const data: Array<{ name: string }> = await response.json();
        const planets = data.map((item) => item.name);

        setPlanets(planets);
        localStorage.setItem('planets', JSON.stringify({
            payload: planets,
            time: Date.now()
        }));
    }

    useEffect(() => {
        const planets:PlanetsStore = JSON.parse(localStorage.getItem('planets')!);
        if (planets && (Date.now() - planets.time) < period_month) {
            setPlanets(planets.payload);
        } else {
            fillPlanets(`${base_url}/v1/planets`);
        }
    }, [])


    return (
        // className="container"
        <div className={`flex justify-center`}>
            <form className={`w-4/5 my-0 rounded-[5px] bg-form p-5 `} onSubmit={e => {
                e.preventDefault();
            }}>
                <label className={styleLabel}>First Name
                    <input className={styleInput} type="text" name="firstname" placeholder="Your name.."/>
                </label>
                <label className={styleLabel}>Last Name
                    <input className={styleInput} type="text" name="lastname" placeholder="Your last name.."/>
                </label>
                <label className={styleLabel}>Planet
                    <select className={styleInput}
                            name="planet">{
                        planets.map((item) => <option value={item} key={item}>{item}</option>)
                    }
                    </select>
                </label>

                <label className={styleLabel}>Subject
                    <textarea className={`${styleInput} h-50`} name="subject"
                              placeholder="Write something.."></textarea>
                </label>
                <button className={`bg-[#04AA6D] text-white py-3 px-5 rounded-sm cursor-pointer hover:bg-[#45a049]`}
                        type="submit">Submit
                </button>
            </form>
        </div>
    )
}

export default Contact;