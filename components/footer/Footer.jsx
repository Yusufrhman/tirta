import Image from "next/image";
import LOGO from "@/public/logo/logo.png";

export default function Footer() {
  return (
    <footer className="bg-sky-800 text-white">
      <section className=" px-8 py-16 flex gap-48 w-4/5 mx-auto">
        <Image src={LOGO} alt="" className="w-[10rem] h-[10rem] aspect-square" />
        <section className=" flex flex-col justify-between">
          <p className="text-xl font-bold">KONTAK</p>
          <p className="text-lg">
            Jl. Rambutan Ujung No. 1, 30 Ilir, Ilir Barat II, 30 Ilir, Ilir
            Barat II, 30 Ilir, Ilir Bar. II, Kota Palembang, Sumatera Selatan
            30129
          </p>
          <p className="text-lg">Telp. (0711) 355222</p>
        </section>
        <section className=" flex flex-col justify-between">
          <p className="text-xl font-bold">KONTAK</p>
          <p className="text-lg">
            Jl. Rambutan Ujung No. 1, 30 Ilir, Ilir Barat II, 30 Ilir, Ilir
            Barat II, 30 Ilir, Ilir Bar. II, Kota Palembang, Sumatera Selatan
            30129
          </p>
          <p className="text-lg">Telp. (0711) 355222</p>
        </section>
      </section>
      <p className="mx-auto py-8 w-fit">© Copyright 2024. "PDAM TIRTAMUSI PALEMBANG". All rights reserved.</p>
    </footer>
  );
}
