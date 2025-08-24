import LandingHeader from "@/components/landingPage/header";
import LandingHero from "@/components/landingPage/hero";
import SBDetails from "@/components/landingPage/sbDetails";

export default function Home() {
  return (
    <main className="min-h-screen">
      <LandingHeader />
      <LandingHero />
      <SBDetails />
    </main>
  );
}
