import { FooterComponent, HeaderComponent } from "../../components/modules";
import {
  Testimoni,
  OurMap,
  Partner,
  Favorite,
  Teamwork,
  Hero,
} from "../../components/molecules";

export default function Home() {
  return (
    <>
      <HeaderComponent />
      <Hero />
      <Teamwork />
      {/* <Favorite /> */}
      <Partner />
      <OurMap />
      {/* <Testimoni /> */}
      <FooterComponent />
    </>
  );
}
