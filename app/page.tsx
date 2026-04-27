import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" bg-zinc-50 font-sans dark:bg-black">
     <Nav />
     <Hero />
    </div>
  );
}
