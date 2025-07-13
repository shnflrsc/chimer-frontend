import { Link } from "react-router-dom";

import { RxHamburgerMenu } from "react-icons/rx";

function Header() {
    return (
        <header className="bg-[#4A5A6A] p-4 flex gap-x-8 items-center">
            <button className="md:hidden">
                <RxHamburgerMenu color="#fff" size={24} />
            </button>
            <Link to="/" className="absolute left-1/2 -translate-x-1/2 md:static md:left-auto md:translate-none">
                <h2 className="text-2xl font-bold text-white">Chimer</h2>
            </Link>
            <nav className="invisible md:visible flex gap-x-8">
                <Link to="/" className="text-white">Home</Link>
                <Link to="/create" className="text-white">Create</Link>
                <Link to="/browse" className="text-white">Browse</Link>
            </nav>
        </header>
    )
}

export default Header;