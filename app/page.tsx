import { LandingHeader } from "@/components/headers";
import LandingHero from "@/components/landingHero";
import SBDetails from "@/components/sbDetails";

export default function Home() {
  return (
    <main className="min-h-screen">
      <LandingHeader/>
      <LandingHero/>
      <SBDetails/>
    </main>
  );
}
