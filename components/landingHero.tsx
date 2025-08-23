import Image from "next/image"
import Link from "next/link"

export default function LandingHero(){
    return(
      <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex items-center justify-center px-6 py-20">
        <div className="max-w-6xl mx-auto text-center space-y-8">
          {/* Main heading with logo */}
          <div className="flex flex-col items-center space-y-6">
            <div className="transform hover:scale-105 transition-transform duration-300">
              <Image 
                src={'/onlyLogo.png'} 
                alt="CSI Logo" 
                height={180} 
                width={300}
                className="drop-shadow-lg"
                priority
              />
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-blue-800 leading-tight">
              Computer Society of India
            </h1>
          </div>
          
          {/* Subtitle */}
          <h2 className="text-xl md:text-2xl lg:text-3xl text-blue-700 font-semibold max-w-4xl mx-auto leading-relaxed">
            Join the Computer Society of India (CSI) — the nation&apos;s largest network of IT professionals, researchers, and students driving innovation and knowledge in computing
          </h2>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            From pioneering research to student communities, CSI fosters growth, collaboration, and learning opportunities in the ever-evolving world of technology
          </p>
          
          {/* Call-to-action buttons */}
          <nav className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Link href={'/about'}>
              <button className="bg-white text-blue-800 border-2 border-blue-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-300 hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-offset-2 w-full sm:w-auto min-w-[200px]">
                About Us
              </button>
            </Link>
            <Link href={'/about#membership'}>
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-offset-2 w-full sm:w-auto min-w-[200px]">
                Become A Member
              </button>
            </Link>
            <Link href={'/events'}>
              <button className="bg-white text-blue-800 border-2 border-blue-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-300 hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-offset-2 w-full sm:w-auto min-w-[200px]">
                Events
              </button>
            </Link>
          </nav>
        </div>
      </section>
    )
}