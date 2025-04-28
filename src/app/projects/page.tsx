import Navbar from "@/app/components/Navbar";

export default function Projects() {
  return (
    <div className="text-center ">
      <Navbar />
      <h1 className="text-4xl font-bold mb-4">My Projects</h1>
      <ul className="space-y-2 text-lg">
        <li>✅ Portfolio Website</li>
        <li>✅ Blog Application</li>
        <li>✅ Weather App</li>
      </ul>
    </div>
  );
}
