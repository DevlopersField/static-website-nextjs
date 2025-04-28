import Navbar from "@/app/components/Navbar";

export default function Contact() {
  return (
    <div className="text-center ">
      <Navbar />
      <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
      <p className="text-lg">Email: yourname@example.com</p>
      <p className="text-lg">LinkedIn: your-linkedin-profile</p>
    </div>
  );
}
