import Image from "next/image";
import LOGO from "@/public/logo/logo.png";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full h-fit shadow-lg bg-white sticky top-0 z-50">
      <section className="flex items-center justify-between w-5/6 mx-auto py-4">
        <div>
          <Link href={"/"}>
            <Image src={LOGO} alt="logo" width={80} />
          </Link>
        </div>
        <div className="flex gap-8">
          <ul className="flex text-sky-800 items-center gap-6 font-bold">
            <li>Profil</li>
            <li>Layanan</li>
            <li>Berita</li>
            <li>Hubungi Kami</li>
          </ul>
          <div className="w-[20svw] h-full relative">
            <FaSearch
              color="grey"
              className="absolute left-3 top-1/2 -translate-y-1/2"
            />
            <input
              type="search"
              className="bg-neutral-200 w-full text-lg rounded-lg pr-4 pl-10 py-2 text-neutral-500 outline-neutral-500 font-thin"
              placeholder="Cek no Pelanggan"
            />
          </div>
        </div>
      </section>
    </header>
  );
}
