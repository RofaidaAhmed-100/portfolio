
 //"A software engineer swings between PTSD and programming. Passionate about web dev, Go, and system programming."
const content = {
  eyebrow: "cairo, egypt",
  name: "Rofaida A. Mosa",
  role: "Junior Software Engineer",

  intro:
    "A software engineer swings between PTSD and programming. Passionate about web dev, Go, and system programming.",

  projects: [
    {
      name: "Zawya Reservation API",
      path: "/projects/zawya-reservation-api",
      description:
        "Production-ready backend for a movie reservation platform. JWT-based authentication, role-based access control for admin and user routes, and a normalized relational data model for movies, halls, and seat management.",
      tech: ["Go", "Gin", "GORM", "MySQL", "JWT"],
      link: "https://github.com/RofaidaAhmed-100/zawya-reservation-api",
    },
    {
      name: "Gocker",
      path: "/projects/gocker",
      description:
        "A minimal container runtime built from scratch in Go — showing that Docker is really just Linux features combined together. Runs an isolated process using namespaces, cgroups v2, chroot, and a virtual network bridge.",
      tech: ["Go", "Linux Namespaces", "cgroups v2", "Networking"],
      link: "https://github.com/RofaidaAhmed-100/gocker-",
    },
    {
      name: "Data Access Layer",
      path: "/projects/data-access",
      description:
        "A Go application implementing clean data-access patterns with MySQL — schema design, CRUD operations, and careful connection management.",
      tech: ["Go", "MySQL", "SQL"],
      link: "https://github.com/RofaidaAhmed-100/data_access",
    },
  ],
};

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-24 md:py-32">
      <div className="flex items-center gap-2 font-mono text-sm text-accent mb-6">
        <span className="w-2 h-2 rounded-full bg-accent shadow-[0_0_0_3px_rgba(31,156,138,0.15)]" />
        {content.eyebrow}
      </div>

      <h1 className="font-display font-semibold text-4xl md:text-5xl leading-tight mb-3">
        {content.name}
      </h1>
      <p className="font-mono text-accent-dim text-lg mb-10">
        {content.role}
      </p>

      <p className="text-text-muted text-lg leading-relaxed mb-16 max-w-xl">
        {content.intro}
      </p>

      {/* Projects */}
      <div>
        <div className="font-mono text-xs text-accent mb-2">
          <span className="text-2xl">projects </span>
        </div>
        <h2 className="font-display font-semibold text-2xl mb-8">
          A few things I&apos;ve shipped
        </h2>

        <div className="space-y-4">
          {content.projects.map((project) => (
            <a
              key={project.name}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-surface border border-border rounded-xl p-6 transition-colors hover:border-accent-dim"
            >
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <span className="font-mono text-xs font-semibold bg-accent text-white px-2 py-0.5 rounded">
                  GET
                </span>
                <span className="font-mono text-sm text-text-muted">
                  {project.path}
                </span>
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">
                {project.name}
              </h3>
              <p className="text-text-muted text-sm leading-relaxed mb-4 max-w-xl">
                {project.description}
              </p>
              <div className="flex gap-2 flex-wrap">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-xs text-text-dim border border-border px-2 py-1 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}