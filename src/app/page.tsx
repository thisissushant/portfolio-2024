"use client";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
// import { Skills } from "@/components/Skills";
import { TimelineDemo } from "@/components/Timeline";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col gap-8">
      <Navbar />
      <Hero />
      <TimelineDemo />
      {/* <Skills /> */}
    </div>
  );
}
