import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex h-screen items-center justify-center bg-black text-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
          Welcome to DSA sheet hub
        </h1>
        <p className="mt-4 text-lg sm:text-xl md:text-2xl">
          The application which contains list of dsa sheets
        </p>
        <Link
          href="/docs"
          className="mt-8 inline-block bg-gray-900 text-white font-semibold py-2 px-4 rounded hover:bg-gray-700"
        >
          Explore sheets
        </Link>
      </div>
    </main>
  );
}
