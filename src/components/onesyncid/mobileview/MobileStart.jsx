"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import OneSyncLogo from "../../../assets/images/Onesync-Logo.svg"
import { Donegal_One } from "next/font/google";

const MobileStart = () => {
  const router = useRouter();
  const [time, setTime] = useState("10:10");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      setTime(`${hours}:${minutes}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <nav class="bg-white shadow-lg sticky top-0">
        <div class="container mx-auto px-4 py-3 flex justify-between items-center">
          <div class="text-2xl font-bold text-indigo-600">Brand</div>
          <div class="hidden md:flex items-center space-x-8">
            <a
              href="#"
              class="text-gray-700 hover:text-indigo-500 transition duration-300"
            >
              Home
            </a>
            <a
              href="#"
              class="text-gray-700 hover:text-indigo-500 transition duration-300"
            >
              About
            </a>
            <a
              href="#"
              class="text-gray-700 hover:text-indigo-500 transition duration-300"
            >
              Services
            </a>
            <a
              href="#"
              class="text-gray-700 hover:text-indigo-500 transition duration-300"
            >
              Contact
            </a>
            <Link
              href="/start"
              class="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition duration-300"
            >
              Login
            </Link>
          </div>

          <div class="md:hidden flex items-center justify-between gap-4">
            <Link
              href="/start"
              class=" bg-indigo-600 text-white px-4 py-1 rounded-lg hover:bg-indigo-700 transition duration-300"
            >
              Login
            </Link>
            <button class="text-gray-700 focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
      <main className="w-full h-screen flex flex-col items-center justify-between bg-gradient-to-br from-gray-100 to-blue-100 p-6">
        <div className="flex-grow flex items-center justify-center w-full">
          <motion.h1
            onClick={() => router.push("/start")}
            className="text-3xl font-bold text-blue-600 relative z-10 cursor-pointer"
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            OneSyncID
          </motion.h1>
        </div>
        <div className="flex flex-col items-center pb-10">
          <motion.p
            className="text-gray-500 text-sm relative z-10 mt-1"
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            from
          </motion.p>
          <motion.img
            src="https://cdn.builder.io/api/v1/image/assets/7e5c46ad395d43c4a867bfcc6c1e3fce/fd806fe6be08c30255d454fbe3ba990bc61d8ab07a1cd4ba031bd2f65f479ca8?placeholderIfAbsent=true"
            className="w-16 mt-2 relative z-10"
            alt="Logo"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4 }}
          />
        </div>
      </main>
    </div>
  );
};

export default MobileStart;



