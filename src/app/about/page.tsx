import Navbar from "@/app/components/Navbar";

export default function About() {
  return (
    <div className="text-center ">
      <Navbar />
      <h1 className="text-4xl font-bold mb-4">About Me</h1>
      <p className="text-lg">I'm learning Next.js, TypeScript, and Tailwind CSS to build awesome projects!</p>
    </div>
  );
}
