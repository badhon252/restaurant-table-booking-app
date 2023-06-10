import Image from "next/image";
import Nav from "./Nav";
import "@/styles/style.css";
import PackagePng from "@/assests/image/package.png";

export default function HeroSection() {
  return (
    <header className="min-h-screen min-w-screen flex flex-col ">
      <Nav />
      <section className="flex justify-between items-center align-middle">
        <div className="py-10">
          <p className="py-3 sm:py-1 px-5 sm:px-2 font-bold font-mono border border-black border-dotted inline-block">
            IT IS A GOOD TIME FOR THE GREAT TASTE OF BURGERS
          </p>
          <h1 className="lg:text-8xl md:text-6xl font-extrabold sm:text-6xl xsm:text-4xl pt-5">
            BURGER
          </h1>
          <h4 className="lg:text-6xl md:text-4xl sm:text-2xl sm:font-bold">
            WEEK
          </h4>
        </div>
        <div>
          <Image src={PackagePng} alt="Package burger image"></Image>
        </div>
      </section>
    </header>
  );
}
