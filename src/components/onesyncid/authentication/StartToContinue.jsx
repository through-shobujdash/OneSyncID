"use client";
import { useRouter } from "next/navigation";
import Illustration from "../../../assets/images/Illustration.svg";
import OneSyncLogo from "../../../assets/images/Onesync-Logo.svg";

const StartToContinue = () => {
  const router = useRouter();

  return (
    <div>
    

      {/* For Mobile Device */}
      <div className="flex sm:hidden items-center justify-center h-screen bg-white">
        <div className="w-full max-w-sm p-6 bg-white">
          <div className="flex flex-col  ">
            <p className="text-xl font-semibold text-blue-700 text-center mb-6">
              <span className="text-[#025FC9]">One app</span>
              <span className="text-[#002D94]">
                {" "}
                for <br /> every kind{" "}
              </span>
              <span className="text-[#025FC9]"> of verification</span>
            </p>

            <div className="mx-auto my-10">
              <Illustration className="mb-6 w-60 h-auto" />
            </div>

            <div className="w-full flex flex-col justify-start mb-4">
              <h1 className=" mb-2 text-xs justify-self-start">
                Type Phone Number or Email to Continue
              </h1>
              <div>
                <input
                  type="text"
                  placeholder="Phone Number/Email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-600"
                />
              </div>
            </div>

            <div className="flex space-x-4 w-full">
              <button
                onClick={() => router.push("/signin")}
                className="w-full py-2 bg-blue-600 text-white rounded-md cursor-pointer"
              >
                Sign In
              </button>
              <button
                onClick={() => router.push("/create-account")}
                className="w-full py-2 text-blue-600 border border-blue-600 rounded-md cursor-pointer"
              >
                Create an account
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* For DextTop De */}
      <div className="hidden  min-h-screen sm:flex items-center justify-center bg-blue-100">
        <div className="bg-blue-900 shadow-lg rounded-lg flex w-full max-w-5xl m-6">
          {/* Left Section */}
          <div className="w-1/2 m-2 p-10 flex flex-col items-center justify-center bg-white border-r border-gray-200 rounded-2xl">
            <h1 className="text-3xl font-bold text-blue-700 mb-4">
              <OneSyncLogo className="mb-6 w-70 h-auto" />
            </h1>
            <p className="text-xl font-semibold text-blue-700 text-center mb-6">
              <span className="text-[#025FC9]">One app</span>
              <span className="text-[#002D94]">
                {" "}
                for <br /> every kind{" "}
              </span>
              <span className="text-[#025FC9]"> of verification</span>
            </p>
            {/* Directly using the imported SVG as a component */}
            <Illustration className="mb-6 w-60 h-auto" />
            <p className="text-sm text-gray-500">from</p>
            <p className="text-sm text-blue-600 font-semibold">Thawte</p>
          </div>

          {/* Right Section */}
          <div className="w-1/2 p-12 bg-blue-900 text-white flex flex-col justify-center rounded-2xl">
            <h2 className="text-3xl font-bold mb-4">Start to Continue</h2>
            <p className="mb-6 text-sm">
              Before Start, you have to type your Phone number or Email to sign
              in or create an account.
            </p>
            <div className="space-y-5">
              <div>
                <label className="sr-only" htmlFor="phone-email">
                  Phone Number/Email
                </label>
                <input
                  className="w-full p-3 border border-gray-400 rounded bg-blue-800 text-white placeholder-gray-300 focus:outline-none"
                  id="phone-email"
                  placeholder="Phone Number/Email"
                  type="text"
                />
              </div>
              <div className="flex space-x-4">
                <button
                  className="w-full py-3 bg-yellow-500 text-blue-900 font-bold rounded shadow-md hover:bg-yellow-400 transition cursor-pointer"
                  onClick={() => router.push("/signin")}
                >
                  Sign In
                </button>
                <button
                  className="w-full py-3 border border-yellow-500 text-yellow-500 font-bold rounded shadow-md hover:border-yellow-400 hover:text-yellow-400 transition cursor-pointer"
                  onClick={() => router.push("/create-account")}
                >
                  Create an account
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartToContinue;
