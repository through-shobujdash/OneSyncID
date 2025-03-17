"use client";
import OneSyncLogo from "../../assets/images/Onesync-Logo.svg";
import Password_Illustration from "../../assets/images/Password-Illustration.svg";
import ThrouthLogo from "../../assets/images/through-logo.svg";

const page = () => {
  const trunOnNotification = () => {};

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-100">
      <div className="bg-blue-900 shadow-lg rounded-lg flex w-full max-w-5xl m-6 h-[90vh]">
        {/* Left Section */}
        <div className="w-1/2 m-2 p-5 flex flex-col items-center justify-center bg-white border-r border-gray-200 rounded-2xl">
          <h1 className="text-3xl font-bold text-blue-700 mb-4">
            <OneSyncLogo className="mb-6 w-70 h-auto" />
          </h1>
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
          <Password_Illustration className="mb-6 w-60 h-90" />
          <p className="text-sm text-gray-500">from</p>
          <ThrouthLogo className="mb-2 w-16 h-auto" />
        </div>

        {/* Right Section */}
        <div className="w-1/2 p-12 bg-blue-900 text-white rounded-2xl overflow-y-auto h-full">
          <div>
            <h2 className="text-3xl font-bold mb-4">Welcome to OneSyncID</h2>
            <p className="text-xs text-gray-400 mb-4">
              Thanks for your support. Now we hope you can enjoy your ride with
              us.
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
  );
};

export default page;
