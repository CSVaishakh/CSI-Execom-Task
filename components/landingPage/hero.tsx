import Image from "next/image";
import Link from "next/link";

export default function LandingHero() {
  return (
    <section className="min-h-screen gradient-bg flex items-center justify-center px-6 py-20">
      <div className="section-container text-center space-y-8 animate-fade-in-up">
        {/* Main heading with logo */}
        <div className="flex flex-col items-center space-y-6">
          <div className="animate-scale-in">
            <Image
              src="/onlyLogo.png"
              alt="CSI Logo"
              height={160}
              width={280}
              className="drop-shadow-xl"
              priority
            />
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gradient leading-tight animate-fade-in-up">
            Computer Society of India
          </h1>
        </div>

        {/* Subtitle */}
        <div className="animate-slide-in-left">
          <h2 className="text-xl md:text-2xl lg:text-3xl text-blue-700 font-semibold max-w-4xl mx-auto leading-relaxed">
            Join the Computer Society of India (CSI) — the nation&apos;s largest
            network of IT professionals, researchers, and students driving
            innovation and knowledge in computing
          </h2>
        </div>

        {/* Description */}
        <div className="animate-slide-in-right">
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            From pioneering research to student communities, CSI fosters growth,
            collaboration, and learning opportunities in the ever-evolving world
            of technology
          </p>
        </div>

        {/* Call-to-action buttons */}
        <nav className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 animate-fade-in-up">
          <Link href="/about">
            <button className="btn-secondary text-lg px-8 py-4 w-full sm:w-auto min-w-[200px]">
              About Us
            </button>
          </Link>
          <Link href="/about#membership">
            <button className="btn-primary text-lg px-8 py-4 w-full sm:w-auto min-w-[200px]">
              Become A Member
            </button>
          </Link>
          <Link href="/events">
            <button className="btn-secondary text-lg px-8 py-4 w-full sm:w-auto min-w-[200px]">
              Events
            </button>
          </Link>
        </nav>
      </div>
    </section>
  );
}
