"use client";

import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import USAFlag from "../../assets/images/flags/am.svg.png";
import BDFlag from "../../assets/images/flags/bdflag.png";
import UKFlag from "../../assets/images/flags/europian.png";
import Illustration from "../../assets/images/Illustration.svg";
import OneSyncLogo from "../../assets/images/Onesync-Logo2.svg";
import ThrouthLogo from "../../assets/images/through-logo.svg";
import { useUser } from "@/contaxt/userContaxt";
import CreatAccountDextop from "@/components/create-account/CreatAccountDextop";
import CreateAccountMobile from "@/components/create-account/CreateAccountMobile";

// const languages = [
//   { label: "English", icon: UKFlag },
//   { label: "Bangla", icon: BDFlag },
// ];

// const currencies = [
//   { label: "USD $", icon: USAFlag },
//   { label: "BDT ৳", icon: BDFlag },
// ];

const languages = [
  { label: "English", icon: "https://flagcdn.com/w40/gb.png" }, // UK Flag
  { label: "Bangla", icon: "https://flagcdn.com/w40/bd.png" }, // Bangladesh Flag
];


const currencies = [
  { label: "BDT", icon: "https://flagcdn.com/w40/bd.png" },
  { label: "USD", icon: "https://flagcdn.com/w40/us.png" },
  { label: "EUR", icon: "https://flagcdn.com/w40/eu.png" },
  { label: "GBP", icon: "https://flagcdn.com/w40/gb.png" },
  { label: "INR", icon: "https://flagcdn.com/w40/in.png" },
];

const countries = [
  { label: "Bangladesh", icon: "https://flagcdn.com/w40/bd.png" },
  { label: "India", icon: "https://flagcdn.com/w40/in.png" },
  { label: "USA", icon: "https://flagcdn.com/w40/us.png" },
  { label: "UK", icon: "https://flagcdn.com/w40/gb.png" },
  { label: "Canada", icon: "https://flagcdn.com/w40/ca.png" },
];

