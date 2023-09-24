import Link from "next/link";


export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <nav className="flex-1">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
        </ul>
      </nav>
      <h1 className="text-3xl font-bold underline">About page</h1>
    </div>
  );
}
