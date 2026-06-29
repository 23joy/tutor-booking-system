import Image from "next/image";
import Navbar from "./components/Navbar";
import Featured from "./components/Featured";
import Banner from "./components/Banner";
import MediQueueWorks from "./components/MediQueueWorks";
import ChooseMedi from "./components/ChooseMedi";

export default function Home() {
  return (
    <main>
      <Banner></Banner>

      <Featured></Featured>
      <ChooseMedi></ChooseMedi>
      <MediQueueWorks></MediQueueWorks>
    </main>
  );
}
