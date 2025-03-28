"use client";
import OneSyncLogo from "../../assets/images/Onesync-Logo2.svg";
import Password_Illustration from "../../assets/images/Password-Illustration.svg";
import ThrouthLogo from "../../assets/images/through-logo.svg";

const page = () => {
  const trunOnNotification = () => {};

  return (
    <div>
      {/* For Mobile Device */}
      <div className="flex sm:hidden  justify-center h-screen bg-blue-50">
        <div className="w-full max-w-sm p-6 bg-white ">
          <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">
            Welcome
          </h2>

          <Password_Illustration className=" mx-auto w-60 h-70" />
          <p className="text-xl font-semibold text-blue-700 text-center mb-6">
            <span className="text-[#025FC9]">
              {" "}
              Your all-in-one app for <br />{" "}
            </span>
            <span className="text-[#002D94]">
              {" "}
              one time verification <br />
            </span>
          </p>

          <button
            // onClick={handleSelectArea}
            className="w-full py-2 bg-blue-600 text-white rounded-lg mb-4 hover:bg-blue-700"
          >
            Turn on notification
          </button>

          <button className="w-full py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50">
            I'll turn on later
          </button>
        </div>
      </div>

      {/* For DeskTop Device */}
      <div className="hidden min-h-screen sm:flex items-center justify-center bg-blue-100">
        <div className="bg-blue-900 shadow-lg rounded-lg flex w-full max-w-5xl m-6 h-[90vh]">
          {/* Left Section */}
          <div className="w-1/2 m-2 p-5 flex flex-col justify-center bg-white border-r border-gray-200 rounded-2xl">
            <h1 className="text-3xl font-bold text-blue-700 mb-4">
              <OneSyncLogo className="mb-6 h-auto" />
            </h1>
            <div className="flex flex-col  justify-center items-center">
              <p className="text-xl font-semibold text-blue-700 text-center mb-6">
                <span className="text-[#025FC9]">
                  {" "}
                  Your all-in-one app for <br />{" "}
                </span>
                <span className="text-[#002D94]">
                  {" "}
                  one time verification <br />
                </span>
              </p>
              <Password_Illustration className="mb-6" />
              <p className="text-sm text-gray-500">from</p>
              <ThrouthLogo className="mb-2 w-16 h-auto" />
            </div>
          </div>

          {/* Right Section */}
          <div className="w-1/2 p-6 pt-18 md:mt-0 md:p-12 bg-blue-900 text-white rounded-2xl overflow-y-auto h-full">
            <div>
              <h2 className="text-3xl font-bold mb-4">Welcome to OneSyncID</h2>
              <p className="text-xs text-gray-400 mb-4">
                Thanks for your support. Now we hope you can enjoy your ride
                with us.
              </p>

              <div onClick={trunOnNotification} className="space-y-5 mt-20">
                <button
                  type="submit"
                  className="w-full py-3 bg-yellow-500 text-blue-900 font-bold rounded shadow-md hover:bg-yellow-400 transition"
                >
                  Turn on notification
                </button>

                <button
                  type="button"
                  className="w-full py-3 border border-yellow-500 text-yellow-500 font-bold rounded hover:bg-yellow-500 hover:text-white transition"
                >
                  I'll turn on letter
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
