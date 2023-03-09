import Footer from "components/footer";
import Navbar from "components/navbar";
import Image from "next/image";
import tp from "../../public/images/Rectangle24.png";
const hb1 = () => {
  return (
    <main>
      
      <div className="grid w-full h-screen grid-cols-1 mb-8 sm:grid-cols-2">
        <div className="flex flex-col justify-center bg-gray-800">
          <form className="max-w-[400px] w-full mx-auto rounded-lg bg-gray-900 p-4  px-8">
            <h2 className="text-4xl font-bold text-center text-white dark:text-white">
              Details
            </h2>
            <div className="flex flex-col py-2 text-gray-400">
              <label>Event Name</label>
              <input
                className="p-2 mt-2 bg-gray-700 rounded-lg focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                type="text"
              />
            </div>
            <div className="flex flex-col py-2 text-gray-400">
              <label>Host</label>
              <input
                className="p-2 mt-2 bg-gray-700 rounded-lg focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                type="text"
              />
            </div>
            <div className="flex gap-8">
              <div className="flex flex-col py-2 text-gray-400">
                <label>Start Date</label>
                <input
                  className="p-2 mt-2 bg-gray-700 rounded-lg focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                  type="date"
                />
              </div>
              <div className="flex flex-col py-2 text-gray-400">
                <label> End Date</label>
                <input
                  className="p-2 mt-2 bg-gray-700 rounded-lg focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                  type="date"
                />
              </div>
            </div>

            <div className="flex gap-8">
              <div className="flex flex-col w-1/2 py-2 text-gray-400">
                <label>Time</label>
                <input
                  className="p-2 mt-2 bg-gray-700 rounded-lg focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                  type="time"
                />
              </div>
              <div className="flex flex-col w-1/2 py-2 text-gray-400">
                <label>Duration</label>
                <div className="flex">
                  <input
                    className="w-3/5 p-2 mt-2 bg-gray-700 rounded-lg rounded-r-none focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                    type="tel"
                  />
                  <label className="w-2/5 p-2 mt-2 bg-gray-700 rounded-lg rounded-l-none focus:border-blue-500 focus:bg-gray-800 focus:outline-none disabled placeholder:hrs">
                    hrs
                  </label>
                </div>
              </div>
            </div>
            <div className="flex flex-col py-2 text-gray-400">
              <label>Purpose</label>
              <input
                className="h-24 p-2 mt-2 bg-gray-700 rounded-lg focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                type="textarea"
              />
            </div>

            <button className="w-full py-2 my-5 font-semibold text-white bg-teal-500 rounded-lg shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40">
              Request
            </button>
          </form>
        </div>
        <div className="hidden sm:block">
          <Image className="object-cover w-full h-full" src={tp} alt="" />
        </div>
      </div>

      
    </main>
  );
};
export default hb1;
