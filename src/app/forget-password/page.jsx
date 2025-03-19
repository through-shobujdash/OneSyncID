"use client";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Illustration from "../../assets/images/Illustration.svg";
import OneSyncLogo from "../../assets/images/Onesync-Logo2.svg";
import ThrouthLogo from "../../assets/images/through-logo.svg";

const page = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    email: "",
    passkey: "",
    newPassword: "",
    confirPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const router = useRouter();

  const handleSelectArea = () => {
    console.log("fromdata", formData);
    setCurrentStep(2);
  };

  const handleCreateAccount = () => {
    console.log("fromdata", formData);
    setCurrentStep(3);
  };

  const handleNextPage = () => {
    console.log("fromdata", formData);
    setCurrentStep(4);
  };

  return (
    <div>
      {/* For Mobile Device */}
      <div className="flex sm:hidden  justify-center h-screen bg-blue-50">
        {currentStep === 1 && (
          <div className="w-full max-w-sm p-6 bg-white ">
            <div className="flex items-center justify-between mb-6">
              <ChevronLeft
                onClick={() => router.push("/start")}
                className="text-blue-600 cursor-pointer"
              />
            </div>
            <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">
              Forget Password
            </h2>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Phone/Email*"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
            />
            <div className="text-xs text-red-300">
              We'll send an OTP to your given address
            </div>

            <button
              onClick={handleSelectArea}
              className="w-full py-2 bg-blue-600 text-white rounded-sm my-40 hover:bg-blue-700"
            >
              Continue
            </button>
          </div>
        )}

        {currentStep === 2 && (
          <div className="w-full max-w-sm p-6 bg-white">
            <div className="flex items-center justify-between mb-6">
              <ChevronLeft
                onClick={() => setCurrentStep(1)}
                className="text-blue-600 cursor-pointer"
              />
            </div>

            <h1 className="text-2xl font-bold text-blue-600 text-center mb-8">
              Enter verification code
            </h1>

            <div className="flex flex-col items-center text-center">
              <p className="text-lg text-blue-600 mb-4">We send the code to</p>
              <div className="flex justify-evenly w-full mb-8 text-blue-600">
                <span className="text-black">0152105379</span>
                <span className="text-sm text-blue-600 underline cursor-pointer">
                  Edit
                </span>
              </div>

              {/* Code Input Boxes */}
              {/* <div className="flex space-x-2 mb-4">
                {Array(4)
                  .fill(0)
                  .map((_, index) => (
                    <input
                      key={index}
                      type="text"
                      maxLength="1"
                      className="w-12 h-12 text-center border border-blue-600 rounded-md focus:outline-none focus:border-blue-800"
                    />
                  ))}
              </div> */}
              <input
                type="text"
                name="passkey"
                value={formData.passkey}
                onChange={handleChange}
                placeholder="Enter your 8 digit Passkey*"
                className="w-full p-3 border border-gray-300 rounded bg-white text-blue-900 "
              />

              <p className="text-sm text-gray-600 mb-4">
                Code Expires in: <span className="text-blue-600">1:18 min</span>
              </p>

              <div className="flex space-x-4 w-full">
                <button className="w-full py-2 text-blue-600 border border-blue-600 rounded-md">
                  Send again
                </button>
                <button
                  onClick={handleCreateAccount}
                  className="w-full py-2 bg-blue-600 text-white rounded-md"
                >
                  Verify
                </button>
              </div>
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div className="w-full max-w-sm p-6 bg-white ">
            <div className="flex items-center justify-between mb-6">
              <ChevronLeft
                onClick={() => setCurrentStep(2)}
                className="text-blue-600 cursor-pointer"
              />
            </div>
            <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">
              New Password
            </h2>

            <div className="mb-4">
              <h1 className="w-full px-4 py-1 bg-green-300 text-green-900">
                Please create a new password that you don't use before in this
                site
              </h1>
            </div>

            <input
              type="password"
              name="newPassword"
              value={formData.newPassword}
              onChange={handleChange}
              placeholder="Create new password"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200 mt-2"
            />
            <p className="text-red-200 my-4 text-xs">
              Password must be minimum 8 characters and include at least one
              uppercase, lowercase, number and symbol
            </p>
            <input
              type="password"
              name="confirPassword"
              value={formData.confirPassword}
              onChange={handleChange}
              placeholder="Confirm new password"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200 mb-6"
            />

            <div className="flex items-center justify-between mb-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-blue-600"
                />
                <span className="ml-2 text-sm">Logout from all devices</span>
              </label>
            </div>

            <button
              onClick={handleCreateAccount}
              className="w-full py-2 bg-blue-600 text-white rounded-lg mb-4 hover:bg-blue-700"
            >
              Continue
            </button>
          </div>
        )}
      </div>

      {/* For Desktop Device */}
      <div className="hidden min-h-screen sm:flex items-center justify-center bg-blue-100">
        <div className="bg-blue-900 shadow-lg rounded-lg flex w-full max-w-5xl m-6 h-[90vh]">
          {/* Left Section */}
          <div className="w-1/2 m-2 p-10 flex flex-col  justify-center bg-white border-r border-gray-200 rounded-2xl">
            <h1 className="text-3xl font-bold text-blue-700 mb-4">
              <OneSyncLogo className="mb-6 h-auto" />
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
              <Illustration className="mb-6" />
              <p className="text-sm text-gray-500">from</p>
              <ThrouthLogo className="mb-2 w-16 h-auto" />
            </div>
          </div>

          {/* Right Section */}
          <div className="w-1/2 p-6 pt-18 md:mt-0 md:p-12 bg-blue-900 text-white rounded-2xl overflow-y-auto h-full">
            {currentStep === 1 && (
              // Step 1: Select Area Form
              <div>
                <h2 className="text-3xl font-bold mb-4">Forgot Password</h2>
                <p className="text-xs text-gray-400 mb-4">
                  Enter your Phone number or Email address where we send OTP to
                  fix your password
                </p>
                <div className="space-y-5">
                  <input
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter Phone number/Email*"
                    className="w-full p-3 border border-gray-300 rounded bg-white text-blue-900"
                  />

                  <button
                    onClick={handleSelectArea}
                    className="w-full py-3 mt-20 bg-yellow-500 text-blue-900 font-bold rounded shadow-md hover:bg-yellow-400 transition cursor-pointer"
                  >
                    Continue
                  </button>

                  <p className="text-center mt-4">
                    <Link
                      href="/singin"
                      className="text-white underline cursor-pointer"
                    >
                      Back
                    </Link>
                  </p>
                </div>
              </div>
            )}

            {currentStep === 2 && (
              // Step 2: Create Account Form
              <div>
                <h2 className="text-3xl font-bold mb-4">Enter OTP</h2>

                <div className="space-y-5">
                  <div>
                    <label className="block mb-2">
                      We send the code to{" "}
                      <span className="text-yellow-700">0150005873</span>
                    </label>
                    <input
                      type="text"
                      name="passkey"
                      value={formData.passkey}
                      onChange={handleChange}
                      placeholder="Enter your 8 digit Passkey*"
                      className="w-full p-3 border border-gray-300 rounded bg-white text-blue-900 "
                    />
                  </div>

                  <p className="text-xs text-gray-400 mt-20 ">
                    By signing up, I accept the OneSyncID{" "}
                    <span className="text-yellow-300 cursor-pointer">
                      Cloud terms of service{" "}
                    </span>
                    and acknowledge the{" "}
                    <span className="text-yellow-300 cursor-pointer">
                      privacy policy
                    </span>
                  </p>
                  <button
                    onClick={handleCreateAccount}
                    className="w-full py-3 bg-yellow-500 text-blue-900 font-bold rounded cursor-pointer"
                  >
                    Continue
                  </button>
                  <p className="text-center mt-4">
                    <button
                      onClick={() => setCurrentStep(1)}
                      className="text-white underline cursor-pointer"
                    >
                      Back
                    </button>
                  </p>
                </div>
              </div>
            )}

            {currentStep === 3 && (
              // Step 3: Verification Code Section
              <div>
                <h2 className="text-3xl font-bold mb-4">Create New Password</h2>

                <div className="space-y-5">
                  <input
                    type="password"
                    name="newPassword"
                    value={formData.newPassword}
                    onChange={handleChange}
                    placeholder="Create new password*"
                    className="w-full p-3 border border-gray-300 rounded bg-white text-blue-900"
                  />
                  <input
                    type="password"
                    name="confirPassword"
                    value={formData.confirPassword}
                    onChange={handleChange}
                    placeholder="Confirm new password*"
                    className="w-full p-3 border border-gray-300 rounded bg-white text-blue-900"
                  />

                  <p className="text-xs text-gray-400 mt-8 my-8">
                    By signing up, I accept the OneSyncID{" "}
                    <span className="text-yellow-300 cursor-pointer">
                      Cloud terms of service{" "}
                    </span>
                    and acknowledge the{" "}
                    <span className="text-yellow-300 cursor-pointer">
                      privacy policy
                    </span>
                  </p>
                  <button
                    onClick={handleNextPage}
                    className="w-full py-3 bg-yellow-500 text-blue-900 font-bold rounded cursor-pointer"
                  >
                    Continue
                  </button>
                  <p className="text-center mt-4">
                    <button
                      onClick={() => setCurrentStep(2)}
                      className="text-white underline cursor-pointer"
                    >
                      Back
                    </button>
                  </p>
                </div>
              </div>
            )}
            {currentStep === 4 && (
              // Step 3: Verification Code Section
              <div>
                <h2 className="text-3xl font-bold mb-4">New password update</h2>

                <p className="text-xs text-gray-400  ">
                  Thanks for support. Now we hope you can enjoy your ride with
                  us.
                </p>

                <div className="space-y-5">
                  <button
                    onClick={() => router.push("/signin")}
                    type="submit"
                    className="w-full py-3 bg-yellow-500 text-blue-900 font-bold rounded mt-20 cursor-pointer"
                  >
                    Back to Sing in
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