const page = () => {
  const [formData, setFormData] = useState({
    language: "English",
    currency: "USD $",
    country: "Bangladesh",
    city: "",
  });
  const [accountType,setAccountType] = useState("");
  const [verifyWith, setVerifyWith] = useState("");
  // console.log("formData",formData)
  

  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);
  const [isCountryOpen, setIsCountryOpen] = useState(false);

  const [city, setCity] = useState("");
  const [currentStep, setCurrentStep] = useState(1);
  const router = useRouter();
  const { email, setEmail } = useUser();
  console.log("email form crate" , email)

  const [selectedLanguage, setSelectedLanguage] = useState({
    label: "English",
    icon: UKFlag,
  });
  const [selectedCurrency, setSelectedCurrency] = useState({
    label: "USD $",
    icon: USAFlag,
  });

  const [selectedCountry, setSelectedCountry] = useState({
    label: "Select a Country",
    icon: "https://via.placeholder.com/20", // Default placeholder icon
  });

  const handleSelectArea = (e) => {
    e.preventDefault();
    setCurrentStep(2);
  };

  const handleCreateAccount = (e) => {
    e.preventDefault();
    setCurrentStep(3);
  };

  const handleAccoutType = (accountType) => {
    setAccountType(accountType);
  }
  const handleVerify = (verifyType) => {
    setVerifyWith(verifyType);
  };

  return (
    <div>
      {/* For Mobile Device */}
      <CreateAccountMobile/>
      {/* <div className="flex sm:hidden  justify-center  bg-white">
        {currentStep === 1 && (
          <div className="w-full max-w-sm p-6 bg-white">
            <div className="flex items-center justify-between mb-6">
              <ChevronLeft
                onClick={() => router.push("/start")}
                className="text-blue-900"
              />
            </div>

            <h1 className="text-2xl font-bold text-blue-700 text-center mb-8">
              Select to continue
            </h1>

            <div className="space-y-4 ">
              <div className="flex items-center justify-between gap-2">
                <label className="block font-bold text-blue-500 mb-1">
                  Language
                </label>

                <div className="relative w-3/6">
                  <div
                    className="w-full p-2 border border-gray-300 rounded-md text-blue-500 bg-white flex items-center justify-between cursor-pointer"
                    onClick={() => setIsLangOpen(!isLangOpen)}
                  >
                    <div className="flex items-center gap-2">
                      <img
                        src={"https://flagcdn.com/w40/bd.png"}
                        alt=""
                        className="w-5 h-5"
                      />
                      {selectedLanguage.label}
                    </div>
                    <span>▼</span>
                  </div>

                  {isLangOpen && (
                    <ul className="absolute left-0 mt-2 w-full bg-white shadow-md rounded border z-10">
                      {languages.map((lang, index) => (
                        <li
                          key={index}
                          className="flex items-center gap-2 p-2 hover:bg-gray-200 cursor-pointer text-black"
                          onClick={() => {
                            setSelectedLanguage(lang);
                            setIsLangOpen(false);
                          }}
                        >
                          <img src={lang.icon} alt="" className="w-5 h-5" />
                          {lang.label}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>

              <div className="flex items-center justify-between gap-2">
                <label className="block font-bold text-blue-500 mb-1">
                  Currency
                </label>

                <div className="relative w-3/6">
                  <div
                    className="w-full p-2 border border-gray-300 rounded-md text-blue-500 bg-white flex items-center justify-between cursor-pointer"
                    onClick={() => setIsCurrencyOpen(!isCurrencyOpen)}
                  >
                    <div className="flex items-center gap-2">
                      <img
                        src={"https://flagcdn.com/w40/us.png"}
                        alt=""
                        className="w-5 h-5"
                      />
                      {selectedCurrency.label}
                    </div>
                    <span>▼</span>
                  </div>

                  {isCurrencyOpen && (
                    <ul className="absolute left-0 mt-2 w-full bg-white shadow-md rounded border z-10">
                      {currencies.map((currency, index) => (
                        <li
                          key={index}
                          className="flex items-center gap-2 p-2 hover:bg-gray-200 cursor-pointer text-black"
                          onClick={() => {
                            setSelectedCurrency(currency);
                            setIsCurrencyOpen(false);
                          }}
                        >
                          <img src={currency.icon} alt="" className="w-5 h-5" />
                          {currency.label}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>

              <div className="relative">
                <label className="block font-bold text-blue-500 not-even:mb-1">
                  Country
                </label>
                <div
                  className="relative w-full border border-gray-300 rounded bg-white text-blue-900 p-3 cursor-pointer flex items-center justify-between"
                  onClick={() => setIsCountryOpen(!isCountryOpen)}
                >
                  <div className="flex items-center gap-2">
                    <img
                      src={"https://flagcdn.com/w40/bd.png"}
                      alt=""
                      className="w-5 h-5"
                    />
                    {selectedCountry.label}
                  </div>
                  <span>▼</span>
                </div>
                {isCountryOpen && (
                  <ul className="absolute left-0 mt-2 w-full bg-white shadow-md rounded border z-10">
                    {countries.map((country, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-2 p-2 hover:bg-gray-200 cursor-pointer text-black"
                        onClick={() => {
                          setSelectedCountry(country);
                          setIsCountryOpen(false);
                        }}
                      >
                        <img src={country.icon} alt="" className="w-5 h-5" />
                        {country.label}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div>
                <label className="block font-bold text-blue-500 mb-1">
                  City
                </label>
                <select
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md  text-blue-500 text-lg"
                >
                  <option value="">-Select-</option>
                  <option value="Dhaka">Dhaka</option>
                  <option value="Chittagong">Chittagong</option>
                  <option value="Sylhet">Sylhet</option>
                </select>
              </div>

              <div className="flex items-center my-6">
                <div className="flex-1 h-px bg-gray-400" />
                <span className="px-3 text-gray-400">Or</span>
                <div className="flex-1 h-px bg-gray-400" />
              </div>

              <button className="w-full py-2 border border-blue-600 text-blue-600 rounded-md">
                Set location automatically
              </button>

              <button
                onClick={handleSelectArea}
                className="w-full py-2 mt-4 bg-blue-600 text-white rounded-md"
              >
                Continue
              </button>
            </div>
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
              Create an account
            </h1>

            <div className="space-y-4 ">
              <input
                type="text"
                placeholder="Name*"
                className="w-full p-3 border border-gray-300  rounded bg-white text-blue-900"
              />
              <input
                type="email"
                placeholder="Email*"
                className="w-full p-3 border border-gray-300 rounded bg-white text-blue-900"
              />
              <input
                type="tel"
                placeholder="Phone Number*"
                className="w-full p-3 border border-gray-300  rounded bg-white text-blue-900"
              />

              <select
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md  text-blue-500 text-lg"
              >
                <option value="">Date of Birth*</option>
                <option value="Dhaka">Dhaka</option>
                <option value="Chittagong">Chittagong</option>
                <option value="Sylhet">Sylhet</option>
              </select>

              <input
                type="password"
                placeholder="Password*"
                className="w-full p-3 border border-gray-300  rounded bg-white text-blue-900"
              />
              <div className="flex items-center justify-between">
                <label className="flex items-center text-blue-900 text-sm">
                  <input
                    type="checkbox"
                    className="form-checkbox text-yellow-500"
                  />
                  <span className="ml-2 text-gray-400">Show password</span>
                </label>
              </div>
              <input
                type="password"
                placeholder="Confirm Password*"
                className="w-full p-3 border border-gray-300  rounded bg-white text-blue-900"
              />
              <div className="flex items-center justify-between">
                <label className="flex items-center text-blue-900 text-sm">
                  <input
                    type="checkbox"
                    className="form-checkbox text-yellow-500"
                  />
                  <span className="ml-2 text-gray-400">Show password</span>
                </label>
              </div>
              <select
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md  text-blue-500 text-lg"
              >
                <option value="">Verify with*</option>
                <option value="Dhaka">Phone</option>
                <option value="Chittagong">Email</option>
                <option value="Sylhet">Sylhet</option>
              </select>

              <p className="text-xs text-gray-400 mb-1">
                By signing up, I accept the OneSyncID{" "}
                <span className="text-blue-900 cursor-pointer">
                  Cloud terms of service{" "}
                </span>
                and acknowledge the{" "}
                <span className="text-blue-900 cursor-pointer">
                  privacy policy
                </span>
              </p>
              <button
                onClick={handleCreateAccount}
                className="w-full py-2 mt-1 bg-blue-600 text-white rounded-md"
              >
                Create
              </button>
            </div>
          </div>
        )}
        {currentStep === 3 && (
          <div className="w-full max-w-sm p-6 bg-white">
            <div className="flex items-center justify-between mb-6">
              <ChevronLeft
                onClick={() => setCurrentStep(2)}
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

              <div className="flex space-x-2 mb-4">
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
              </div>

              <p className="text-sm text-gray-600 mb-4">
                Code Expires in: <span className="text-blue-600">1:18 min</span>
              </p>

              <div className="flex space-x-4 w-full">
                <button className="w-full py-2 text-blue-600 border border-blue-600 rounded-md">
                  Send again
                </button>
                <button
                  onClick={() =>
                    router.push("/welcome-notificationo-onesyncId")
                  }
                  className="w-full py-2 bg-blue-600 text-white rounded-md"
                >
                  Verify
                </button>
              </div>
            </div>
          </div>
        )}
      </div> */}

      {/* For Desktop Device */}
      <CreatAccountDextop/>
    </div>
  );
};
export default page;