import { useEffect } from "react";

import BuildForm from "../components/BuildForm";

function Create() {

    useEffect(() => {
        document.title = 'Chimer | Create Build';
    });

    return (
        <main className="p-8 gap-y-8 flex flex-col">
            <BuildForm />
        </main>
    )
}

export default Create;