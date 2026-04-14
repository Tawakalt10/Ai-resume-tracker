import type { Route } from "./+types/home";
import Navbar from "~/components/Navbar";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumind" },
    { name: "description", content: "Smart feedback for your dream job!" },
  ];
}

export default function Home() {
  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
    <Navbar />
<section className="main-section">
  <div className="page-heading">
<h1 className="section-title">Track your Applications & Resume Rating</h1>
<h2> Review your submissions and check AI-powered feedback</h2>
  </div>
</section>

{[
  {
    title: 'Resume for Tee Codes',
    thumbnail: '...'
  },
   {
    title: 'Resume for Tee Codes',
    thumbnail: '...'
  },

   {
    title: 'Resume for Tee Codes',
    thumbnail: '...'
  },

   {
    title: 'Resume for Tee Codes',
    thumbnail: '...'
  },
  

]}
  </main>;
}
