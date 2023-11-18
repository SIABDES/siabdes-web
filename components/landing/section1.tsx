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

// import Image from 'next/image';
// import bgLanding from '../../public/bg-landing.jpg';
// import bg from '../../public/bg.jpg';

// export default function Section1() {
//   return (
//     <section className="relative h-screen overflow-hidden">
//       {/* <div className="absolute top-0 left-0 w-full h-full">
//         <Image
//           src={bgLanding}
//           alt="background image"
//           className="w-full h-full object-cover absolute top-0 left-0"
//         />
//         <div
//           className="absolute top-0 left-0 w-full h-full"
//           style={{ background: 'rgba(1, 1, 1, 0.2)' }}
//         ></div>
//       </div> */}
//       <div>
//         <Image
//           src={bg}
//           alt="bg"
//           width={500}
//           className="absolute bottom-0 right-0"
//         />
//       </div>
//       <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center gap-y-5">
//         <h1 className="text-black text-5xl text-center mb-4 font-bold">
//           Aplikasi Penyusunan dan Pencatatan <br /> Laporan Keuangan BUMDes
//         </h1>
//         <h1 className="text-blue-600 text-7xl text-center mb-4 font-semibold">
//           Berbasis SAK EMKM
//         </h1>
//         <h3 className="text-black text-2xl text-center mb-8">
//           Membantu para pengelola BUMDes dalam menjalankan kegiatan bisnis
//           BUMDes secara profesional melalui dukungan sebuah software aplikasi
//           berbasis website yang sudah dilengkapi dengan fitur Laporan Keuangan
//           berstandar akuntansi.
//         </h3>
//       </div>
//     </section>
//   );
// }

