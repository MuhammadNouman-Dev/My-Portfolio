import avatar from "../assets/My_Emogi.jpg";

export default function Hero() {
    return (
        <section id="hero" className="bg-[#020617] text-white pt-28 pb-20 overflow-hidden">
            <div className="max-w-6xl mx-auto px-4">

                <div className="grid lg:grid-cols-2 items-center gap-10">

                    <div>

                        <span className="inline-block bg-[#0f172a] text-[#00d4ff] px-4 py-1 rounded-full text-sm mb-4">
                            Hi, I'm Muhammad Nouman
                        </span>

                        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                            Full-Stack Developer{" "}
                            <span className="text-[#00d4ff]">& Problem Solver</span>
                        </h1>

                        <p className="text-gray-400 mt-4">
                            Crafting scalable web applications with modern technologies.
                            Turning complex problems into elegant solutions.
                        </p>

                        <div className="mt-6 flex flex-wrap gap-4">
                            <a
                                href="/resume.pdf"
                                target="_blank"
                            >
                                <button className="bg-linear-to-r from-cyan-400 to-sky-500 text-black px-5 py-2 rounded font-semibold hover:shadow-lg hover:shadow-cyan-500/40 active:scale-95 transition">
                                    View Resume
                                </button>
                            </a>

                            <a href="#projects">
                                <button className="border border-gray-400 px-5 py-2 rounded hover:border-[#00d4ff] hover:text-[#00d4ff] active:scale-95 transition">
                                    View Projects
                                </button>
                            </a>
                        </div>

                        <div className="flex gap-5 mt-6 text-xl">
                            <a
                                href="https://github.com/MuhammadNouman-Dev"
                                target="_blank"
                            >
                                <i className="bi bi-github text-xl hover:text-[#00d4ff] cursor-pointer"></i>
                            </a>

                            <a className="active:scale-95"
                                href="https://www.linkedin.com/in/muhammad-nouman-233916206"
                                target="_blank"
                            >
                                <i className=" bi bi-linkedin bg-[#0f172a] p-2 rounded cursor-pointer hover:text-[#00d4ff] "></i>
                            </a>

                            <a className="active:scale-95"
                                href="mailto:noumanarshad1865@gmail.com">
                                <i className="bi bi-envelope hover:text-[#00d4ff] cursor-pointer"></i>
                            </a>
                        </div>

                    </div>

                    <div className="flex justify-center lg:justify-end">

                        <img
                            src={avatar}
                            alt="profile"
                            className="w-75 md:w-95 h-75 md:h-95 rounded-full object-cover animate-[float_3s_ease-in-out_infinite]"
                        />

                    </div>

                </div>

            </div>
        </section>
    );
}