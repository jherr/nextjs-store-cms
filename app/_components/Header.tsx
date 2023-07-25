import Link from "next/link";

export default function Header() {
  return (
    <header className="flex flex-row items-center justify-between px-4 py-2 bg-blue-900 text-white rounded-b-2xl">
      <h1 className="text-2xl font-bold">
        <Link href="/">Store CMS</Link>
      </h1>
    </header>
  );
}
