import { Nav } from "../components/layout/Nav";
import { Footer } from "../components/layout/Footer";
import { HomeBanner } from "../components/content/HomeBanner";
import { HomeBenefits } from "../components/content/HomeBenefits";

export function Home() {
  return (
    <>
      <Nav />
      <HomeBanner />
      <HomeBenefits />
      <Footer />
    </>
  );
}

