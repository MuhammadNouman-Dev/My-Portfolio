import { useState } from "react";

export default function Navbar() {
    const [active, setActive] = useState("hero");

    const linkClass = (section) =>
        `transition ${active === section ? "text-[#00d4ff]" : "text-white"
        } hover:text-[#00d4ff]`;

    return (
        <nav className="fixed top-0 left-0 w-full bg-[#020617] z-50 border-b border-[#0f172a]">
            <div className="max-w-6xl mx-auto px-4 py-3 flex items-center">

                <a
                    href="#hero"
                    className="font-bold text-[#00d4ff] text-lg"
                    onClick={() => setActive("hero")}
                >
                    Muhammad Nouman
                </a>

                <ul className="ml-auto hidden md:flex items-center gap-6">

                    <li>
                        <a
                            href="#hero"
                            onClick={() => setActive("hero")}
                            className={linkClass("hero")}
                        >
                            Home
                        </a>
                    </li>

                    <li>
                        <a
                            href="#about"
                            onClick={() => setActive("about")}
                            className={linkClass("about")}
                        >
                            About
                        </a>
                    </li>

                    <li>
                        <a
                            href="#projects"
                            onClick={() => setActive("projects")}
                            className={linkClass("projects")}
                        >
                            Projects
                        </a>
                    </li>

                    <li>
                        <a
                            href="#skills"
                            onClick={() => setActive("skills")}
                            className={linkClass("skills")}
                        >
                            Skills
                        </a>
                    </li>

                    <li>
                        <a
                            href="#contact"
                            onClick={() => setActive("contact")}
                            className={linkClass("contact")}
                        >
                            Contact
                        </a>
                    </li>

                </ul>

                <div className="ml-auto md:hidden text-white text-2xl">
                    <i className="bi bi-list"></i>
                </div>

            </div>
        </nav>
    );
}