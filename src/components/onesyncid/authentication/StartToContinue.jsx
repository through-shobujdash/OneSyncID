"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Illustration from "../../../assets/images/Illustration.svg";
import OneSyncLogo from "../../../assets/images/Onesync-Logo2.svg";
import ThroughLogo from "../../../assets/images/through-logo.svg";

const StartToContinue = () => {
  const router = useRouter();
  const [phoneOremail, setPhoneOremail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [email, setEmail] = useState(null);
  const [alertText, setAlertText] = useState(null);

  // Helper function to check if the input is a Bangladeshi phone number
  const isBangladeshiPhoneNumber = (input) => {
    const phoneRegex = /^(?:\+88|88)?(01[3-9]\d{8})$/;
    return phoneRegex.test(input);
  };

  // Helper function to check if the input is a valid email
  const isValidEmail = (input) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(input);
  };

  // Improved Sign In Handler
  const handleSignIn = async () => {
    console.log("phoneOremail:", phoneOremail);

    if (!phoneOremail.trim()) {
      setAlertText("Please enter your phone number or email to continue.");
      return;
    }

    if (isBangladeshiPhoneNumber(phoneOremail)) {
      setPhoneNumber(phoneOremail);
      setEmail(null); // Clear email state if input is a phone number
      router.push("/signin");
    } else if (isValidEmail(phoneOremail)) {
      setEmail(phoneOremail);
      setPhoneNumber(null); // Clear phone number state if input is an email
      router.push("/signin");
    } else {
      setAlertText("Please enter a valid Bangladeshi phone number or email.");
    }
  };

  // Improved Create Account Handler
  const handleCreateAccount = async () => {
    console.log("phoneOremail:", phoneOremail);

    if (!phoneOremail.trim()) {
      setAlertText("Please enter your phone number or email to continue.");
      return;
    }

    if (isBangladeshiPhoneNumber(phoneOremail)) {
      setPhoneNumber(phoneOremail);
      setEmail(null);
      router.push("/create-account");
    } else if (isValidEmail(phoneOremail)) {
      setEmail(phoneOremail);
      setPhoneNumber(null);
      router.push("/create-account");
    } else {
      setAlertText("Please enter a valid Bangladeshi phone number or email.");
    }
  };

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
                  name="phoneOremail"
                  value={phoneOremail}
                  onChange={(e) => setPhoneOremail(e.target.value)}
                  placeholder="Phone Number/Email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-600"
                />
                {alertText && (
                  <p className="text-sm text-red-400 justify-end">
                    {alertText}
                  </p>
                )}
              </div>
            </div>

            <div className="flex space-x-4 w-full">
              <button
                onClick={handleSignIn}
                className="w-full py-2 bg-blue-600 text-white rounded-md cursor-pointer"
              >
                Sign In
              </button>
              <button
                onClick={handleCreateAccount}
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
          <div className="w-1/2 m-2 p-10 flex flex-col justify-center bg-white border-r border-gray-200 rounded-2xl">
            <h1 className="text-3xl font-bold text-blue-700 mb-4">
              <OneSyncLogo className="mb-6  h-auto" />
            </h1>
            <div className="flex flex-col  justify-center items-center">
              <p className="text-xl font-semibold text-blue-700 text-center mb-6">
                <span className="text-[#025FC9]">One app</span>
                <span className="text-[#002D94]">
                  {" "}
                  for <br /> every kind{" "}
                </span>
                <span className="text-[#025FC9]"> of verification</span>
              </p>
              {/* Directly using the imported SVG as a component */}
              <Illustration className="mb-6 h-auto" />
              <p className="text-sm text-gray-500 ">from</p>
              <ThroughLogo className="mb-6 h-auto" />
            </div>
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
                  name="phoneOremail"
                  value={phoneOremail}
                  onChange={(e) => setPhoneOremail(e.target.value)}
                  placeholder="Phone Number/Email"
                  type="text"
                />
                {alertText && (
                  <p className="text-sm text-red-400 justify-end">
                    {alertText}
                  </p>
                )}
              </div>
              <div className="flex space-x-4">
                <button
                  className="w-full py-3 bg-yellow-500 text-blue-900 font-bold rounded shadow-md hover:bg-yellow-400 transition cursor-pointer"
                  onClick={handleSignIn}
                >
                  Sign In
                </button>
                <button
                  className="w-full py-3 border border-yellow-500 text-yellow-500 font-bold rounded shadow-md hover:border-yellow-400 hover:text-yellow-400 transition cursor-pointer"
                  onClick={handleCreateAccount}
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
