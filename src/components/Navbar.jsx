import { Link } from "react-router";

export default function Navbar() {
    return (
        <nav className="flex justify-center gap-4 text-base font-semibold py-1.5 bg-white shadow-sm rounded-md">
            <Link
                to="/"
                className="px-4 py-2 rounded-md text-blue-600 hover:bg-blue-100 transition-all duration-200 active:ring-2 active:ring-blue-400"
            >
                Home
            </Link>
            <Link
                to="/about"
                className="px-4 py-2 rounded-md text-blue-600 hover:bg-blue-100 transition-all duration-200 active:ring-2 active:ring-blue-400"
            >
                About
            </Link>
            <Link
                to="/contact"
                className="px-4 py-2 rounded-md text-blue-600 hover:bg-blue-100 transition-all duration-200 active:ring-2 active:ring-blue-400"
            >
                Contact
            </Link>
        </nav>

    )
}