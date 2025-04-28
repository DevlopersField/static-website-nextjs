// import Image from "next/image";
import Navbar from "@/app/components/Navbar";
export default function Home() {
  return (
    <div className="text-center">
      <Navbar />
      <h1 className="text-4xl font-bold mb-4">Welcome to My Website</h1>
      <p className="text-lg">This is a simple static website built with Next.js, Tailwind, and TypeScript.</p>
    </div>
  );
}
