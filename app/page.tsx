import About from "@/components/About";
import Banner from "@/components/Banner";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Credentials from "@/components/Credentials";
import EgyptianProjects from "@/components/EgyptianProjects";
import Ecommerce from "@components/E-commerce.tsx";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="h-full w-full  bg-[url('/LooperGroup2.webp')] bg-no-repeat">
      <div className="flex flex-col gap-20">
        <Banner />
        <About />
        <Experience />
        <E-commerce />
        <EgyptianProjects />
        <Projects />
        <Credentials />
        <Footer />
      </div>
    </main>
  );
}
