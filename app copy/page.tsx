import HeroSection from "./components/HeroSection";
import Menu from "./components/menu/Menu";
export default function Home() {
  return (
    <main className="flex  flex-col justify-center">
      <header id="header" className="px-10 py-2 min-h-screen">
        <HeroSection />
      </header>
      <Menu />
    </main>
  );
}
