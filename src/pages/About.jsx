import React from "react";

const About = () => {
  const mySkils = [
    "React",
    "JavaScript",
    "Tailwindcss",
    "Bootstrap",
    "Next",
    "MongoDB",
    "SQL",
    "Non-SQL",
    "Git",
    "GitHub",
    "API",
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-between py-20"
    >
      <div className="max-w-3xl mx-auto px-4 ">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          About Me
        </h2>
        <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all  hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]">
          <p className="text-gray-300 mb-6">
            I am a skilled Frontend Developer with expertise in React.js,
            Tailwind CSS, HTML, CSS, Bootstrap, and JavaScript. I specialize in
            building modern, responsive, and high-performance web applications
            with a strong focus on user experience and design.
          </p>

          <div className="grid grid-cols-1 gap-6">
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]">
              <h3 className="text-xl font-bold mb-4">MY Skils</h3>
              <div className="flex flex-wrap gap-2">
                {mySkils.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500  py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 mt-8">
          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Education
            </h3>
            <ul>
              <li>
                <strong>
                  Diploma in Engineering Computer Science and Technology
                </strong>
                -Graphic Art Institute (2018-2022)
              </li>
            </ul>
          </div>
          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all  hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] ">
            <h3 className="text-2xl font-bold mb-4 text-semibold  bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent ">
              My Courses
            </h3>
            <div className="space-y-4 text-gray-300 ">
              <div className="">
                <h4 className="text-xl mb-2 font-bold ">
                  Frontend Development with React at Creative It Institute
                </h4>
                <p>
                  I am a Frontend Developer specializing in React.js, Tailwind
                  CSS, and AI-powered web solutions. With a deep understanding
                  of modern frontend technologies and artificial intelligence
                  integration, I build intelligent, dynamic, and
                  high-performance web applications.
                </p>
              </div>
              <div className="pt-4">
                <h4 className="text-xl font-bold mb-2 ">
                  Web Development Lavel-2 at Programming Hero -(Running)
                </h4>
                <p>
                  I am a passionate Frontend Developer with expertise in
                  React.js, Tailwind CSS, JavaScript, and modern UI frameworks.
                  Currently, I am expanding my skill set by learning backend
                  development with Node.js, Express.js, MongoDB, Firebase,
                  Mongoose, Redux, Next.js, DMBS, SQL, PostgreSQL, Prisma,
                  Docker, AWS, GraphQL, Vitest and Jest to become a full-stack
                  developer.
                </p>
              </div>
              <div className="pt-4">
                <h4 className="text-xl font-bold mb-2 ">
                  Web Development Lavel-2 at Creative It Institute -(Running)
                </h4>
                <p>
                  I am a passionate Frontend Developer with expertise in
                  React.js, Tailwind CSS, JavaScript, and modern UI frameworks.
                  Currently, I am expanding my skill set by learning backend
                  development with Node.js, Express.js, MongoDB, and Firebase to
                  become a full-stack developer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
