import Link from "next/link"

export function LandingHeader () {
  return(
    <section>
      <h1>CSI</h1>
      <nav>
        <button><Link href={'/about'}/>About</button>
        <button><Link href={'/events'}/>Events</button>
      </nav>
    </section>
  )
}

export function AboutHeader () {
  return(
    <section>
      <h1>CSI</h1>
      <nav>
        <button><Link href={'/'}/>Home</button>
        <button><Link href={'/events'}/>Events</button>
      </nav>
    </section>
  )
}

export function EventsHeader() { 
  return(
  <section>
    <h1>CSI</h1>
    <nav>
      <button><Link href={'/'}/>Home</button>
      <button><Link href={'/about'}/>About</button>
    </nav>
  </section>
  )
}