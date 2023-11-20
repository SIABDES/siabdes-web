import Image from 'next/image';
import bgLanding from '../../public/pie-chart-two-color-61eb2.svg';
import bgLanding2 from '../../public/mountain-two-color.svg';
import bg from '../../public/finance-analytics-monochromatic.svg';
import Link from 'next/link';

export default function Section1() {
  return (
    <section className="relative h-screen overflow-hidden bg-gradient-to-br from-[#88ffef] via-white to-gray-50 ">
      {/* bg-gradient-to-br via-white from-[#88ffef] to-white via-white from-[#88ffef] to-gray-50 */}
      <div className="absolute top-0 left-0 w-full h-full">
        {/* <Image
          src={bgLanding}
          alt="background image"
          className="w-[220px] h-[220px] object-cover absolute top-0 left-0 "
        />
        <Image
          src={bgLanding2}
          alt="background image 2"
          className="w-[900px] h-full object-cover absolute -bottom-64"
        />
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{ background: 'rgba(0, 0, 0, 0.2)' }}
        ></div> */}
      </div>

      <div className="flex h-full justify-between items-center">
        <div className="flex-1 flex flex-col items-start justify-center pl-32">
          <h1 className="text-black text-4xl mb-4 font-bold">
            Aplikasi Penyusunan dan <br /> Pencatatan Laporan <br /> Keuangan
            BUMDes
          </h1>
          <h1 className="text-[#00BFA6] text-5xl mb-4 font-semibold text-center ">
            Berbasis SAK EMKM
          </h1>
          <h3 className="text-black text-sm mb-8">
            Membantu para pengelola BUMDes dalam menjalankan kegiatan bisnis
            BUMDes <br /> secara profesional melalui dukungan sebuah software
            aplikasi berbasis website <br /> yang sudah dilengkapi dengan fitur
            Laporan Keuangan berstandar akuntansi.
          </h3>
          <div className="flex flex-col md:flex-row justify-center items-center lg:justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-4">
            <button className="px-10 py-3 rounded-2xl font-bold shadow-2xl text-[#00BFA6]  bg-slate-100 border-[#00BFA6] border-2 ">
              Register
            </button>
            <button className="flex px-10 py-3 font-bold rounded-2xl shadow-2xl bg-[#00BFA6]  text-slate-100">
              Log in
            </button>
          </div>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center">
          <Image src={bg} alt="bg" width={550} />
        </div>
      </div>
    </section>
  );
}
