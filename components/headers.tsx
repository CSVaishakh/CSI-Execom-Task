import Link from "next/link";
import Image from "next/image";

export function LandingHeader() {
  return (
    <section className="flex justify-between items-center p-4 px-24 bg-white border-b-4 border-blue-300 shadow-lg">
      <h1 className="flex items-center gap-3 text-blue-800 text-3xl font-bold">
        <Image src={"/csi.png"} alt="CSI" height={200} width={350} />
      </h1>
      <nav className="flex gap-4">
        <Link href={"/about"}>
          <button className="bg-white text-blue-800 border-2 border-blue-300 px-6 py-3 rounded-lg font-semibold hover:bg-blue-300 hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2">
            About
          </button>
        </Link>
        <Link href={"/events"}>
          <button className="bg-white text-blue-800 border-2 border-blue-300 px-6 py-3 rounded-lg font-semibold hover:bg-blue-300 hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2">
            Events
          </button>
        </Link>
      </nav>
    </section>
  );
}

export function AboutHeader() {
  return (
    <section className="flex justify-between items-center p-4 px-24 bg-white border-b-4 border-blue-300 shadow-lg">
      <h1 className="flex items-center gap-3 text-blue-800 text-3xl font-bold">
        <Image src={"/csi.png"} alt="CSI" height={200} width={350} />
      </h1>
      <nav className="flex gap-4">
        <Link href={"/"}>
          <button className="bg-white text-blue-800 border-2 border-blue-300 px-6 py-3 rounded-lg font-semibold hover:bg-blue-300 hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2">
            Home
          </button>
        </Link>
        <Link href={"/events"}>
          <button className="bg-white text-blue-800 border-2 border-blue-300 px-6 py-3 rounded-lg font-semibold hover:bg-blue-300 hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2">
            Events
          </button>
        </Link>
      </nav>
    </section>
  );
}

export function EventsHeader() {
  return (
    <section className="flex justify-between items-center p-4 px-24 bg-white border-b-4 border-blue-300 shadow-lg">
      <h1 className="flex items-center gap-3 text-blue-800 text-3xl font-bold">
        <Image src={"/csi.png"} alt="CSI" height={200} width={350} />
      </h1>
      <nav className="flex gap-4">
        <Link href={"/"}>
          <button className="bg-white text-blue-800 border-2 border-blue-300 px-6 py-3 rounded-lg font-semibold hover:bg-blue-300 hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2">
            Home
          </button>
        </Link>
        <Link href={"/about"}>
          <button className="bg-white text-blue-800 border-2 border-blue-300 px-6 py-3 rounded-lg font-semibold hover:bg-blue-300 hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2">
            About
          </button>
        </Link>
      </nav>
    </section>
  );
}
