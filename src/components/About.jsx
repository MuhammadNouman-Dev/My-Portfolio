export default function About() {
    return (
        <section id="about" className="bg-[#020617] text-white py-20">
            <div className="max-w-6xl mx-auto px-4">

                <div className="text-center mb-12">
                    <span className="inline-block text-[#00d4ff] bg-[#0f172a] px-4 py-1 rounded-full text-sm mb-4">
                        About Me
                    </span>

                    <h2 className="text-3xl md:text-4xl font-bold">
                        Building Digital Products
                    </h2>

                    <p className="text-gray-400 mt-3">
                        Passionate about creating seamless user experiences and scalable systems
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-10 items-start">

                    <div className="space-y-4 text-gray-300 leading-relaxed">

                        <p>
                            I am a full-stack developer specializing in the MERN stack, with a strong focus on building scalable, efficient, and user-friendly web applications.
                        </p>

                        <p>
                            I work extensively with modern JavaScript technologies to develop end-to-end solutions, covering both frontend interfaces and robust backend systems.
                        </p>

                        <p>
                            Currently, I am focused on building production-ready applications, improving system performance, and continuously enhancing my skills in software architecture and backend development.
                        </p>

                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                        <div className="bg-[#0f172a] p-5 rounded-xl text-center hover:-translate-y-1.25 transition">
                            <i className="bi bi-calendar text-[#00d4ff] text-xl"></i>
                            <h6 className="mt-2 font-semibold">Experience</h6>
                            <p className="text-gray-400 text-sm">6+ Months</p>
                        </div>

                        <div className="bg-[#0f172a] p-5 rounded-xl text-center hover:-translate-y-1.25 transition">
                            <i className="bi bi-geo-alt text-[#00d4ff] text-xl"></i>
                            <h6 className="mt-2 font-semibold">Location</h6>
                            <p className="text-gray-400 text-sm">Lahore, Pakistan</p>
                        </div>

                        <div className="bg-[#0f172a] p-5 rounded-xl text-center hover:-translate-y-1.25 transition">
                            <i className="bi bi-code text-[#00d4ff] text-xl"></i>
                            <h6 className="mt-2 font-semibold">Main Stack</h6>
                            <p className="text-gray-400 text-sm">MERN</p>
                        </div>

                        <div className="bg-[#0f172a] p-5 rounded-xl text-center hover:-translate-y-1.25 transition">
                            <i className="bi bi-briefcase text-[#00d4ff] text-xl"></i>
                            <h6 className="mt-2 font-semibold">Role</h6>
                            <p className="text-gray-400 text-sm">Software Engineer</p>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}