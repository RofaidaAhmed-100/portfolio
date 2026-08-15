import Link from "next/link";

const content = {
  eyebrow: "cairo, egypt",
  name: "Rofaida A. Mosa",
  role: "Software Engineer",

  intro:
    "A software engineer swings between PTSD and programming. Passionate about web dev, Go, and system programming."
  };


export default function Home() {
  return (
    <div className="min-h-screen bg-background text-text">
      {/* Navbar with Outside Code / Story Link */}
      <nav className="max-w-3xl mx-auto px-6 pt-8 pb-4 flex justify-between items-center font-mono text-sm">
        <div className="text-accent font-semibold">// rofaida</div>
        <div className="flex gap-6 text-text-muted hover:text-text transition-colors">
          <Link href="#outside-code" className="hover:text-accent">
            outside programming
          </Link>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-6 py-16 md:py-24">
        {/* Location Eyebrow */}
        <div className="flex items-center gap-2 font-mono text-sm text-accent mb-6">
          <span className="w-2 h-2 rounded-full bg-accent shadow-[0_0_0_3px_rgba(31,156,138,0.15)]" />
          {content.eyebrow}
        </div>

        {/* Name & Role */}
        <h1 className="font-display font-semibold text-4xl md:text-5xl leading-tight mb-3">
          {content.name}
        </h1>
        <p className="font-mono text-accent-dim text-lg mb-10">
          {content.role}
        </p>

        {/* Bio Intro */}
        <p className="text-text-muted text-lg leading-relaxed mb-16 max-w-xl">
          {content.intro}
        </p>

        {/* Content Sections */}
        <div className="space-y-12">
        </div>
      </main>
    </div>
  );
}

function Section({ label, text }: { label: string; text: string }) {
  return (
    <div>
      <div className="font-mono text-xs text-accent mb-2">
        <span className="text-accent-dim">// </span>
        {label}
      </div>
      <p className="text-text-muted leading-relaxed max-w-xl">{text}</p>
    </div>
  );
}