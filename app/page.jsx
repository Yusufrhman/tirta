import Carousel from "@/components/carousel/Carousel";
import slide1 from "@/public/carousel/tirtamusi.jpg";
import slide2 from "@/public/carousel/tirtamusi-2.jpg";
import slide3 from "@/public/carousel/tirtamusi-3.jpg";

import TEXTURE from "@/public/texture.svg";
import TEXTURE2 from "@/public/texture-2.svg";

import VEKTOR from "@/public/Vector.svg";
import BERITA1 from "@/public/berita-1.png";
import BERITA2 from "@/public/berita-2.png";


import {
  FaArrowRight,
  FaGlassWaterDroplet,
  FaHandPeace,
  FaPeopleRoof,
} from "react-icons/fa6";
import { MdIntegrationInstructions } from "react-icons/md";

import Image from "next/image";

const slidesBanner = [{ src: slide1 }, { src: slide2 }, { src: slide3 }];

export default function Home() {
  return (
    <main className="">
      <section className="bg-blue-700 py-10 relative overflow-hidden z-10">
        <section className="w-5/6 mx-auto ">
          {" "}
          <Image src={TEXTURE} className="absolute top-0 left-0" alt="" />
          <div className=" mx-auto aspect-[2.33]  overflow-hidden rounded-2xl">
            <Carousel slides={slidesBanner} />
          </div>
          <h1 className="text-5xl font-bold relative z-10 py-10">
            Bekerja Keras, Cerdas, dan{" "}
            <span className="text-orange-400">Ikhlas</span>
          </h1>
        </section>
      </section>

      <section className="relative">
        <Image src={VEKTOR} alt="" className=" absolute -top-44 z-0" />
        <section className="w-5/6 mx-auto py-20 relative z-10 flex flex-col gap-8">
          <section className="mx-auto py-20 relative z-10 flex flex-col gap-8">
            <h2 className="text-white font-bold text-2xl w-fit mx-auto bg-orange-400 px-3 py-1 rounded-full border-2">
              Our Vision
            </h2>
            <p className="text-black text-2xl text-center w-3/5 mx-auto">
              “Menjadi perusahaan smart happy yang unggul dalam penyediaan air
              minum dan pengelola air limbah di Indonesia pada tahun 2028”
            </p>
          </section>
          <section className="mx-auto py-20 relative z-10 flex flex-col gap-14">
            <h2 className="text-white font-bold text-2xl w-fit mx-auto bg-purple-600 px-3 py-1 rounded-full border-2">
              Our Mission
            </h2>
            <ul className="flex justify-center gap-4">
              <li>
                <div className="flex flex-col gap-4 w-fit items-center">
                  <FaGlassWaterDroplet color="#2D5FAB" size={100} />
                  <p className="text-black text-xl font-light w-3/5 text-center tracking-widest">
                    <span className="text-blue-500 text-2xl">M</span>enjadi
                    penyedia air minum yang handal
                  </p>
                </div>
              </li>
              <li>
                <div className="flex flex-col gap-4 w-fit items-center">
                  <MdIntegrationInstructions color="#2D5FAB" size={100} />
                  <p className="text-black text-xl font-light w-3/5 text-center tracking-widest">
                    <span className="text-blue-500 text-2xl">M</span>
                    engintegrasikan semua informasi
                  </p>
                </div>
              </li>
              <li>
                <div className="flex flex-col gap-4 w-fit items-center">
                  <FaPeopleRoof color="#2D5FAB" size={100} />
                  <p className="text-black text-xl font-light w-3/5 text-center tracking-widest">
                    <span className="text-blue-500 text-2xl">M</span>engutamakan
                    kepuasan/kebahagiaan pelanggan
                  </p>
                </div>
              </li>
              <li>
                <div className="flex flex-col gap-4 w-fit items-center">
                  <FaHandPeace color="#2D5FAB" size={100} />
                  <p className="text-black text-xl font-light w-3/5 text-center tracking-widest">
                    <span className="text-blue-500 text-2xl">M</span>emberikan
                    kesejahteraan dan kebahagiaan terbaik
                  </p>
                </div>
              </li>
            </ul>
          </section>
        </section>
      </section>
      <section className=" relative h-fit overflow-clip z-10 py-20 flex flex-col gap-8">
        <Image src={TEXTURE2} className="absolute left-0" alt="" />
        <section className="w-5/6 mx-auto relative z-10 ">
          <h2 className="text-blue-500 text-3xl underline font-bold drop-shadow-lg">
            Berita
          </h2>
        </section>
        <section className="flex items-center justify-between w-5/6 mx-auto gap-12 relative z-10">
          <div className="w-[40rem] aspect-[4/3] bg-blue-300 p-8 flex justify-center gap-3 rounded-xl">
            <Image src={BERITA1} alt="" className="rounded-lg w-[50%]" />
            <section className="flex flex-col justify-between">
              <section>
                <h4 className="text-black text-2xl">
                  TARIF PERUMDA TIRTA MUSI 2023
                </h4>
                <p className="text-lg text-black">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cumque delectus praesentium dolorem illum.
                </p>
              </section>
              <section className="text-right text-black">
                <button>
                  Selanjutnya <FaArrowRight color="black" className="inline" />
                </button>
              </section>
            </section>
          </div>
          <div className="w-[40rem] aspect-[4/3] bg-blue-300 p-8 flex justify-center gap-3 rounded-xl">
            <Image src={BERITA2} alt="" className="rounded-lg w-[50%]" />
            <section className="flex flex-col justify-between">
              <section>
                <h4 className="text-black text-2xl">
                  CARA SEDERHANA MENGETAHUI KEBOCORAN INSTALASI DALAM RUMAH ANDA
                </h4>
                <p className="text-lg text-black">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cumque delectus praesentium dolorem illum.
                </p>
              </section>
              <section className="text-right text-black">
                <button>
                  Selanjutnya <FaArrowRight color="black" className="inline" />
                </button>
              </section>
            </section>
          </div>
        </section>
      </section>
    </main>
  );
}
