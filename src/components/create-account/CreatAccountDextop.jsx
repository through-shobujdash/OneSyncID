"use client";

import { createUser, verifyUser } from "@/api/auth";
import { useUser } from "@/contaxt/userContaxt";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
import USAFlag from "../../assets/images/flags/am.svg.png";
import BDFlag from "../../assets/images/flags/bdflag.png";
import INDFlag from "../../assets/images/flags/india.png";
import Illustration from "../../assets/images/Illustration.svg";
import OneSyncLogo from "../../assets/images/Onesync-Logo2.svg";
import ThrouthLogo from "../../assets/images/through-logo.svg";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const CreatAccountDextop = () => {
  const { email, setEmail } = useUser();
  const router = useRouter();
  const [formData, setFormData] = useState({
    language: "",
    currency: "",
    country: "",
    city: "",
    accountType: "",
    name: "",
    gender: "",
    email: email,
    phone: "",
    dob: "",
    password: "",
    confirmPassword: "",
    verifyWith: "",
  });
  const [dobData, setDobData] = useState({
    day: "",
    month: "",
    year: "",
  });
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const [currentStep, setCurrentStep] = useState(1);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };
  const handleDobDataChange = (field, value) => {
    setDobData((prev) => {
      const updatedDob = { ...prev, [field]: value };

      // যদি দিন, মাস, বছর তিনটিই সেট থাকে, তাহলে `formData` আপডেট করুন
      if (updatedDob.day && updatedDob.month && updatedDob.year) {
        setFormData((prevForm) => ({
          ...prevForm,
          dob: `${updatedDob.day} ${updatedDob.month} ${updatedDob.year}`,
        }));
      }

      return updatedDob;
    });
  };

  const handleSelectArea = () => {
    if (
      !formData.language ||
      !formData.currency ||
      !formData.country ||
      !formData.city
    ) {
      alert("Please fill in all fields.");
      return;
    }
    setCurrentStep(2);
  };

  const handleCreateAccount = async () => {
    if (
      !formData.accountType ||
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.password ||
      !formData.confirmPassword ||
      !formData.verifyWith
    ) {
      toast.error("All fields are required.");
      return;
    }

    if (formData.password.length < 6) {
      toast.error("Password must be at least 6 characters.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    setLoading(true); // 🔹 লোডিং শুরু

    try {
      const data = await createUser(formData);

      if (data?.success) {
        toast.success(data?.message || "Account created successfully!");
        setCurrentStep(3);
      } else {
        toast.error(data?.message || "Something went wrong. Try again.");
      }
    } catch (error) {
      // console.error("Create account error:", error);
      // toast.error("Failed to create account. Please try again later.");
      // console.error("Create account error:", error);

      // ✅ Check if API response has a message
      const errorMessage =
        error.response?.data?.message ||
        "Failed to create account. Please try again later.";

      toast.error(errorMessage);
    } finally {
      setLoading(false); // 🔹 লোডিং শেষ
    }
  };

  const handleVerifyAccount = async () => {
    if (!formData.email && !otp) {
      toast.error("Please Enter The OTP");
      return;
    }

    setLoading(true); // 🔹 লোডিং শুরু

    try {
      const data = await verifyUser(email, otp);

      if (data?.success) {
        toast.success(data?.message || "Account verify successfully!");
        router.push("/welcome-notificationo-onesyncId");
      } else {
        toast.error(data?.message || "Something went wrong. Try again.");
      }
    } catch (error) {
      console.error("Create account error:", error);
      toast.error("Failed to verify account. Please try again later.");
    } finally {
      setLoading(false); // 🔹 লোডিং শেষ
    }
  };

  const handleAccoutType = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };
  const handleVerify = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  if (!email) return router.push("/start");

  return (
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
            <Illustration className="mb-6  h-auto" />
            <p className="text-sm text-gray-500">from</p>
            <ThrouthLogo className="mb-2 w-16 h-auto" />
          </div>
        </div>

        {/* Right Section */}
        <div className="w-1/2 p-6 pt-18 md:mt-0 md:p-12 bg-blue-900 text-white rounded-2xl overflow-y-auto h-full">
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
              <div className="space-y-5">
                <div className="grid grid-cols-2 gap-4 bg-blue-900 rounded-md">
                  {/* Language Selector */}
                  <div className="relative">
                    <label className="block mb-2 text-white">Language</label>
                    <Select
                      onValueChange={(value) =>
                        handleInputChange("language", value)
                      }
                    >
                      <SelectTrigger className="w-[180px] bg-white text-black cursor-pointer px-3 py-5.5 rounded">
                        <SelectValue
                          placeholder="Select Language"
                          className="cursor-pointer"
                        />
                      </SelectTrigger>
                      <SelectContent className=" bg-white text-black">
                        <SelectGroup>
                          <SelectItem value="bangla" className="cursor-pointer">
                            <Image
                              src={BDFlag}
                              alt="image"
                              width={30}
                              height={20}
                              className="rounded"
                            />
                            Bangla
                          </SelectItem>
                          <SelectItem
                            value="english"
                            className="cursor-pointer"
                          >
                            <Image
                              src={USAFlag}
                              alt="image"
                              width={30}
                              height={20}
                              className="rounded"
                            />
                            English
                          </SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Currency Selector */}
                  <div className="relative">
                    <label className="block mb-2 text-white">Currency</label>
                    <Select
                      onValueChange={(value) =>
                        handleInputChange("currency", value)
                      }
                    >
                      <SelectTrigger className="w-[180px] bg-white text-black cursor-pointer px-3 py-5.5 rounded">
                        <SelectValue
                          placeholder="Select Currency"
                          className="cursor-pointer "
                        />
                      </SelectTrigger>
                      <SelectContent className=" bg-white text-black">
                        <SelectGroup>
                          <SelectItem value="bdt" className="cursor-pointer">
                            <Image
                              src={BDFlag}
                              alt="image"
                              width={30}
                              height={20}
                              className="rounded"
                            />
                            BDT
                          </SelectItem>
                          <SelectItem value="usd" className="cursor-pointer">
                            <Image
                              src={USAFlag}
                              alt="image"
                              width={30}
                              height={20}
                              className="rounded"
                            />
                            USD
                          </SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="relative">
                  <label className="block mb-2 text-white">Country</label>
                  <Select
                    onValueChange={(value) =>
                      handleInputChange("country", value)
                    }
                  >
                    <SelectTrigger className="w-full bg-white text-black cursor-pointer px-3 py-5.5 rounded">
                      <SelectValue
                        placeholder="Select Country"
                        className="cursor-pointer"
                      />
                    </SelectTrigger>
                    <SelectContent className=" bg-white text-black">
                      <SelectGroup>
                        <SelectItem
                          value="bangladesh"
                          className="cursor-pointer"
                        >
                          <Image
                            src={BDFlag}
                            alt="image"
                            width={30}
                            height={20}
                            className="rounded"
                          />
                          Bangladesh
                        </SelectItem>
                        <SelectItem value="usa" className="cursor-pointer">
                          <Image
                            src={USAFlag}
                            alt="image"
                            width={30}
                            height={20}
                            className="rounded"
                          />
                          USA
                        </SelectItem>
                        <SelectItem value="india" className="cursor-pointer">
                          <Image
                            src={INDFlag}
                            alt="image"
                            width={30}
                            height={20}
                            className="rounded"
                          />
                          India
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block mb-2">City</label>
                  <Select
                    onValueChange={(value) => handleInputChange("city", value)}
                  >
                    <SelectTrigger className="w-full bg-white text-black cursor-pointer px-3 py-5.5 rounded">
                      <SelectValue
                        placeholder="Select City"
                        className="cursor-pointer"
                      />
                    </SelectTrigger>
                    <SelectContent className=" bg-white text-black">
                      <SelectGroup>
                        <SelectItem value="Dhaka" className="cursor-pointer">
                          Dhaka Division
                        </SelectItem>
                        <SelectItem
                          value="Chittagong"
                          className="cursor-pointer"
                        >
                          Chittagong Division
                        </SelectItem>
                        <SelectItem value="Khulna" className="cursor-pointer">
                          Khulna Division
                        </SelectItem>
                        <SelectItem value="Rajshahi" className="cursor-pointer">
                          Rajshahi Division
                        </SelectItem>
                        <SelectItem value="Barishal" className="cursor-pointer">
                          Barishal Division
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
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

                <button
                  type="button"
                  className="w-full py-3 border border-yellow-500 text-yellow-500 font-bold rounded hover:bg-yellow-500 hover:text-white transition cursor-pointer"
                >
                  Allow Location Automatically
                </button>

                <p className="text-center mt-4">
                  <a
                    onClick={() => router.push("start")}
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
                Already have an account?{" "}
                <a
                  onClick={() => router.push("/signin")}
                  className="text-yellow-500 underline"
                >
                  Sign In
                </a>
              </p>
              <div className="flex gap-2 mb-3">
                <button className="bg-white px-2 py-1 text-sm text-black font-light rounded ">
                  Select account type*
                </button>
                <button
                  onClick={() => handleAccoutType("accountType", "personal")}
                  className={`bg-yellow-700 px-2 py-1 text-sm rounded cursor-pointer ${
                    formData?.accountType === "personal"
                      ? "cursor-not-allowed border border-white"
                      : ""
                  }`}
                >
                  Personal
                </button>
                <button
                  onClick={() =>
                    handleAccoutType("accountType", "organization")
                  }
                  className={`bg-yellow-700 px-2 py-1 text-sm rounded cursor-pointer ${
                    formData?.accountType === "organization"
                      ? "cursor-not-allowed border border-white"
                      : ""
                  }`}
                >
                  Organization
                </button>
              </div>
              <div className="space-y-5">
                <input
                  type="text"
                  placeholder="Name*"
                  className="w-full p-3 border border-gray-300 rounded bg-white text-blue-900"
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  value={formData?.name}
                />
                <Select
                  onValueChange={(value) => handleInputChange("gender", value)}
                >
                  <SelectTrigger className="w-full bg-white text-black cursor-pointer px-3 py-5.5 rounded">
                    <SelectValue
                      placeholder="Gender"
                      className="cursor-pointer"
                    />
                  </SelectTrigger>
                  <SelectContent className=" bg-white text-black">
                    <SelectGroup>
                      <SelectItem value="male" className="cursor-pointer">
                        Male
                      </SelectItem>
                      <SelectItem value="female" className="cursor-pointer">
                        Female
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <input
                  type="email"
                  placeholder="Email*"
                  className={`w-full p-3 border border-gray-300 rounded bg-white text-blue-900 `}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  value={formData?.email}
                  disabled={!!formData.email}
                />
                <input
                  type="number"
                  placeholder="Phone Number*"
                  className="w-full p-3 border border-gray-300 rounded bg-white text-blue-900"
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  value={formData?.phone}
                  // disabled={!!formData.phone.length === 11}
                />
                <div className="grid grid-cols-3 gap-4">
                  <Select
                    onValueChange={(value) => handleDobDataChange("day", value)}
                    defaultValue={formData.day}
                  >
                    <SelectTrigger className="w-full bg-white text-black cursor-pointer px-3 py-5.5 rounded">
                      <SelectValue
                        placeholder="Date"
                        className="cursor-pointer"
                      />
                    </SelectTrigger>
                    <SelectContent className="bg-white text-black">
                      <SelectGroup>
                        {Array.from({ length: 31 }, (_, i) => (
                          <SelectItem
                            key={i + 1}
                            value={(i + 1).toString()}
                            className="cursor-pointer"
                          >
                            {i + 1}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <Select
                    onValueChange={(value) =>
                      handleDobDataChange("month", value)
                    }
                    defaultValue={formData.month}
                  >
                    <SelectTrigger className="w-full bg-white text-black cursor-pointer px-3 py-5.5 rounded">
                      <SelectValue
                        placeholder="Month"
                        className="cursor-pointer"
                      />
                    </SelectTrigger>
                    <SelectContent className="bg-white text-black">
                      <SelectGroup>
                        {months.map((month) => (
                          <SelectItem
                            key={month}
                            value={month}
                            className="cursor-pointer"
                          >
                            {month}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <Select
                    onValueChange={(value) =>
                      handleDobDataChange("year", value)
                    }
                    defaultValue={formData.year}
                  >
                    <SelectTrigger className="w-full bg-white text-black cursor-pointer px-3 py-5.5 rounded">
                      <SelectValue
                        placeholder="Year"
                        className="cursor-pointer"
                      />
                    </SelectTrigger>
                    <SelectContent className="bg-white text-black">
                      <SelectGroup>
                        {Array.from({ length: 2025 - 1980 + 1 }, (_, i) => (
                          <SelectItem
                            key={1980 + i}
                            value={(1980 + i).toString()}
                            className="cursor-pointer"
                          >
                            {1980 + i}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <input
                  type="password"
                  placeholder="Password*"
                  className="w-full p-3 border border-gray-300 rounded bg-white text-blue-900"
                  onChange={(e) =>
                    handleInputChange("password", e.target.value)
                  }
                  value={formData?.password}
                />
                <input
                  type="password"
                  placeholder="Confirm Password*"
                  className="w-full p-3 border border-gray-300 rounded bg-white text-blue-900"
                  onChange={(e) =>
                    handleInputChange("confirmPassword", e.target.value)
                  }
                  value={formData?.confirmPassword}
                />
                <div className="flex gap-2 mb-3">
                  <button className="bg-white px-2 py-1 text-sm text-black font-light rounded ">
                    Verify with*
                  </button>
                  <button
                    onClick={() => handleVerify("verifyWith", "phone")}
                    className={`bg-yellow-700 px-2 py-1 text-sm rounded cursor-pointer ${
                      formData?.verifyWith === "phone"
                        ? "cursor-not-allowed border border-white"
                        : ""
                    }`}
                  >
                    Phone number
                  </button>
                  <button
                    onClick={() => handleVerify("verifyWith", "email")}
                    className={`bg-yellow-700 px-2 py-1 text-sm rounded cursor-pointer ${
                      formData?.verifyWith === "email"
                        ? "cursor-not-allowed border border-white"
                        : ""
                    }`}
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
              <h2 className="text-3xl font-bold mb-4">Verification Code</h2>
              <div className="space-y-5">
                <div>
                  <label className="block mb-2">Enter the 6-digit Code</label>
                  <input
                    type="text"
                    placeholder="Enter your code*"
                    className="w-full p-3 border border-gray-300 rounded bg-white text-blue-900"
                    onChange={(e) => setOtp(e.target.value)}
                    value={otp}
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
                  onClick={handleVerifyAccount}
                  className="w-full py-3 bg-yellow-500 text-blue-900 font-bold rounded shadow-md hover:bg-yellow-400 transition cursor-pointer"
                >
                  Create
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
  );
};

export default CreatAccountDextop;
