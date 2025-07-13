import { useEffect } from "react";

import RaceForm from "../components/RaceForm"; 
import StandingStoneForm from "../components/StandingStoneForm";

function Create() {

    useEffect(() => {
        document.title = 'Create Build';
    });

    return (
        <main className="p-8 gap-y-8 flex flex-col">
            <h1 className="text-2xl font-bold">Create Build</h1>
            <form className="flex flex-col gap-y-8">
                <div className="flex flex-col gap-y-2">
                    <label htmlFor="name">Name</label>
                    <input className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-2 rounded-lg w-full focus:outline-none" type="text" id="name" />
                </div>
                <div className="flex flex-col gap-y-2">
                    <label htmlFor="description">Description</label>
                    <textarea className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg h-24 p-2 focus:outline-none resize-none" id="description"></textarea>
                </div>
                <h1 className="text-lg font-bold">Properties</h1>
                <RaceForm />
                <StandingStoneForm />
            </form>
        </main>
    )
}

export default Create;