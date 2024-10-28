import Link from "next/link";

export  default function Navbar() {
    return (
        <nav className="bg-blue-800 p-4">
            <div className="max w-7xl mx-auto flex space x-4 justify-between items">
                <h1 className="text-white text-lg font-bold">My Website</h1>
                <Link href="/" className="text-white cursor-pointer">Home</Link>
                <Link href="/about" className="text-white cursor-pointer">About</Link>
                <Link href="/services" className="text-white cursor-pointer">Services</Link>
                <Link href="/projects" className="text-white cursor-pointer">Projects</Link>
                <Link href="/contact" className="text-white cursor-pointer">Contact</Link>
            </div>
        </nav>
    );
}