import About from "@/components/About";
import Banner from "@/components/Banner";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Certificates from "@/components/Certificates";
import EgyptianProjects from "@/components/EgyptianProjects";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="h-full w-full  bg-[url('/LooperGroup2.png')] bg-no-repeat">
      <div className="flex flex-col gap-20">
        <Banner />
        <About />
        <Experience />
        <Certificates />
        <EgyptianProjects />
        <Projects />
        <Footer />
      </div>
    </main>
  );
}
