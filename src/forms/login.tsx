import Navbar from "components/navbar";
import Footer from "components/footer";
import Image from "next/image";
// import srm from "../../public/images/srm.jpg";
const Login = () => {
  return (
    <main>
      <Navbar />
      <div className="grid w-full h-screen grid-cols-1 sm:grid-cols-2">
        <div className="hidden sm:block">
          <Image className="object-cover w-full h-full" src="images/srm.jpg" alt="" />
        </div>
        <div className="flex flex-col justify-center bg-gray-800">
          <form className="max-w-[400px] w-full mx-auto rounded-lg bg-gray-900 p-8 px-8">
            <h2 className="text-4xl font-bold text-center text-white dark:text-white">
              SIGN IN
            </h2>
            <div className="flex flex-col py-2 text-gray-400">
              <label>Username</label>
              <input
                className="p-2 mt-2 bg-gray-700 rounded-lg focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                type="text"
              />
            </div>
            <div className="flex flex-col py-2 text-gray-400">
              <label>Password</label>
              <input
                className="p-2 mt-2 bg-gray-700 rounded-lg focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                type="password"
              />
            </div>
            <div className="flex justify-between py-2 text-gray-400">
              <p className="flex items-center">
                <input className="mr-2" type="checkbox" /> Remember Me
              </p>
              <p>Forgot Password</p>
            </div>
            <button className="w-full py-2 my-5 font-semibold text-white bg-teal-500 rounded-lg shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40">
              SIGNIN
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </main>
  );
};
export default Login;
