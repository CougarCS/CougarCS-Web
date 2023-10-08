import Link from "next/link";
import NavBar from "../../components/NavBar";


export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <NavBar />
      <h1 className="text-3xl font-bold underline">Gallery page</h1>
    </div>
  );
}
