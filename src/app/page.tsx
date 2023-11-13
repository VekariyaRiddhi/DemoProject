import Image from "next/image";
import Header from "./components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex items-center my-10">
        <Image
          className="ml-10"
          src="/w&s_image.jpg"
          alt="w&s_image"
          width={800}
          height={800}
        />
      </main>
    </>
  );
}
