"use client";
import Image from "next/image";
import Header from "./components/Header";
import Content from "./components/Content";

export default function Home() {
  return (
    <>
      <Header />
      <main className="lg:flex md:inline-block items-center my-10 sm:my-7">
        <Image
          className="mx-16 block sm:mb-9"
          src="/w&s_image.jpg"
          alt="w&s_image"
          width={800}
          height={700}
        />
        <Content />
      </main>
    </>
  );
}
