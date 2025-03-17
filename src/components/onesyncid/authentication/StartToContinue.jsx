"use client"
import { useRouter } from "next/navigation";
import Illustration from "../../../assets/images/Illustration.svg";
import OneSyncLogo from "../../../assets/images/Onesync-Logo.svg";

const StartToContinue = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-100">
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
            Before Start, you have to type your Phone number or Email to sign in
            or create an account.
          </p>
          <form className="space-y-5">
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
                className="w-full py-3 bg-yellow-500 text-blue-900 font-bold rounded shadow-md hover:bg-yellow-400 transition"
                type="button"
                onClick={() => router.push("/signin")}
              >
                Sign In
              </button>
              <button
                className="w-full py-3 border border-yellow-500 text-yellow-500 font-bold rounded shadow-md hover:border-yellow-400 hover:text-yellow-400 transition"
                type="button"
                onClick={() => router.push("/create-account")}
              >
                Create an account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StartToContinue;
