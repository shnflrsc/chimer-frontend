import { useState, useEffect } from "react";

import BuildCard from "../components/BuildCard";

import { type BuildType } from "../interfaces/BuildType";

function Browse() {

    const [loading, setLoading] = useState<boolean>(true);
    const [builds, setBuilds] = useState<BuildType[]>([]);

    useEffect(() => {
        document.title = "Chimer | Browse Builds";

        const fetchAllBuilds = async () => {
            try {

                setLoading(true);

                const response = await fetch ("http://localhost:8080/api/builds", {
                    method: "GET",
                    headers: {
                        "Accept": "application/json",
                    },
                });

                const data: BuildType[] = await response.json();

                setBuilds(data);
            } catch (error) {
                console.log("Fetch error: ", error);
            } finally {
                setLoading(false);
            }
        }

        fetchAllBuilds();
    }, []);

    if (loading) {
        <main className="flex p-8">
            <p>Loading...</p>
        </main>
    } else {
        return (
        <main className="flex flex-col p-8 gap-y-8">
            <h1 className="text-xl text-center font-bold md:text-left">Browse User-Created Builds</h1>
            <div className="flex flex-col gap-y-8 md:grid md:grid-cols-3 md:grid-flow-row md:gap-8">
                {builds.map((build) => (
                    <BuildCard key={build.id} id={build.id} name={build.name} description={build.description} />
                ))}
            </div>
        </main>
    )
    }
}

export default Browse;