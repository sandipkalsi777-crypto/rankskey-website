import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 h-[105px] border-b border-white/10 bg-[#08202C]/95 backdrop-blur-xl">
      <div className="mx-auto flex h-full max-w-[1460px] items-center justify-between px-6">

        {/* Logo */}
        <Link href="/" aria-label="Rankskey Home">
          <Image
            src="/Rankskey-logo-new.jpg"
            alt="Rankskey"
            width={150}
            height={150}
            priority
            className="h-12 w-12 object-contain"
          />
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-11 md:flex">

          <Link
            href="/"
            className="text-[16px] font-semibold text-white transition hover:text-[#2BF97B]"
          >
            Home
          </Link>

          <Link
            href="/#services"
            className="text-[16px] font-semibold text-white transition hover:text-[#2BF97B]"
          >
            Services
          </Link>

          <Link
            href="/about"
            className="text-[16px] font-semibold text-white transition hover:text-[#2BF97B]"
          >
            About
          </Link>

          <Link
            href="/contact"
            className="text-[16px] font-semibold text-white transition hover:text-[#2BF97B]"
          >
            Contact
          </Link>

          <Link
            href="/contact"
            className="ml-4 rounded-full bg-[#2BF97B] px-7 py-3.5 text-[16px] font-semibold text-[#08202C] transition hover:bg-[#20e96d]"
          >
            Let's Talk
          </Link>

        </nav>

        {/* Mobile Menu */}
        <details className="relative md:hidden">
          <summary className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-full border border-white/10 bg-white/5 text-xl text-white">
            ☰
          </summary>

          <div className="absolute right-0 top-14 w-60 rounded-2xl border border-white/10 bg-[#0A2936] p-2 shadow-2xl">

            <Link
              href="/"
              className="block rounded-xl px-4 py-3 text-sm text-white/70 hover:bg-white/5 hover:text-[#2BF97B]"
            >
              Home
            </Link>

            <Link
              href="/#services"
              className="block rounded-xl px-4 py-3 text-sm text-white/70 hover:bg-white/5 hover:text-[#2BF97B]"
            >
              Services
            </Link>

            <Link
              href="/about"
              className="block rounded-xl px-4 py-3 text-sm text-white/70 hover:bg-white/5 hover:text-[#2BF97B]"
            >
              About
            </Link>

            <Link
              href="/contact"
              className="block rounded-xl px-4 py-3 text-sm text-white/70 hover:bg-white/5 hover:text-[#2BF97B]"
            >
              Contact
            </Link>

            <Link
              href="/contact"
              className="mt-1 block rounded-xl bg-[#2BF97B] px-4 py-3 text-center text-sm font-semibold text-[#08202C]"
            >
              Let's Talk →
            </Link>

          </div>
        </details>

      </div>
    </header>
  );
}