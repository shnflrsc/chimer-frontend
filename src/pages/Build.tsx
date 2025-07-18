import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { type BuildType } from "../interfaces/BuildType";

function Build() {
    const { id } = useParams();

    const [build, setBuild] = useState<BuildType>({
        name: "Name",
        description: "Description",
        properties: {
            race: "argonian",
            standingStone: "apprentice"
        }
    } as BuildType);

    useEffect(() => {
        const fetchBuild = async () => {
            try {
                const response = await fetch(`http://localhost:8080/api/builds/${id}`, {
                    method: "GET",
                    headers: {
                        "Accept": "application/json",
                    },
                });
                setBuild(await response.json());
            } catch (error) {
                console.log(error);
            }
        }
        fetchBuild();
    }, [id])

    return (
        <main className="p-8 flex flex-col gap-y-8">
            <h1 className="text-3xl font-bold">{build.name}</h1>
            <p className="w-7/12 text-justify break-words">{build.description}</p>
            <span>
                <h3 className="text-xl font-bold">Race</h3>
                <p>{build.properties.race}</p>
            </span>
            <span>
                <h3 className="text-xl font-bold">Standing Stone</h3>
                <p>{build.properties.standingStone}</p>
            </span>
        </main>
    )
}

export default Build;