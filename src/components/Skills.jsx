export default function Skills() {
  return (
    <section id="skills" className="bg-[#020617] text-white py-20">
      <div className="max-w-6xl mx-auto px-4">

        <div className="text-center mb-12">
          <span className="inline-block bg-[#0f172a] text-[#00d4ff] px-4 py-1 rounded-full text-sm mb-4">
            Tech Stack
          </span>

          <h2 className="text-3xl md:text-4xl font-bold">
            Skills & Technologies
          </h2>

          <p className="text-gray-400 mt-2">
            Tools and technologies I work with to bring ideas to life
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">

          <div>
            <h4 className="text-[#00d4ff] text-center mb-6 text-lg font-semibold">
              Frontend
            </h4>

            <Skill icon="bi-code-slash" title="React" level="Advanced" />
            <Skill icon="bi-palette" title="Tailwind CSS" level="Advanced" />
            <Skill icon="bi-code" title="HTML" level="Advanced" />
            <Skill icon="bi-code" title="Angular.js" level="Intermediate" />
            <Skill icon="bi-phone" title="React Native" level="Intermediate" />
          </div>

          <div>
            <h4 className="text-[#00d4ff] text-center mb-6 text-lg font-semibold">
              Backend
            </h4>

            <Skill icon="bi-hdd-network" title="Node.js" level="Intermediate" />
            <Skill icon="bi-server" title="Express" level="Intermediate" />
            <Skill icon="bi-database-fill" title="MongoDB" level="Intermediate" />
            <Skill icon="bi-link" title="REST APIs" level="Intermediate " />
          </div>

          <div>
            <h4 className="text-[#00d4ff] text-center mb-6 text-lg font-semibold">
              Tools
            </h4>
            <Skill icon="bi-github" title="GitHub" level="Advanced" />
            <Skill icon="bi-box-arrow-up-right" title="Postman" level="Advanced" />
          </div>

        </div>
      </div>
    </section>
  );
}

function Skill({ icon, title, level }) {
  return (
    <div className="flex items-center gap-4 bg-[#0f172a] p-4 rounded-xl mb-3 hover:-translate-y-0.75 hover:bg-[#111c30] transition">

      <i className={`bi ${icon} text-[#00d4ff] text-xl`}></i>

      <div>
        <h6 className="font-semibold">{title}</h6>
        <small
          className={
            level === "Advanced"
              ? "text-green-400"
              : "text-yellow-400"
          }
        >
          {level}
        </small>
      </div>

    </div>
  );
}