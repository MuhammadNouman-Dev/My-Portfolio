export default function Contact() {
    return (
        <section id="contact" className="bg-[#020617] text-white py-20">
            <div className="max-w-6xl mx-auto px-4">

                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold">
                        Let's Work Together
                    </h2>

                    <p className="text-gray-400 mt-2">
                        Have a project in mind? Let's create something amazing together
                    </p>
                </div>

                <div>

                    <div className="space-y-4">

                        <div className="flex items-center justify-between gap-4 bg-[#0f172a] p-4 rounded-xl">

                            <div className="flex items-center gap-4">
                                <i className="bi bi-envelope text-[#00d4ff] text-xl"></i>

                                <div>
                                    <small className="text-gray-400">Email</small>
                                    <p className="break-all">
                                        noumanarshad1865@gmail.com
                                    </p>
                                </div>
                            </div>

                            <a
                                href="mailto:noumanarshad1865@gmail.com"
                                className="bg-linear-to-r from-cyan-400 to-sky-500 text-black px-4 py-2 rounded font-semibold text-sm active:scale-95 hover:shadow-lg hover:shadow-cyan-500/40 transition"
                            >
                                Email Me
                            </a>

                        </div>

                        <div className="flex items-center gap-4 bg-[#0f172a] p-4 rounded-xl">
                            <i className="bi bi-geo-alt text-[#00d4ff] text-xl"></i>
                            <div>
                                <small className="text-gray-400">Location</small>
                                <p>Lahore, Pakistan</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 bg-[#0f172a] p-4 rounded-xl">
                            <i className="bi bi-clock text-[#00d4ff] text-xl"></i>
                            <div>
                                <small className="text-gray-400">Availability</small>
                                <p>Open to opportunities</p>
                            </div>
                        </div>

                    </div>

                    <div className="bg-[#0f172a] p-5 rounded-xl mt-6">
                        <h6 className="text-[#00d4ff] font-semibold mb-2">
                            Fun Fact
                        </h6>
                        <p className="text-gray-300">
                            When I'm not coding, you'll find me hiking in the mountains,
                            experimenting with photography, or contributing to open-source projects!
                        </p>
                    </div>

                    <div className="mt-6">
                        <p className="text-gray-400 mb-2">Connect with me</p>

                        <div className="flex gap-3 text-xl">
                            <a className="mt-2 active:scale-95 "
                                href="https://github.com/MuhammadNouman-Dev"
                                target="_blank"
                            >
                                <i className="bi bi-github text-xl hover:text-[#00d4ff] cursor-pointer"></i>
                            </a>
                            <a className="mt-2 active:scale-95 "
                                href="https://www.linkedin.com/in/muhammad-nouman-233916206"
                                target="_blank"
                            >
                                <i className=" bi bi-linkedin bg-[#0f172a] p-2 rounded cursor-pointer hover:text-[#00d4ff]"></i>
                            </a>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}