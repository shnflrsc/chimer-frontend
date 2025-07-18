
import { useForm, type SubmitHandler } from "react-hook-form";
import { nanoid } from "nanoid";

import { type Build } from "../interfaces/BuildType";

import RaceDescription from "./RaceDescription";
import RaceSkillBonuses from "./RaceSkillBonuses";
import RaceStartingSpells from "./RaceStartingSpells";
import RaceSpecialAbilities from "./RaceSpecialAbilities";
import StandingStoneDescription from "./StandingStoneDescription";

function BuildForm() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Build>({
        defaultValues: {
            properties: {
                race: "argonian",
                standingStone: "apprentice"
            },
        },
        
    })

    const propertiesValue = watch("properties");
    const raceValue = propertiesValue?.race;
    const standingStoneValue = propertiesValue?.standingStone;

    const onSubmit: SubmitHandler<Build> = async (data) => {

        const payload: Build = {
            ...data,
            id: nanoid(),
            timestamp: new Date().toISOString().slice(0, 19),
        }
        
        try {
            const response = await fetch("http://localhost:8080/api/builds", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                throw new Error("Failed to submit build");
            }

            const result = await response.json();
            console.log("Submission result: ", result);
        } catch (error) {
            console.error("Submission error: ", error);
        }
    }

    return (
        <form className="flex flex-col gap-y-6 md:w-5/12 self-center" onSubmit={ handleSubmit(onSubmit) }>
            <h1 className="text-2xl font-bold">Create Build</h1>
            <label className="font-bold" htmlFor="name">Name</label>
            { errors.name && <span className="text-red-600">* This field is required</span> }
            <input className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg p-2 focus:outline-none" type="text" id="name" { ...register("name", { required: true }) } />
            
            <label className="font-bold" htmlFor="description">Description</label>
            { errors.description && <span className="text-red-600">* This field is required</span> }
            <textarea className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] resize-none rounded-lg p-2 focus:outline-none h-28" { ...register("description", { required: true }) } ></textarea>
            
            <h2 className="text-xl font-bold">Properties</h2>
            <label className="font-bold" htmlFor="race">Race</label>
            <select className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg p-2 focus:outline-none" id="race" { ...register("properties.race", { required: true }) }>
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

            <RaceDescription race={ raceValue } />
            <RaceSkillBonuses race={ raceValue } />
            <RaceStartingSpells race={ raceValue } />
            <RaceSpecialAbilities race={ raceValue } />

            <label className="font-bold" htmlFor="standingStone">Standing Stone</label>
            <select className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg p-2 focus:outline-none" id="standingStone" defaultValue={"apprentice"} {...register("properties.standingStone")}>
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

            <StandingStoneDescription standingStone={ standingStoneValue } />

            <button className="bg-[#4A5A6A] text-white p-2 rounded-lg w-24" type="submit">Submit</button>
        </form>
    )
}

export default BuildForm;