"use client";

import { ChevronLeft, Fingerprint, ScanEye } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import OneSyncLogo from "../../assets/images/Onesync-Logo2.svg";
import ThrouthLogo from "../../assets/images/through-logo.svg";
import TowStepVerifacation from "../../assets/images/Two-step-verification.svg";

const page = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    passkey: "",
    otp: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectArea = () => {
    console.log("Form Data:", formData);
    setCurrentStep(2);
  };

  const handleCreateAccount = () => {
    console.log("Form Data:", formData);
    setCurrentStep(3);
  };

  const handleSingIn = () => {
    console.log("Form Data:", formData);

    router.push("/welcome-notificationo-onesyncId");
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
              Sign In to continue
            </h2>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">
                User name*
              </label>
              <input
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
                type="text"
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">
                Password*
              </label>
              <div className="flex items-center">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                />
                <button className="ml-2 p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                  <Fingerprint className="rounded-full w-4 h-4  border-2 border-white" />
                </button>
                <button className="ml-2 p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                  <ScanEye className="rounded-full w-4 h-4  border-2 border-white" />
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between mb-4">
              <label className="flex items-center">
                <input
                  onClick={() => setShowPassword((prev) => !prev)}
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-blue-600"
                />
                <span className="ml-2 text-sm">Show password</span>
              </label>
              <Link
                href="/forget-password"
                className="text-sm text-blue-600 hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            <div className="text-sm text-center mt-20">
              By signing in, I accept the{" "}
              <Link href="#" className="text-blue-600 underline">
                OneSyncID Cloud terms of service
              </Link>{" "}
              and acknowledge the{" "}
              <Link href="#" className="text-blue-600 underline">
                privacy policy
              </Link>
              .
            </div>

            <button
              onClick={handleSelectArea}
              className="w-full py-2 bg-blue-600 text-white rounded-lg mb-4 hover:bg-blue-700 cursor-pointer"
            >
              Continue
            </button>

            <div className="text-center text-sm mb-4">Or</div>

            <button className="w-full py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50">
              Log in with pass key/OTP
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
                      placeholder="OTP"
                      value={formData.otp}
                      onChange={handleChange}
                      maxLength="1"
                      className="w-12 h-12 text-center border border-blue-600 rounded-md focus:outline-none focus:border-blue-800"
                    />
                  ))}
              </div> */}
              <div>
                <label className="block mb-2">
                  We send the code to{" "}
                  <span className="text-yellow-700">0150005873</span>
                </label>
                <input
                  type="text"
                  name="otp"
                  value={formData.otp}
                  onChange={handleChange}
                  placeholder="Enter your 8 digit Passkey*"
                  className="w-full p-3 border border-yellow-500 rounded bg-white text-blue-900 "
                />
              </div>

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
              Enter pass key
            </h2>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">
                Enter Pass key/OTP*
              </label>
              <input
                type="text"
                name="passkey"
                placeholder="Passkey"
                value={formData.passkey}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
              />
            </div>

            <div className="text-sm text-center mt-50">
              By signing in, I accept the{" "}
              <Link href="#" className="text-blue-600 underline">
                OneSyncID Cloud terms of service
              </Link>{" "}
              and acknowledge the{" "}
              <Link href="#" className="text-blue-600 underline">
                privacy policy
              </Link>
              .
            </div>

            <button
              onClick={handleSingIn}
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
          <div className="w-1/2 m-2 p-10 flex flex-col justify-center bg-white border-r border-gray-200 rounded-2xl">
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
              <TowStepVerifacation className="mb-6  h-auto" />
              <p className="text-sm text-gray-500">from</p>
              <ThrouthLogo className="mb-2  h-auto" />
            </div>
          </div>

          {/* Right Section */}
          <div className="w-1/2 p-6 pt-18 md:mt-0 md:p-12 bg-blue-900 text-white rounded-2xl overflow-y-auto h-full">
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
                <div className="space-y-5">
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    placeholder="User name*"
                    className="w-full p-3 border border-gray-300 rounded bg-white text-blue-900"
                  />
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password*"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded bg-white text-blue-900"
                  />

                  {/* Remember Me and Forgot Password Section */}
                  <div className="flex items-center justify-between">
                    <label className="flex items-center text-blue-900 text-xs">
                      <input
                        onClick={() => setShowPassword((prev) => !prev)}
                        type="checkbox"
                        className="form-checkbox text-yellow-500 "
                      />
                      <span className="ml-2 text-white">Remember me</span>
                    </label>
                    <button
                      onClick={() => router.push("/forget-password")}
                      className="text-xs text-white underline cursor-pointer"
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
                    onClick={handleSelectArea}
                    className="w-full py-3 bg-yellow-500 text-blue-900 font-bold rounded shadow-md hover:bg-yellow-400 transition cursor-pointer"
                  >
                    Continue
                  </button>

                  <div className="flex items-center my-6">
                    <div className="flex-1 h-px bg-gray-400" />
                    <span className="px-3 text-gray-400">Or</span>
                    <div className="flex-1 h-px bg-gray-400" />
                  </div>

                  <button className="w-full py-3 border border-yellow-500 text-yellow-500 font-bold rounded hover:bg-yellow-500 hover:text-white transition cursor-pointer">
                    Sign In with PassKey
                  </button>

                  <button className="w-full py-3 border border-yellow-500 text-yellow-500 font-bold rounded hover:bg-yellow-500 hover:text-white transition cursor-pointer">
                    Sign In with One Time Password
                  </button>

                  <p className="text-center mt-4">
                    <a
                      onClick={() => router.push("/start")}
                      className="text-white underline cursor-pointer"
                    >
                      Back
                    </a>
                  </p>
                </div>
              </div>
            )}

            {currentStep === 2 && (
              // Step 2: Create Account Form
              <div>
                <h2 className="text-3xl font-bold mb-4">Create an account</h2>
                <p className="text-xs text-gray-400 mb-4">
                  To find your passkey. You have to find your confimation assage
                  which is send you to when you create a new account in
                  OneSyncID
                </p>
                <div className="space-y-5">
                  <input
                    type="text"
                    placeholder="Enter your 8 digit Passkey*"
                    name="passkey"
                    value={formData.passkey}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded bg-white text-blue-900 "
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
                    onClick={handleCreateAccount}
                    className="w-full py-3 bg-yellow-500 text-blue-900 font-bold rounded cursor-pointer"
                  >
                    Continue
                  </button>
                  <p className="text-center mt-4">
                    <a
                      onClick={() => setCurrentStep(1)}
                      className="text-white underline cursor-pointer"
                    >
                      Back
                    </a>
                  </p>
                </div>
              </div>
            )}

            {currentStep === 3 && (
              // Step 3: Verification Code Section
              <div>
                <h2 className="text-3xl font-bold mb-4">
                  Enter verification code
                </h2>

                <div className="space-y-5">
                  <div>
                    <label className="block mb-2">
                      We send the code to{" "}
                      <span className="text-yellow-700">0150005873</span>
                    </label>
                    <input
                      type="text"
                      name="otp"
                      value={formData.otp}
                      onChange={handleChange}
                      placeholder="Enter your 8 digit Passkey*"
                      className="w-full p-3 border border-gray-300 rounded bg-white text-blue-900 "
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
                    onClick={handleSingIn}
                    className="w-full py-3 bg-yellow-500 text-blue-900 font-bold rounded cursor-pointer"
                  >
                    Continue
                  </button>
                  <p className="text-center mt-4">
                    <a
                      onClick={() => setCurrentStep(2)}
                      className="text-white underline cursor-pointer"
                    >
                      Back
                    </a>
                  </p>
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
