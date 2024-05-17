import Image from "next/image";
import NavBar from "../src/components/NavBar/NavBar"
import MainHome from "@/pages/home";

export default function Home() {
  return (
    <main>
      <NavBar />
      <MainHome />
    </main>
  );
}
