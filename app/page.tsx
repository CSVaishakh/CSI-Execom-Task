import { LandingHeader } from "@/components/headers";
import LandingHero from "@/components/landingHero";
import SBDetails from "@/components/sbDetails";

export default function Home() {
  return (
    <section>
      <LandingHeader/>
      <LandingHero/>
      <SBDetails/>
    </section>
  );
}
