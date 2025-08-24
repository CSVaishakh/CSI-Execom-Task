import Link from "next/link";
import Image from "next/image";

export default function AboutHeader() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-blue-200 shadow-md animate-fade-in-down">
      <div className="section-container flex justify-between items-center py-4">
        <Link
          href="/"
          className="flex items-center gap-2 text-blue-800 text-2xl md:text-3xl font-bold hover:text-blue-700 transition-colors duration-300"
        >
          <div className="transform hover:scale-105 transition-transform duration-300">
            <Image
              src="/onlyLogo.png"
              alt="CSI"
              height={45}
              width={78.75}
              priority
            />
          </div>
          <span className="hidden sm:block">CSI SJCET</span>
        </Link>
        <nav className="flex gap-3">
          <Link href="/">
            <button className="btn-secondary text-sm md:text-base px-4 md:px-6 py-2 md:py-3">
              Home
            </button>
          </Link>
          <Link href="/events">
            <button className="btn-secondary text-sm md:text-base px-4 md:px-6 py-2 md:py-3">
              Events
            </button>
          </Link>
        </nav>
      </div>
    </header>
  );
}
