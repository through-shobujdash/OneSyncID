"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const MobileStart = () => {
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
    <main className="w-full h-screen flex flex-col items-center justify-between bg-gradient-to-br from-gray-100 to-blue-100 p-6">
      <div className="flex-grow flex items-center justify-center w-full">
        <motion.h1
          className="text-3xl font-bold text-blue-600 relative z-10"
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
  );
};

export default MobileStart;
