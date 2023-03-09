import Image from "next/image";
import ub from "../../public/images/UB.jpg";

const about = () => {
  return (
    <main>
      <div className="bg-[url('/images/Background.png')]">
        <div className="py-10 text-center text-2xl font-bold">
          SRM Hall Booking Facility
        </div>
        <div className="flex flex-cols">
          <Image src={ub} alt="image" className="h-800 w-400 mb-24 ml-20" />
          <div className="pl-32 text-4xl mt-4 font-bold">
            ABOUT
            <div className="font-normal text-sm pr-28">
              SRM Institute of Science and Technology (SRMIST) offers hall
              booking facilities for various events and functions on its campus.
              The university has multiple halls and auditoriums that are
              available for both internal and external events. The halls at
              SRMIST are equipped with modern facilities and amenities including
              air-conditioning, audio-visual equipment, and seating
              arrangements. To book a hall at SRMIST, interested parties can
              visit the university's website and fill out the online booking
              form. The form requires details such as the name of the
              organization, the purpose of the event, the preferred hall, the
              date and time of the event, and the number of attendees. Once the
              form is submitted, the concerned authorities at SRMIST will review
              the request and respond to the booking inquiry. Overall, SRMIST's
              hall booking facilities provide a convenient option for hosting
              events on its campus. With modern amenities and a supportive
              staff, SRMIST is an ideal venue for hosting a wide range of
              events.
            </div>
            <div className="flex flex-cols font-medium text-lg text-white">
              <button className="px-8 py-1 mt-12 ml-20 bg-black rounded-2xl text-white mr-10">
                Hall Booking
              </button>
              <button className="px-8 py-1 mt-12 ml-5 bg-black rounded-2xl text-white mr-10">
                User Manual
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default about;
