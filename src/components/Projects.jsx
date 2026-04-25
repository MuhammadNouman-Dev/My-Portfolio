export default function Projects() {
    return (
        <section id="projects" className="bg-[#020617] text-white py-20">
            <div className="max-w-6xl mx-auto px-4">

                <div className="text-center mb-12">
                    <span className="inline-block bg-[#0f172a] text-[#00d4ff] px-4 py-1 rounded-full text-sm mb-4">
                        Portfolio
                    </span>

                    <h2 className="text-3xl md:text-4xl font-bold">
                        Featured Projects
                    </h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-6">

                    {/* PROJECT 1 */}
                    <div className="bg-[#0f172a] rounded-xl overflow-hidden transition hover:scale-[1.02] hover:shadow-[0_10px_30px_rgba(0,212,255,0.15)]">

                        <img
                            src="https://images.unsplash.com/photo-1587614382346-4ec70e388b28"
                            className="w-full h-62.5 object-cover"
                            alt="project1"
                        />

                        <div className="p-5">

                            <h5 className="text-lg font-semibold">E-Commerce Website</h5>

                            <p className="text-gray-400 mt-2">
                                A Shopping Platform for Men & Women.
                            </p>

                            <div className="mt-3 flex gap-2 flex-wrap">
                                <span className="bg-gray-700 px-3 py-1 text-sm rounded">React</span>
                                <span className="bg-gray-700 px-3 py-1 text-sm rounded">Node.js</span>
                                <span className="bg-gray-700 px-3 py-1 text-sm rounded">OpenAI</span>
                            </div>

                        </div>
                    </div>

                    <div className="bg-[#0f172a] rounded-xl overflow-hidden transition hover:scale-[1.02] hover:shadow-[0_10px_30px_rgba(0,212,255,0.15)]">

                        <img
                            src="https://c8.alamy.com/comp/R91KAW/professional-auto-mechanic-in-uniform-set-of-three-poses-smiling-cartoon-character-holds-toolbox-holds-clipboard-and-wheel-wrench-and-holds-oil-can-R91KAW.jpg"
                            className="w-full h-62.5 object-cover"
                            alt="project2"
                        />

                        <div className="p-5">

                            <h5 className="text-lg font-semibold">Repair Buddies</h5>

                            <p className="text-gray-400 mt-2">
                                An application to help people stuck in vehicle on any place.
                            </p>

                            <div className="mt-3 flex gap-2 flex-wrap">
                                <span className="bg-gray-700 px-3 py-1 text-sm rounded">React Native</span>
                                <span className="bg-gray-700 px-3 py-1 text-sm rounded">Node.js</span>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}