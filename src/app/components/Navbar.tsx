import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-center gap-8 bg-gray-800 py-4 text-white mb-10">
      <Link href="/" className="hover:text-cyan-400">Home</Link>
      <Link href="/about" className="hover:text-cyan-400">About</Link>
      <Link href="/projects" className="hover:text-cyan-400">Projects</Link>
      <Link href="/contact" className="hover:text-cyan-400">Contact</Link>
    </nav>
  );
}