{
  /* <div className="text-white flex space-x-10">
          <div className="flex space-x-4">
            <svg
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              viewBox="0 4 19 24"
              width={17}
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="mr-1 text-indigo-400 transition-colors duration-300 ease-in-out transform hover:scale-110"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              ></path>
            </svg>
            <p className="">No credit card required</p>
          </div>
          <div className="flex space-x-4">
            <svg
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              viewBox="0 4 19 24"
              width={17}
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="mr-1 text-indigo-400 transition-colors duration-300 ease-in-out transform hover:scale-110"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              ></path>
            </svg>
            <p className="">No time limit on Free plan</p>
          </div>
        </div>
        <div>
          <div className="flex space-x-4">
            <div>
              <button className="flex px-6 py-3 rounded bg-violet-400 hover:bg-violet-500 text-white transition-colors duration-300 ease-in-out transform hover:scale-110">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-width="3"
                  viewBox="0 0 24 24"
                  width={20}
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  className="mr-1"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                  ></path>
                </svg>
                Download
              </button>
              <div className="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 p-1 rounded-lg transition-colors duration-300 ease-in-out cursor-pointer hover:text-[#EEEBFF] hover:bg-[rgba(238,235,255,0.1)]"
                >
                  <path
                    fill="currentColor"
                    d="M13.093 5.333a1 1 0 0 0-.817.983v4.94a1 1 0 0 0 1 1h5.953a1 1 0 0 0 1-1v-6.05a1 1 0 0 0-1.183-.983l-5.953 1.11Zm-.817 14.37a1 1 0 0 0 .82.984l5.953 1.092a1 1 0 0 0 1.18-.984v-6.05a1 1 0 0 0-1-1h-5.953a1 1 0 0 0-1 1v4.959Zm-9.462-8.449a1 1 0 0 0 1 1h5.568a1 1 0 0 0 1-1V6.911a1 1 0 0 0-1.163-.987l-5.568.923a1 1 0 0 0-.837.986v3.421Zm0 6.956a1 1 0 0 0 .84.987l5.568.907a1 1 0 0 0 1.16-.987v-4.372a1 1 0 0 0-1-1H3.814a1 1 0 0 0-1 1v3.465Z"
                  ></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 p-1 rounded-lg transition-colors duration-300 ease-in-out cursor-pointer hover:text-[#EEEBFF] hover:bg-[rgba(238,235,255,0.1)]"
                >
                  <path
                    fill="currentColor"
                    d="M17.517 12.556c-.01-1.598.715-2.803 2.178-3.691-.818-1.172-2.056-1.817-3.687-1.94-1.545-.123-3.235.9-3.853.9-.654 0-2.15-.859-3.326-.859C6.4 7.004 3.82 8.902 3.82 12.765c0 1.141.209 2.32.626 3.534.558 1.599 2.569 5.515 4.667 5.452 1.096-.026 1.872-.778 3.3-.778 1.385 0 2.102.778 3.325.778 2.117-.03 3.935-3.59 4.465-5.194-2.838-1.338-2.686-3.919-2.686-4Z"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M15.054 5.407c1.188-1.41 1.08-2.695 1.045-3.157-1.05.06-2.264.715-2.955 1.519-.762.862-1.21 1.929-1.114 3.131 1.135.087 2.17-.497 3.024-1.493Z"
                  ></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  fill="none"
                  viewBox="0 0 80 80"
                  className="w-8 h-8 p-1 rounded-lg transition-colors duration-300 ease-in-out cursor-pointer hover:text-[#EEEBFF] hover:bg-[rgba(238,235,255,0.1)]"
                >
                  <path
                    fill="currentColor"
                    d="M61.489 56.13c-.073-.202-.169-.618-.236-.903l-.014-.057c-.181-.821-.475-2.12-1.446-3.185.434-2.454.143-5.046-.873-7.73-.99-2.61-2.636-5.264-5.033-8.108l-.055-.067c-1.68-2.112-2.712-3.507-2.69-5.45l.007-.563c.05-3.616.127-9.078-3.184-12.439-1.712-1.742-4.034-2.625-6.901-2.628h-.034c-3.371 0-5.995.98-7.8 2.912-3.096 3.311-2.745 8.358-2.534 11.37.044.626.085 1.219.077 1.574-.137 1.84-.46 3.2-1.716 5.016-2.083 2.49-4.813 6.283-6.166 10.355-.616 1.842-.896 3.595-.837 5.231 0 0-.007.527-.213.761-.14.158-.56.268-.56.268-.115.049-.312.116-.466.168l-.324.115c-.559.2-2.257.807-3.224 2.63-.386.72-.581 1.54-.581 2.44 0 .592.085 1.153.148 1.545l.023.153c.042.276.101.673.11.878-.463 1.335-.907 3.229-.024 4.966l.013.023c1.031 1.98 3.07 2.403 3.737 2.54.66.138 1.346.216 2.013.292 1.169.132 2.38.27 3.21.709l.008.005c2.517 1.322 5.114 1.769 7.299 1.265 1.407-.317 2.62-1.05 3.485-2.083.299-.05.6-.107.904-.167.774-.148 1.574-.303 2.569-.358l.065-.005c.41-.034 1.062.062 1.753.16.56.081 1.2.175 1.893.227a6.514 6.514 0 0 0 5.527 3.005c.185 0 .37-.008.553-.021 2.393-.187 4.72-1.493 6.553-3.675l.01-.013c.6-.725 1.692-1.255 2.744-1.769.558-.273 1.135-.553 1.68-.883 1.631-.992 2.504-2.283 2.6-3.839v-.03c.093-1.886-1.026-3.458-2.068-4.642l-.002.008Z"
                  ></path>
                  <path
                    fill="#000"
                    fill-opacity="0.8"
                    d="M37.161 29.532c-.02-.143.192-.234.325-.294.171-.07.395-.1.558-.01.042.02.08.07.06.112-.041.122-.244.101-.356.16-.101.053-.181.172-.304.172-.1.01-.272-.041-.283-.143v.003Zm2.507-.031c.101.052.181.171.303.171.112 0 .284-.041.294-.153.02-.143-.192-.234-.325-.294-.171-.07-.394-.1-.558-.01-.042.02-.08.07-.06.112.031.132.234.111.346.171v.003Zm21.78 31.468c-.051.831-.66 1.4-1.41 1.858-1.511.914-3.784 1.602-5.163 3.267-1.442 1.714-3.216 2.698-4.901 2.83-1.673.133-3.247-.638-4.088-2.332v-.01a3.3 3.3 0 0 1-.255-.68c-2.182.122-4.078-.538-5.59-.416-2.23.122-3.63.66-4.9.67-.486 1.075-1.452 1.784-2.629 2.05-1.623.376-3.662 0-5.67-1.055-1.877-.995-4.26-.904-6.015-1.267-.883-.182-1.655-.507-2.039-1.247-.377-.74-.304-1.756.224-3.216.17-.517.041-1.288-.081-2.109-.06-.394-.122-.802-.122-1.197 0-.436.07-.862.283-1.257.457-.862 1.197-1.229 1.878-1.47.68-.244 1.299-.405 1.724-.842.528-.558 1.024-1.46 1.684-2.049-.265-1.745.02-3.592.628-5.407 1.278-3.844 3.976-7.527 5.893-9.81 1.634-2.322 2.11-4.19 2.283-6.564.112-3.226-2.485-13.737 7.904-13.716 8.207.01 7.74 8.665 7.69 13.319-.03 3.054 1.655 5.122 3.39 7.303 1.543 1.826 3.56 4.494 4.717 7.548.942 2.496 1.308 5.255.376 8.026.143.052.283.122.416.202.143.08.272.182.405.294.67.569.883 1.452 1.065 2.273.192.82.366 1.592.73 1.997 1.127 1.257 1.612 2.181 1.57 3.013l.004-.006Zm-21.78-32.907c.366.09.904.244 1.32.447-.214-1.24.456-2.385 1.196-2.333.904.031 1.41 1.572.922 2.769-.08.192-.283.345-.394.467.68.234 1.116.416 1.277.497.803-.964 1.097-2.657.437-4.099-.995-2.171-3.47-2.21-4.465.042a4.038 4.038 0 0 0-.293 2.21Zm-4.688 1.906c.792-.579.7-.478.597-.558-.81-.701-.67-2.78.182-2.852.639-.052 1.096 1.086.974 1.99.314-.213.68-.367 1.034-.468.17-1.958-.915-3.397-1.938-3.397-1.917 0-2.434 3.805-.852 5.285h.003Zm-.954 2.12c.154.496.618 1.065 1.491 1.553.792.467 1.218 1.166 2.029 1.522.265.112.579.192.974.213 1.867.111 2.75-1.146 3.875-1.512 1.187-.376 2.039-1.117 2.304-1.836.324-.862-.213-1.49-1.065-1.847-1.146-.496-1.655-.527-2.294-.943-1.044-.67-1.906-.903-2.628-.903-1.46 0-2.353.994-2.831 1.441-.052.052-.803.597-1.431 1.065-.426.335-.57.75-.426 1.247h.002ZM30.63 57.733l-1.99-3.613c-.69-.932-1.4-1.5-2.22-1.623-.782-.122-1.278.143-1.795.701-.485.517-.893 1.247-1.452 1.826-.792.66-.942.629-1.99 1.005-.638.224-1.145.468-1.5 1.146-.273.506-.213 1.239-.091 2.028.122.803.304 1.655.06 2.426v.02c-.507 1.39-.507 2.203-.265 2.679.802 1.563 4.727.618 7.76 2.22 3.184 1.665 7.366 1.735 7.639-1.826.213-2.08-3.195-4.97-4.158-6.989h.002Zm15.612 3.631c.325-1.117.64-2.16.691-2.942.08-1.543.161-2.912.447-4.047.314-1.278.943-2.343 2.171-2.769.234-2.14 1.896-2.14 3.886-1.267 1.917.862 2.639 1.623 2.314 2.646.101 0 .203-.01.426 0 .527-1.714-1.452-2.841-3.114-3.53.293-1.218.244-2.443-.042-3.62-.608-2.566-2.293-4.85-3.571-5.984-.234-.01-.213.192.265.66 1.177 1.085 3.763 4.992 2.364 8.612a4.032 4.032 0 0 0-1.107-.143c-.538-2.953-1.776-5.397-2.395-6.553-1.166-2.17-2.992-6.625-3.773-9.708-.458.65-1.258 1.207-2.263 1.522-.478.153-.984.558-1.613.914-1.41.81-3.044.893-4.3-.122-.458-.366-.811-.771-1.279-1.044a10.251 10.251 0 0 1-.628-.416c-.203 3.834-2.769 8.654-3.987 11.434-.841 1.997-1.34 4.14-1.4 6.238-2.21-2.953-.597-6.727.265-8.358.964-1.784 1.117-2.283.883-2.109-.873 1.42-2.231 3.683-2.758 6.005-.273 1.208-.325 2.434.03 3.571.357 1.138 1.128 2.182 2.497 3.034 0 0 2.517 1.452 3.886 3.296.75 1.015.984 1.896.75 2.527-.255.68-.974.904-1.693.904.485.608 1.044 1.32 1.46 1.99 3.815 2.607 8.34 1.592 11.594-.73l-.006-.01Zm13.127-2.932c-1.016-1.146-.73-3.358-1.735-4.22-.701-.609-1.38-.549-2.293-.518-.782.894-2.618 1.99-3.896 1.655-1.166-.294-1.826-1.655-1.907-2.992-.03.02-.07.031-.101.052-.72.395-1.127 1.096-1.39 2.14-.254 1.034-.345 2.384-.425 3.927-.07 1.197-.629 2.678-1.006 4.12-.355 1.34-.59 2.555-.111 3.682.73 1.47 1.979 2.07 3.418 1.959 1.439-.112 3.083-.995 4.423-2.587 2.231-2.699 6.32-3.013 6.413-4.717.03-.517-.315-1.32-1.39-2.496v-.005ZM34.848 32.08c.202.192.477.457.81.72.67.527 1.602 1.075 2.768 1.075 1.166 0 2.283-.598 3.226-1.096a9.055 9.055 0 0 0 1.501-1.055c.395-.345.598-.639.315-.67-.284-.031-.265.265-.608.517-.447.324-.985.75-1.41.994-.751.427-1.98 1.034-3.034 1.034-1.055 0-1.896-.485-2.527-.984-.315-.255-.58-.507-.782-.701-.153-.143-.192-.468-.437-.497-.142-.01-.181.377.172.66l.005.003Z"
                  ></path>
                </svg>
              </div>
            </div>
            <div>
              <button className="px-6 py-3 rounded text-indigo-500 bg-slate-100 hover:bg-slate-50">
                Sign up for free
              </button>
            </div> 
          </div>
    </div> */
}
