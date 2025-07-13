import { useState, type ChangeEvent } from "react"

import RaceDescription from "./RaceDescription";
import RaceSkillBonuses from "./RaceSkillBonuses";
import RaceStartingSpells from "./RaceStartingSpells";
import RaceSpecialAbilities from "./RaceSpecialAbilities";

function RaceForm() {

    const [race, setRace] = useState("argonian");

    const handleRaceInput = (event: ChangeEvent<HTMLSelectElement>) => {
        setRace(event.target.value);
    }

    return (
        <div className="flex flex-col gap-y-2">
            <label htmlFor="race">Race</label>
                <select className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-2 rounded-lg focus:outline-none" id="race" value={race} onChange={(event) => handleRaceInput(event)}>
                    <option value="argonian">Argonian</option>
                    <option value="khajiit">Khajiit</option>
                    <option value="redguard">Redguard</option>
                    <option value="nord">Nord</option>
                    <option value="breton">Breton</option>
                    <option value="imperial">Imperial</option>
                    <option value="orsimer">Orsimer</option>
                    <option value="bosmer">Bosmer</option>
                    <option value="altmer">Altmer</option>
                    <option value="dunmer">Dunmer</option>
                </select>
            <div className="flex flex-col pt-4 gap-y-4">
                <RaceDescription race={race} />
                <RaceSkillBonuses race={race} />
                <RaceStartingSpells race={race} />
                <RaceSpecialAbilities race={race} />
            </div>
        </div>
    )
}

export default RaceForm;