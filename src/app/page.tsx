import Image from "next/image";

export default function HomePage() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl font-bold">Welcome to My Gallery</h1>
        <p className="mt-4 text-lg">Subscribe to unlock premium content</p>
      </div>
      <div className="md:w-1/2">
        <Image src="/hero.png" alt="Hero" width={600} height={400} className="w-full rounded-xl shadow-md" />
      </div>
    </div>
  );
}
