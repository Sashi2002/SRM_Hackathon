import Navbar from "components/navbar";
import Footer from "components/footer";
import Image from "next/image";
import tp from "../../public/images/Rectangle24.png";
const Booking = () => {
  return (
    <main className="text-[#0f171e]">
      <Navbar />
      <div className="py-10 text-center text-4xl font-bold">Hall Booking</div>
      <div className="flex items-center justify-center gap-28 mb-16 ">
        <div className="w-64 h-64 flex items-center hover:items-start hover:pt-10 justify-center hover:h-96 hover:w-72 bg-indigo-500">
          <div className="group inline-block relative transition ease-in-out delay-10  hover:-translate-y-3 hover:scale-110 duration-300 ">
            <div className="h-60 w-60">
              <Image src={tp} className="h-full w-full"></Image>
            </div>

            <div className="absolute hidden text-white text-m group-hover:block px-14 mt-4 font-semibold">
              <span className="">Main Auditorium</span>
              <p className="mx-2 mt-2">Capacity: 3000</p>
            </div>
          </div>
        </div>

        <div className="w-64 h-64 flex items-center hover:items-start hover:pt-10 justify-center hover:h-96 hover:w-72 bg-indigo-500">
          <div className="group inline-block relative transition ease-in-out delay-10  hover:-translate-y-3 hover:scale-110 duration-300 ">
            <div className="h-60 w-60">
              <Image src={tp} className="h-full w-full"></Image>
            </div>

            <div className="absolute hidden text-white text-m group-hover:block px-14 mt-4 font-semibold">
              <span className="">Main Auditorium</span>
              <p className="mx-2 mt-2">Capacity: 3000</p>
            </div>
          </div>
        </div>

        <div className="w-64 h-64  flex items-center hover:items-start hover:pt-10 justify-center hover:h-96 hover:w-72 bg-indigo-500">
          <div className="group inline-block relative transition ease-in-out delay-10  hover:-translate-y-3 hover:scale-110 duration-300 ">
            <div className="h-60 w-60">
              <Image src={tp} className="h-full w-full"></Image>
            </div>

            <div className="absolute hidden text-white text-m group-hover:block px-14 mt-4 font-semibold">
              <span className="">Main Auditorium</span>
              <p className="mx-2 mt-2">Capacity: 3000</p>
            </div>
          </div>
        </div>

        <div className="w-64 h-64 flex items-center hover:items-start hover:pt-10 justify-center hover:h-96 hover:w-72 bg-indigo-500">
          <div className="group inline-block relative transition ease-in-out delay-10  hover:-translate-y-3 hover:scale-110 duration-300 ">
            <div className="h-60 w-60">
              <Image src={tp} className="h-full w-full"></Image>
            </div>

            <div className="absolute hidden text-white text-m group-hover:block px-14 mt-4 font-semibold">
              <span className="">Main Auditorium</span>
              <p className="mx-2 mt-2">Capacity: 3000</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-28 mb-16 ">
        <div className="w-64 h-64 flex items-center hover:items-start hover:pt-10 justify-center hover:h-96 hover:w-72 bg-indigo-500">
          <div className="group inline-block relative transition ease-in-out delay-10  hover:-translate-y-3 hover:scale-110 duration-300 ">
            <div className="h-60 w-60">
              <Image src={tp} alt="image" className="h-full w-full" />
            </div>

            <div className="absolute hidden text-white text-m group-hover:block px-14 mt-4 font-semibold">
              <span className="">Main Auditorium</span>
              <p className="mx-2 mt-2">Capacity: 3000</p>
            </div>
          </div>
        </div>

        <div className="w-64 h-64 flex items-center hover:items-start hover:pt-10 justify-center hover:h-96 hover:w-72 bg-indigo-500">
          <div className="group inline-block relative transition ease-in-out delay-10  hover:-translate-y-3 hover:scale-110 duration-300 ">
            <div className="h-60 w-60">
              <Image src={tp} className="h-full w-full"></Image>
            </div>

            <div className="absolute hidden text-white text-m group-hover:block px-14 mt-4 font-semibold">
              <span className="">Main Auditorium</span>
              <p className="mx-2 mt-2">Capacity: 3000</p>
            </div>
          </div>
        </div>

        <div className="w-64 h-64 flex items-center hover:items-start hover:pt-10 justify-center hover:h-96 hover:w-72 bg-indigo-500">
          <div className="group inline-block relative transition ease-in-out delay-10  hover:-translate-y-3 hover:scale-110 duration-300 ">
            <div className="h-60 w-60">
              <Image src={tp} className="h-full w-full" alt="image" />
            </div>

            <div className="absolute hidden text-white text-m group-hover:block px-14 mt-4 font-semibold">
              <span className="">Main Auditorium</span>
              <p className="mx-2 mt-2">Capacity: 3000</p>
            </div>
          </div>
        </div>

        <div className="w-64 h-64 flex items-center hover:items-start hover:pt-10 justify-center hover:h-96 hover:w-72 bg-indigo-500">
          <div className="group inline-block relative transition ease-in-out delay-10  hover:-translate-y-3 hover:scale-110 duration-300 ">
            <div className="h-60 w-60">
              <Image src={tp} alt="image" className="h-full w-full" />
            </div>

            <div className="absolute hidden text-white text-m group-hover:block px-14 mt-4 font-semibold">
              <span className="">Main Auditorium</span>
              <p className="mx-2 mt-2">Capacity: 3000</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
};
export default Booking;
