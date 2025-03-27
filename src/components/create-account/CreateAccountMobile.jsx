import { useUser } from "@/contaxt/userContaxt";
import { ChevronLeft, Loader2 } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import USAFlag from "../../assets/images/flags/am.svg.png";
import BDFlag from "../../assets/images/flags/bdflag.png";
import UKFlag from "../../assets/images/flags/europian.png";
import INDFlag from "../../assets/images/flags/india.png";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { toast } from "react-toastify";
import { createUser, verifyUser } from "@/api/auth";
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from "../ui/input-otp";

const CreateAccountMobile = () => {
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
  
  console.log("formdata",formData)
  
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
   const [showPass,setShowPass] = useState(false);
   const [showConfirmPass,setShowConfirmPass] = useState(false);
 
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
    <div className="flex sm:hidden  justify-center  bg-white">
      {currentStep === 1 && (
        // Step 1: Select Area Form
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
              {/* Label */}
              <label className="block font-bold text-blue-500 mb-1">
                Language
              </label>

              {/* Selector */}
              <div className="relative w-3/6">
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
                      <SelectItem value="english" className="cursor-pointer">
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
            </div>

            <div className="flex items-center justify-between gap-2">
              {/* Label */}
              <label className="block font-bold text-blue-500 mb-1">
                Currency
              </label>

              {/* Selector */}
              <div className="relative w-3/6">
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
              <label className="block font-bold text-blue-500 not-even:mb-1">
                Country
              </label>
              <Select
                onValueChange={(value) => handleInputChange("country", value)}
              >
                <SelectTrigger className="w-full bg-white text-black cursor-pointer px-3 py-5.5 rounded">
                  <SelectValue
                    placeholder="Select Country"
                    className="cursor-pointer"
                  />
                </SelectTrigger>
                <SelectContent className=" bg-white text-black">
                  <SelectGroup>
                    <SelectItem value="bangladesh" className="cursor-pointer">
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
              <label className="block font-bold text-blue-500 mb-1">City</label>
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
                    <SelectItem value="Chittagong" className="cursor-pointer">
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
        // Step 2: Select Area Form
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

          <div className="flex gap-2 mb-3">
            <button className="bg-green-200 px-2 py-1 text-sm text-black font-light rounded ">
              Select account type*
            </button>
            <button
              onClick={() => handleAccoutType("accountType", "personal")}
              className={`bg-blue-700 px-2 py-1 text-sm rounded cursor-pointer text-white ${
                formData?.accountType === "personal"
                  ? "cursor-not-allowed bg-green-600"
                  : ""
              }`}
            >
              Personal
            </button>
            <button
              onClick={() => handleAccoutType("accountType", "organization")}
              className={`bg-blue-700 px-2 py-1 text-sm rounded cursor-pointer text-white ${
                formData?.accountType === "organization"
                  ? "cursor-not-allowed bg-green-600"
                  : ""
              }`}
            >
              Organization
            </button>
          </div>

          <div className="space-y-4 ">
            <input
              type="text"
              placeholder="Name*"
              className="w-full p-3 border border-gray-300  rounded bg-white text-blue-900"
              onChange={(e) => handleInputChange("name", e.target.value)}
              value={formData?.name}
            />
            <Select
              onValueChange={(value) => handleInputChange("gender", value)}
            >
              <SelectTrigger className="w-full bg-white text-black cursor-pointer px-3 py-5.5 rounded">
                <SelectValue placeholder="Gender" className="cursor-pointer" />
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
              className="w-full p-3 border border-gray-300 rounded bg-white text-blue-900"
              onChange={(e) => handleInputChange("email", e.target.value)}
              value={formData?.email}
              disabled={!!formData.email}
            />
            <input
              type="number"
              placeholder="Phone Number*"
              className="w-full p-3 border border-gray-300  rounded bg-white text-blue-900"
              onChange={(e) => handleInputChange("phone", e.target.value)}
              value={formData?.phone}
            />

            <div className="grid grid-cols-3 gap-4">
              <Select
                onValueChange={(value) => handleDobDataChange("day", value)}
                defaultValue={formData.day}
              >
                <SelectTrigger className="w-full bg-white text-black cursor-pointer px-3 py-5.5 rounded">
                  <SelectValue placeholder="Date" className="cursor-pointer" />
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
                onValueChange={(value) => handleDobDataChange("month", value)}
                defaultValue={formData.month}
              >
                <SelectTrigger className="w-full bg-white text-black cursor-pointer px-3 py-5.5 rounded">
                  <SelectValue placeholder="Month" className="cursor-pointer" />
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
                onValueChange={(value) => handleDobDataChange("year", value)}
                defaultValue={formData.year}
              >
                <SelectTrigger className="w-full bg-white text-black cursor-pointer px-3 py-5.5 rounded">
                  <SelectValue placeholder="Year" className="cursor-pointer" />
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
              type={showPass ? "text" : "password"}
              placeholder="Password*"
              className="w-full p-3 border border-gray-300  rounded bg-white text-blue-900"
              onChange={(e) => handleInputChange("password", e.target.value)}
              value={formData?.password}
            />
            <div className="flex items-center justify-between">
              <label className="flex items-center text-blue-900 text-sm">
                <input
                  type="checkbox"
                  onClick={() => setShowPass(!showPass)}
                  className="form-checkbox text-yellow-500"
                />
                <span className="ml-2 text-gray-400">Show password</span>
              </label>
            </div>
            <input
              type={showConfirmPass ? "text" : "password"}
              placeholder="Confirm Password*"
              className="w-full p-3 border border-gray-300  rounded bg-white text-blue-900"
              onChange={(e) =>
                handleInputChange("confirmPassword", e.target.value)
              }
              value={formData?.confirmPassword}
            />
            <div className="flex items-center justify-between">
              <label className="flex items-center text-blue-900 text-sm">
                <input
                  type="checkbox"
                  onClick={() => setShowConfirmPass(!showConfirmPass)}
                  className="form-checkbox text-yellow-500"
                />
                <span className="ml-2 text-gray-400">Show password</span>
              </label>
            </div>

            <Select
              onValueChange={(value) => handleInputChange("verifyWith", value)}
              defaultValue={formData.verifyWith}
            >
              <SelectTrigger className="w-full bg-white text-black cursor-pointer px-3 py-5.5 rounded">
                <SelectValue
                  placeholder="Verify with*"
                  className="cursor-pointer"
                />
              </SelectTrigger>
              <SelectContent className="bg-white text-black">
                <SelectGroup>
                  <SelectItem value="email" className="cursor-pointer">
                    Email
                  </SelectItem>
                  <SelectItem value="phone" className="cursor-pointer">
                    Phone
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

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
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin mr-2" />
                  Please wait
                </>
              ) : (
                "Create"
              )}
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
              <span className="text-black">{email}</span>
              <span className="text-sm text-blue-600 underline cursor-pointer">
                Edit
              </span>
            </div>

            {/* Code Input Boxes */}
            <InputOTP
              value={otp}
              onChange={(value) => setOtp(value)}
              maxLength={6}
            >
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
              </InputOTPGroup>
              <InputOTPSeparator />
              <InputOTPGroup>
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>

            <p className="text-sm text-gray-600 mb-4">
              Code Expires in: <span className="text-blue-600">1:18 min</span>
            </p>

            <div className="flex space-x-4 w-full">
              <button className="w-full py-2 text-blue-600 border border-blue-600 rounded-md">
                Send again
              </button>
              <button
                onClick={handleVerifyAccount}
                className="w-full py-2 bg-blue-600 text-white rounded-md"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Loader2 className="animate-spin mr-2" />
                    Please wait
                  </>
                ) : (
                  "Verify"
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateAccountMobile;
