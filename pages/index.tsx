import Link from "next/link";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import UserRegister from "../components/UserRegister";

export default function About() {
  return (
    <div className="flex flex-col h-screen">
      <NavBar />
      
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <UserRegister />
      <Footer/>
    </div>
  )
}
