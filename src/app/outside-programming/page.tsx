import Link from "next/link";
import Image from "next/image";

const books = [
  {
    title: "Complex PTSD: From Surviving to Thriving",
    author: "Pete Walker",
    cover: "/books/20556323.jpg",
    link: "https://www.amazon.com/dp/1492871842",
  },
  {
    title: "What My Bones Know",
    author: "Stephanie Foo",
    cover: "/books/images.jpg",
    link: "https://www.goodreads.com/en/book/show/58214328-what-my-bones-know",
  },
];

export default function OutsideProgrammingPage() {
  return (
    <div className="min-h-screen bg-background text-text">
      {/* Back Link */}
      <nav className="max-w-3xl mx-auto px-6 pt-8 pb-4 flex justify-between items-center font-mono text-sm">
        <Link href="/" className="text-text-muted hover:text-accent transition-colors">
          ← back to home
        </Link>
      </nav>

      <main className="max-w-3xl mx-auto px-6 py-16 md:py-24">
        <div className="font-mono text-base font-semibold text-accent mb-2">
          outside programming
        </div>
        <h1 className="font-display font-semibold text-3xl md:text-4xl mb-8">
          Human Behavior & Psychology
        </h1>

        {}
        <p className="text-text-muted text-lg leading-relaxed max-w-xl mb-12">
          Outside of programming, I'm deeply curious about human psychology and how childhood upbringing shapes our adult lives. This interest grew after I was diagnosed with PTSD, leading me to read books on trauma and healing .
        </p>

        {}
        <div className="max-w-xl">
          <h2 className="font-mono text-sm md:text-base font-bold text-accent uppercase tracking-wider mb-6 pb-2 border-b border-border">
            Books I&apos;m reading
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {books.map((book) => (
              <a
                key={book.title}
                href={book.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-surface border border-border rounded-xl hover:border-accent transition-colors group"
              >
                <div className="relative w-16 h-24 flex-shrink-0 overflow-hidden rounded bg-border">
                  <Image
                    src={book.cover}
                    alt={book.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-sm text-text group-hover:text-accent transition-colors line-clamp-2">
                    {book.title}
                  </h3>
                  <p className="font-mono text-xs text-text-muted mt-1">
                    {book.author}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}