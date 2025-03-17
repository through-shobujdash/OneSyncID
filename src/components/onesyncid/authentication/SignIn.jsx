"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import OneSyncLogo from "../../../assets/images/Onesync-Logo.svg";
import ThrouthLogo from "../../../assets/images/through-logo.svg";
import TowStepVerifacation from "../../../assets/images/Two-step-verification.svg";

const SignIn = () => {
 
  const [currentStep, setCurrentStep] = useState(1);
  const router = useRouter();

  const handleSelectArea = (e) => {
    e.preventDefault();
    setCurrentStep(2);
  };

  const handleCreateAccount = (e) => {
    e.preventDefault();
    setCurrentStep(3);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-100">
      <div className="bg-blue-900 shadow-lg rounded-lg flex w-full max-w-5xl m-6 h-[90vh]">
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
          <TowStepVerifacation className="mb-6 w-80 h-auto" />
          <p className="text-sm text-gray-500">from</p>
          <ThrouthLogo className="mb-2 w-16 h-auto" />
        </div>

        {/* Right Section */}
        <div className="w-1/2 p-12 bg-blue-900 text-white rounded-2xl overflow-y-auto h-full">
          {currentStep === 1 && (
            // Step 1: Select Area Form
            <div>
              <h2 className="text-3xl font-bold mb-4">Sign In to Continue</h2>
              <p className="text-xs text-gray-400 mb-4">
                Don't have an account?{" "}
                <a
                  onClick={() => router.push("/create-account")}
                  className="text-yellow-500 underline cursor-pointer"
                >
                  Create an account
                </a>
              </p>
              <form onClick={handleSelectArea} className="space-y-5">
                <input
                  type="text"
                  placeholder="User name*"
                  className="w-full p-3 border border-yellow-500 rounded bg-white text-blue-900"
                />
                <input
                  type="password"
                  placeholder="Password*"
                  className="w-full p-3 border border-yellow-500 rounded bg-white text-blue-900"
                />

                {/* Remember Me and Forgot Password Section */}
                <div className="flex items-center justify-between">
                  <label className="flex items-center text-blue-900 text-xs">
                    <input
                      type="checkbox"
                      className="form-checkbox text-yellow-500"
                    />
                    <span className="ml-2 text-white">Remember me</span>
                  </label>
                  <button
                    onClick={() =>
                      router.push("/welcome-notificationo-onesyncId")
                    }
                    className="text-xs text-white underline"
                  >
                    Forgot Password?
                  </button>
                </div>

                <p className="text-xs text-gray-400 mb-4">
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
                  type="submit"
                  className="w-full py-3 bg-yellow-500 text-blue-900 font-bold rounded shadow-md hover:bg-yellow-400 transition"
                >
                  Continue
                </button>

                <div className="flex items-center my-6">
                  <div className="flex-1 h-px bg-gray-400" />
                  <span className="px-3 text-gray-400">Or</span>
                  <div className="flex-1 h-px bg-gray-400" />
                </div>

                <button
                  type="button"
                  className="w-full py-3 border border-yellow-500 text-yellow-500 font-bold rounded hover:bg-yellow-500 hover:text-white transition"
                >
                  Sign In with PassKey
                </button>

                <button
                  type="button"
                  className="w-full py-3 border border-yellow-500 text-yellow-500 font-bold rounded hover:bg-yellow-500 hover:text-white transition"
                >
                  Sign In with One Time Password
                </button>

                <p className="text-center mt-4">
                  <a href="#" className="text-white underline">
                    Back
                  </a>
                </p>
              </form>
            </div>
          )}

          {currentStep === 2 && (
            // Step 2: Create Account Form
            <div>
              <h2 className="text-3xl font-bold mb-4">Create an account</h2>
              <p className="text-xs text-gray-400 mb-4">
                To find your passkey. You have to find your confimation assage
                which is send you to when you create a new account in OneSyncID
              </p>
              <form onClick={handleCreateAccount} className="space-y-5">
                <input
                  type="text"
                  placeholder="Enter your 8 digit Passkey*"
                  className="w-full p-3 border border-yellow-500 rounded bg-white text-blue-900 "
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
                  type="submit"
                  className="w-full py-3 bg-yellow-500 text-blue-900 font-bold rounded"
                >
                  Continue
                </button>
                <p className="text-center mt-4">
                  <a href="#" className="text-white underline">
                    Back
                  </a>
                </p>
              </form>
            </div>
          )}

          {currentStep === 3 && (
            // Step 3: Verification Code Section
            <div>
              <h2 className="text-3xl font-bold mb-4">
                Enter verification code
              </h2>

              <form onClick={handleCreateAccount} className="space-y-5">
                <div>
                  <label className="block mb-2">
                    We send the code to{" "}
                    <span className="text-yellow-700">0150005873</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your 8 digit Passkey*"
                    className="w-full p-3 border border-yellow-500 rounded bg-white text-blue-900 "
                  />
                </div>

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
                  onClick={() =>
                    router.push("/welcome-notificationo-onesyncId")
                  }
                  type="submit"
                  className="w-full py-3 bg-yellow-500 text-blue-900 font-bold rounded"
                >
                  Continue
                </button>
                <p className="text-center mt-4">
                  <a href="#" className="text-white underline">
                    Back
                  </a>
                </p>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignIn;
