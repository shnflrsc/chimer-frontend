
import { useForm, type SubmitHandler } from "react-hook-form";

interface BuildForm {
    name: string,
    description: string,
    race: string,
    standingStone: string
}

function BuildForm() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm<BuildForm>()
    const onSubmit: SubmitHandler<BuildForm> = async (data) => {
        try {
            const response = await fetch("http://localhost:8080/api/builds", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
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
        <form className="flex flex-col gap-y-6" onSubmit={ handleSubmit(onSubmit) }>
            <h1 className="text-2xl font-bold">Create Build</h1>
            <label className="font-bold" htmlFor="name">Name</label>
            <input className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg p-2 focus:outline-none" type="text" id="name" {...register("name")} />
            <label className="font-bold" htmlFor="description">Description</label>
            <textarea className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] resize-none rounded-lg p-2 focus:outline-none h-28" {...register("description")} ></textarea>
            <h2 className="text-xl font-bold">Properties</h2>
            <label className="font-bold" htmlFor="race">Race</label>
            <select className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg p-2 focus:outline-none" id="race" {...register("race")}>
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
            <label className="font-bold" htmlFor="standingStone">Standing Stone</label>
            <select className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg p-2 focus:outline-none" id="standingStone" {...register("standingStone")}>
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
            <button className="bg-[#4A5A6A] text-white p-2 rounded-lg w-24" type="submit">Submit</button>
        </form>
    )
}

export default BuildForm;