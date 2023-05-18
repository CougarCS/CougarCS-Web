import Loading from "../components/Loading";
import Example from "../components/Example";

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <Example />
      <Loading />
    </>
    
  )
}
