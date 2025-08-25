import Link from "next/link";
import Image from "next/image";

export default function EventsHeader() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-blue-200 shadow-md animate-fade-in-down h-24 min-h-24 overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 animate-shimmer"></div>
      </div>
      
      <div className="section-container flex justify-between items-center py-10 h-full relative z-10">
        <Link
          href="/"
          className="flex items-center gap-2 text-blue-800 text-2xl md:text-3xl font-bold hover:text-blue-700 transition-all duration-300 group"
        >
          <div className="transform hover:scale-105 transition-transform duration-300 group-hover:animate-bounce-gentle">
            <Image
              src="/onlyLogo.png"
              alt="CSI"
              height={45}
              width={78.75}
              priority
              className="drop-shadow-lg"
            />
          </div>
          <span className="hidden sm:block transform group-hover:scale-105 transition-transform duration-300">
            CSI SJCET
          </span>
        </Link>
        
        <nav className="flex gap-3">
          <Link href="/">
            <button className="btn-secondary text-sm md:text-base px-4 md:px-6 py-2 md:py-3 relative overflow-hidden group">
              <span className="relative z-10 transition-colors duration-300">Home</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>
          </Link>
          <Link href="/about">
            <button className="btn-secondary text-sm md:text-base px-4 md:px-6 py-2 md:py-3 relative overflow-hidden group">
              <span className="relative z-10 transition-colors duration-300">About</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>
          </Link>
        </nav>
      </div>
      
      {/* Floating particles */}
      <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-float opacity-60"></div>
      <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-purple-400 rounded-full animate-float opacity-40" style={{animationDelay: '1.5s'}}></div>
      <div className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-indigo-400 rounded-full animate-float opacity-50" style={{animationDelay: '2.5s'}}></div>
    </header>
  );
}
