import { useState, type ChangeEvent } from "react"
import { useForm, type SubmitHandler } from "react-hook-form";

import RaceDescription from "./RaceDescription";
import RaceSkillBonuses from "./RaceSkillBonuses";
import RaceStartingSpells from "./RaceStartingSpells";
import RaceSpecialAbilities from "./RaceSpecialAbilities";

interface BuildForm {
    name: string,
    description: string,
    race: string,
    standingStone: string
}

function RaceForm() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm<BuildForm>()

    const onSubmit: SubmitHandler<BuildForm> = (data) => console.log(data);

    return (
        <form className="flex flex-col gap-y-2" onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="race">Race</label>
            <select className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] focus:outline-none rounded-lg p-2" {...register("race")} id="race">
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
        </form>
    )
}

export default RaceForm;