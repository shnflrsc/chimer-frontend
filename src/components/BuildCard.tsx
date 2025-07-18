import { Link } from "react-router-dom";

function BuildCard({ id, name, description }: { id: string, name: string, description: string }) {
    return (
        <Link to={`/builds/${id}`}>
            <article className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] md:w-full md:h-full flex flex-col p-8 rounded-xl gap-y-4">
                <h1 className="text-lg font-bold">{name}</h1>
                <p className="text-justify text-sm line-clamp-3">{description}</p>
            </article>
        </Link>
    )
}

export default BuildCard;