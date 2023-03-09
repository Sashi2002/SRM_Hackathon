import Image from "next/image";
import tp from "../../public/images/Rectangle24.png";
import bose from "../../public/images/Bose.jpeg";
import hippo from "../../public/images/Hippocrates.jpg";
import radha from "../../public/images/Radhakrishnan.jpg";
import rama from "../../public/images/Ramanujan.jpg";
import turing from "../../public/images/Turing.jpeg";
import venkat from "../../public/images/Venkataraman.jpg";
import ganesh from "../../public/images/Auditorium.jpg";
const Booking = () => {
  return (
    <main className="text-[#0f171e]">
      {/* <Navbar /> */}
      <div className="py-10 text-center text-4xl font-bold">Hall Booking</div>
      <div className="flex items-center justify-center gap-28 mb-16 ">
        <div className="w-64 h-64 flex items-center hover:items-start hover:pt-10 justify-center hover:h-96 hover:w-72 bg-indigo-500 duration-500 rounded-lg">
          <div className="group inline-block relative transition ease-in-out delay-10  hover:-translate-y-3 hover:scale-110 duration-500">
            <div className="h-60 w-60">
              <Image src={ganesh} className="h-full w-full"></Image>
            </div>

            <div className="absolute hidden text-white text-m group-hover:block px-14 mt-4 font-semibold">
              <span className="">Main Auditorium</span>
              <p className="mx-2 mt-2">Capacity: 3000</p>
            </div>
          </div>
        </div>

        <div className="w-64 h-64 flex items-center hover:items-start hover:pt-10 justify-center hover:h-96 hover:w-72 bg-indigo-500 duration-500 rounded-lg">
          <div className="group inline-block relative transition ease-in-out delay-10  hover:-translate-y-3 hover:scale-110 duration-500 ">
            <div className="h-60 w-60">
              <Image src={bose} className="h-full w-full"></Image>
            </div>

            <div className="absolute hidden text-white text-m group-hover:block px-14 mt-4 font-semibold">
              <span className="">Sir. J. C. Bose Hall</span>
              <p className="mx-2 mt-2">Capacity: 120</p>
            </div>
          </div>
        </div>

        <div className="w-64 h-64  flex items-center hover:items-start hover:pt-10 justify-center hover:h-96 hover:w-72 bg-indigo-500 duration-500 rounded-lg">
          <div className="group inline-block relative transition ease-in-out delay-10  hover:-translate-y-3 hover:scale-110 duration-500 ">
            <div className="h-60 w-60">
              <Image src={hippo} className="h-full w-full"></Image>
            </div>

            <div className="absolute hidden text-white text-m group-hover:block px-14 mt-4 font-semibold">
              <span className="">Hippocrates Hall</span>
              <p className="mx-2 mt-2">Capacity: 600</p>
            </div>
          </div>
        </div>

        <div className="w-64 h-64 flex items-center hover:items-start hover:pt-10 justify-center hover:h-96 hover:w-72 bg-indigo-500 duration-500 rounded-lg">
          <div className="group inline-block relative transition ease-in-out delay-10  hover:-translate-y-3 hover:scale-110 duration-500 ">
            <div className="h-60 w-60">
              <Image src={radha} className="h-full w-full"></Image>
            </div>

            <div className="absolute hidden text-white text-m group-hover:block px-14 mt-4 font-semibold">
              <span className="">Dr. S. Radhakrishnan Hall</span>
              <p className="mx-2 mt-2">Capacity: 30</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-28 mb-16 ">
        <div className="w-64 h-64 flex items-center hover:items-start hover:pt-10 justify-center hover:h-96 hover:w-72 bg-indigo-500 duration-500 rounded-lg">
          <div className="group inline-block relative transition ease-in-out delay-10  hover:-translate-y-3 hover:scale-110 duration-500 ">
            <div className="h-60 w-60">
              <Image src={rama} className="h-full w-full"></Image>
            </div>

            <div className="absolute hidden text-white text-m group-hover:block px-14 mt-4 font-semibold">
              <span className="">Ramanujan Hall</span>
              <p className="mx-2 mt-2">Capacity: 60</p>
            </div>
          </div>
        </div>

        <div className="w-64 h-64 flex items-center hover:items-start hover:pt-10 justify-center hover:h-96 hover:w-72 bg-indigo-500 duration-500 rounded-lg">
          <div className="group inline-block relative transition ease-in-out delay-10  hover:-translate-y-3 hover:scale-110 duration-500 ">
            <div className="h-60 w-60">
              <Image src={tp} className="h-full w-full"></Image>
            </div>

            <div className="absolute hidden text-white text-m group-hover:block px-14 mt-4 font-semibold">
              <span className="">Mini Hall-1</span>
              <p className="mx-2 mt-2">Capacity: 300</p>
            </div>
          </div>
        </div>

        <div className="w-64 h-64 flex items-center hover:items-start hover:pt-10 justify-center hover:h-96 hover:w-72 bg-indigo-500 duration-500 rounded-lg">
          <div className="group inline-block relative transition ease-in-out delay-10  hover:-translate-y-3 hover:scale-110 duration-500 ">
            <div className="h-60 w-60">
              <Image src={turing} className="h-full w-full"></Image>
            </div>

            <div className="absolute hidden text-white text-m group-hover:block px-14 mt-4 font-semibold">
              <span className="">Turing Hall</span>
              <p className="mx-2 mt-2">Capacity: 120</p>
            </div>
          </div>
        </div>

        <div className="w-64 h-64 flex items-center hover:items-start hover:pt-10 justify-center hover:h-96 hover:w-72 bg-indigo-500 duration-500 rounded-lg">
          <div className="group inline-block relative transition ease-in-out delay-10  hover:-translate-y-3 hover:scale-110 duration-500 ">
            <div className="h-60 w-60">
              <Image src={venkat} className="h-full w-full"></Image>
            </div>

            <div className="absolute hidden text-white text-sm group-hover:block px-14 mt-2 font-semibold">
              <span className="">Dr. Venkatraman Ramakrishnan Hall</span>
              <p className="mx-2 mt-2 mb-4">Capacity: 60</p>
            </div>
          </div>
        </div>
      </div>

      {/* <Footer /> */}
    </main>
  );
};
export default Booking;
