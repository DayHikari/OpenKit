import Link from "next/link";

export default function Header () {
  return(
    <section className="w-full h-16 grid grid-cols-2 p-2 items-center border-b-4 border-double border-amber-800">
      <Link href="/" className="font-serif text-lg">
        Home
      </Link>
      <Link href="/login" className="justify-self-end">
      Login
      </Link>
    </section>
  )
}