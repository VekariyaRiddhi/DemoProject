"use client";
import Image from "next/image";
import Content from "./Content";

const MainContent = () => {
  return (
    <main className="lg:flex md:flex-wrap items-center justify-center my-auto lg:w-full">
      <Image
        className="xl:mx-16 md:mx-12 sm:mx-9 block flex-1 lg:w-64 md:w-full"
        src="/w&s_image.jpg"
        alt="w&s_image"
        style={{ maxHeight: "60vh" }}
        width={800}
        height={700}
      />
      <Content />
    </main>
  );
};

export default MainContent;
