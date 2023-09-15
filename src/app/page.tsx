import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const imageUrl =
    "https://images.unsplash.com/photo-1580286923998-09fb88152cc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1635&q=80";
  return (
    <main
      className="bg-black h-screen bg-cover flex justify-center items-center w-screen overflow-hidden relative"
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundPosition: "center",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        width: "100%",
      }}
    >
      <div className="before:absolute before:inset-0 before:bg-opacity-50 before:bg-black animate-fadeInOut"></div>
      <div className="relative">
        <Link href="main">
          <span className=" text-white font-thin tracking-[1rem] text-[100px]">
            SEOU<span className="font-black">LASH</span>
          </span>
        </Link>
      </div>
    </main>
  );
}
