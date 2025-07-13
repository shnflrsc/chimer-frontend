import { Link } from "react-router-dom";
import { useEffect } from "react";

function Home() {

    useEffect(() => {
        document.title = 'Chimer';
    })

    return (
        <main className="p-8 flex flex-col gap-y-8 items-center">
            <Link to="/create" className="md:w-96">
                <article className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-xl p-8 flex flex-col gap-y-4">
                    <h1 className="text-xl">Create Build</h1>
                    <p className="text-sm text-justify">
                        Create your own Skyrim build. Mix and match different races, standing stones, perks, and more to enhance your role-playing experience. 
                    </p>
                    <p className="text-right">Go →</p>
                </article>
            </Link>
            <Link to="/browse" className="md:w-96">
                <article className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-xl p-8 flex flex-col gap-y-4">
                    <h1 className="text-xl">Browse Builds</h1>
                    <p className="text-sm text-justify">
                        Browse other user-created builds. Challenge yourself by playing interesting characters, gather inspiration for your next playthrough.
                    </p>
                    <p className="text-right">Go →</p>
                </article>
            </Link>
        </main>
    )
}

export default Home;