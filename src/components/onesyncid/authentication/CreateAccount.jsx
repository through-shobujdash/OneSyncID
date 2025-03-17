"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Illustration from "../../../assets/images/Illustration.svg";
import OneSyncLogo from "../../../assets/images/Onesync-Logo.svg";
import ThrouthLogo from "../../../assets/images/through-logo.svg";

const CreateAccount = () => {
  const [formData, setFormData] = useState({
    language: "English",
    currency: "USD $",
    country: "Bangladesh",
    city: "",
  });
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
          <Illustration className="mb-6 w-60 h-auto" />
          <p className="text-sm text-gray-500">from</p>
          <ThrouthLogo className="mb-2 w-16 h-auto" />
        </div>

        {/* Right Section */}
        <div className="w-1/2 p-12 bg-blue-900 text-white rounded-2xl overflow-y-auto h-full">
          {currentStep === 1 && (
            // Step 1: Select Area Form
            <div>
              <h2 className="text-3xl font-bold mb-4">Select an Area</h2>
              <p className="text-xs text-gray-400 mb-4">
                Already have an account?{" "}
                <a
                  onClick={() => router.push("/signin")}
                  className="text-yellow-500 underline cursor-pointer"
                >
                  Sign In
                </a>
              </p>
              <form onClick={handleSelectArea} className="space-y-5">
                <div>
                  <label className="block mb-2">Country</label>
                  <select className="w-full p-3 border border-yellow-500 rounded bg-white text-blue-900">
                    <option>Bangladesh</option>
                    <option>India</option>
                    <option>USA</option>
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-2">Language</label>
                    <select className="w-full p-3 border border-yellow-500 rounded bg-white text-blue-900">
                      <option>English</option>
                      <option>Bangla</option>
                    </select>
                  </div>
                  <div>
                    <label className="block mb-2">Currency</label>
                    <select className="w-full p-3 border border-yellow-500 rounded bg-white text-blue-900">
                      <option>USD $</option>
                      <option>BDT ৳</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block mb-2">Country</label>
                  <select className="w-full p-3 border border-yellow-500 rounded bg-white text-blue-900">
                    <option>- Select -</option>
                    <option>Dhaka Division</option>
                    <option>Chittagong Division</option>
                    <option>Khulna Division</option>
                    <option>Rajshahi Division</option>
                    <option>Barishal Division</option>
                  </select>
                </div>
                <div>
                  <label className="block mb-2">City</label>
                  <select className="w-full p-3 border border-yellow-500 rounded bg-white text-blue-900">
                    <option>- Select -</option>
                    <option>Dhaka Division</option>
                    <option>Chittagong Division</option>
                    <option>Khulna Division</option>
                    <option>Rajshahi Division</option>
                    <option>Barishal Division</option>
                  </select>
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
                  Allow Location Automatically
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
                Already have an account?{" "}
                <a
                  onClick={() => router.push("/signin")}
                  className="text-yellow-500 underline"
                >
                  Sign In
                </a>
              </p>
              <form onClick={handleCreateAccount} className="space-y-5">
                <input
                  type="text"
                  placeholder="Name*"
                  className="w-full p-3 border border-yellow-500 rounded bg-white text-blue-900"
                />
                <input
                  type="email"
                  placeholder="Email*"
                  className="w-full p-3 border border-yellow-500 rounded bg-white text-blue-900"
                />
                <input
                  type="tel"
                  placeholder="Phone Number*"
                  className="w-full p-3 border border-yellow-500 rounded bg-white text-blue-900"
                />
                <div className="grid grid-cols-3 gap-4">
                  <select className="p-3 border border-yellow-500 rounded bg-white text-blue-900">
                    <option>Date</option>
                  </select>
                  <select className="p-3 border border-yellow-500 rounded bg-white text-blue-900">
                    <option>Month</option>
                  </select>
                  <select className="p-3 border border-yellow-500 rounded bg-white text-blue-900">
                    <option>Year</option>
                  </select>
                </div>
                <input
                  type="password"
                  placeholder="Password*"
                  className="w-full p-3 border border-yellow-500 rounded bg-white text-blue-900"
                />
                <input
                  type="password"
                  placeholder="Confirm Password*"
                  className="w-full p-3 border border-yellow-500 rounded bg-white text-blue-900"
                />
                <div className="flex space-x-4">
                  <button
                    type="button"
                    className="w-1/2 py-3 bg-yellow-500 text-blue-900 font-bold rounded"
                  >
                    Phone number
                  </button>
                  <button
                    type="button"
                    className="w-1/2 py-3 bg-yellow-500 text-blue-900 font-bold rounded"
                  >
                    Email
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
              <h2 className="text-3xl font-bold mb-4">Verification Code</h2>
              <form className="space-y-5">
                <div>
                  <label className="block mb-2">Enter the 6-digit Code</label>
                  <input
                    type="text"
                    placeholder="Enter your code*"
                    className="w-full p-3 border border-yellow-500 rounded bg-white text-blue-900"
                  />
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
                  onClick={() =>
                    router.push("/welcome-notificationo-onesyncId")
                  }
                  className="w-full py-3 bg-yellow-500 text-blue-900 font-bold rounded shadow-md hover:bg-yellow-400 transition"
                >
                  Create
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

export default CreateAccount;


// import React, { useState } from "react";
// import Image from "next/image";
// import Illustration from "../../../assets/images/Illustration.svg";
// import BDFlag from "../../../assets/images/flags/bdflag.png";
// import INFlag from "../../../assets/images/flags/am.svg.png";
// import USAFlag from "../../../assets/images/flags/am.svg.png";
// import EnglishFlag from "../../../assets/images/flags/europian.png";
// import BanglaFlag from "../../../assets/images/flags/bdflag.png";

// const CreateAccount = () => {
//   const [formData, setFormData] = useState({
//     language: "English",
//     currency: "USD $",
//     country: "Bangladesh",
//     city: "",
//   });
//   const [currentStep, setCurrentStep] = useState(1);

//   const handleSelectArea = (e) => {
//     e.preventDefault();
//     setCurrentStep(2);
//   };

//   const handleCreateAccount = (e) => {
//     e.preventDefault();
//     setCurrentStep(3);
//   };

//   const flags = {
//     Bangladesh: BDFlag,
//     India: INFlag,
//     USA: USAFlag,
//     English: EnglishFlag,
//     Bangla: BanglaFlag,
//   };

//   const renderOption = (value) => <option value={value}>{value}</option>;

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-blue-100">
//       <div className="bg-blue-900 shadow-lg rounded-lg flex w-full max-w-5xl m-6 h-[90vh]">
//         {/* Left Section */}
//         <div className="w-1/2 m-2 p-10 flex flex-col items-center justify-center bg-white border-r border-gray-200 rounded-2xl">
//           <h1 className="text-3xl font-bold text-blue-700 mb-4">OneSyncID</h1>
//           <p className="text-xl font-semibold text-blue-700 text-center mb-6">
//             <span className="text-[#025FC9]">One app</span>
//             <span className="text-[#002D94]">
//               {" "}
//               for <br /> every kind{" "}
//             </span>
//             <span className="text-[#025FC9]"> of verification</span>
//           </p>
//           <Image
//             src={Illustration}
//             alt="Illustration"
//             className="mb-6 w-60 h-auto"
//           />
//           <p className="text-sm text-gray-500">from</p>
//           <p className="text-sm text-blue-600 font-semibold">Thawte</p>
//         </div>

//         {/* Right Section */}
//         <div className="w-1/2 p-12 bg-blue-900 text-white rounded-2xl overflow-y-auto h-full">
//           {currentStep === 1 && (
//             // Step 1: Select Area Form
//             <div>
//               <h2 className="text-3xl font-bold mb-4">Select an Area</h2>
//               <form onSubmit={handleSelectArea} className="space-y-5">
//                 <div>
//                   <label className="block mb-2">Country</label>
//                   <div className="flex items-center">
//                     <select
//                       className="w-full p-3 border border-yellow-500 rounded bg-white text-blue-900"
//                       value={formData.country}
//                       onChange={(e) =>
//                         setFormData({ ...formData, country: e.target.value })
//                       }
//                     >
//                       {Object.keys(flags)
//                         .slice(0, 3)
//                         .map((country) => (
//                           <option key={country} value={country}>
//                             <Image
//                               src={flags[country]}
//                               alt="Flag"
//                               width={20}
//                               height={20}
//                               className="inline-block mr-2"
//                             />
//                             {country}
//                           </option>
//                         ))}
//                     </select>
//                   </div>
//                 </div>
//                 <div className="grid grid-cols-2 gap-4">
//                   <div>
//                     <label className="block mb-2">Language</label>
//                     <div className="flex items-center">
//                       <select
//                         className="w-full p-3 border border-yellow-500 rounded bg-white text-blue-900"
//                         value={formData.language}
//                         onChange={(e) =>
//                           setFormData({ ...formData, language: e.target.value })
//                         }
//                       >
//                         {Object.keys(flags)
//                           .slice(3)
//                           .map((language) => (
//                             <option key={language} value={language}>
//                               <Image
//                                 src={flags[language]}
//                                 alt="Flag"
//                                 width={20}
//                                 height={20}
//                                 className="inline-block mr-2"
//                               />
//                               {language}
//                             </option>
//                           ))}
//                       </select>
//                     </div>
//                   </div>
//                   <div>
//                     <label className="block mb-2">Currency</label>
//                     <select className="w-full p-3 border border-yellow-500 rounded bg-white text-blue-900">
//                       <option>USD $</option>
//                       <option>BDT ৳</option>
//                     </select>
//                   </div>
//                 </div>
//                 <div>
//                   <label className="block mb-2">City</label>
//                   <select className="w-full p-3 border border-yellow-500 rounded bg-white text-blue-900">
//                     <option>- Select -</option>
//                     <option>Dhaka Division</option>
//                     <option>Chittagong Division</option>
//                   </select>
//                 </div>
//                 <button
//                   type="submit"
//                   className="w-full py-3 bg-yellow-500 text-blue-900 font-bold rounded shadow-md hover:bg-yellow-400 transition"
//                 >
//                   Continue
//                 </button>
//               </form>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CreateAccount;
