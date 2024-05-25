import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main className="h-full w-full  bg-[url('/LooperGroup2.webp')] bg-no-repeat">
      <div className="flex flex-col gap-20">
        <Banner />
        <Footer />
      </div>
    </main>
  );
}
