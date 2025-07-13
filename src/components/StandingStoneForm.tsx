import { useState, type ChangeEvent } from "react";

import StandingStoneDescription from "./StandingStoneDescription"; 

function StandingStoneForm() {

    const [standingStone, setStandingStone] = useState("apprentice");

    const handleStandingStoneInput = (event: ChangeEvent<HTMLSelectElement>) => {
        setStandingStone(event.target.value);
    }

    return (
        <div className="flex flex-col gap-y-2">
            <label htmlFor="standingStone">Standing Stone</label>
                <select className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-2 rounded-lg focus:outline-none" id="standingStone" value={standingStone} onChange={(event) => handleStandingStoneInput(event)}>
                    <option value="apprentice">Apprentice</option>
                    <option value="atronach">Atronach</option>
                    <option value="lady">Lady</option>
                    <option value="lord">Lord</option>
                    <option value="lover">Lover</option>
                    <option value="mage">Mage</option>
                    <option value="ritual">Ritual</option>
                    <option value="serpent">Serpent</option>
                    <option value="shadow">Shadow</option>
                    <option value="steed">Steed</option>
                    <option value="thief">Thief</option>
                    <option value="tower">Tower</option>
                    <option value="warrior">Warrior</option>
                </select>
                <div className="pt-4">
                    <StandingStoneDescription standingStone={standingStone} />
                </div>
            </div>
    )
}

export default StandingStoneForm;