"use client";

import { motion, MotionProps } from "framer-motion";
import React from "react";
import Button from "../ui/button";
import { useRouter } from "next/navigation";
import { useAppKit, useAppKitAccount } from "@reown/appkit/react";

type MotionHeadingProps = MotionProps &
  React.HTMLAttributes<HTMLHeadingElement>;
type MotionDivProps = MotionProps & React.HTMLAttributes<HTMLDivElement>;

export function Hero() {
  const { open } = useAppKit();
  const { isConnected } = useAppKitAccount();

  const router = useRouter();

  const handleGetStarted = async () => {
    try {
      await open();
      if (isConnected) {
        router.push("/dashboard");
      }
    } catch (error) {
      console.error("Failed to connect wallet:", error);
    }
  };

  return (
    <div className="relative min-h-[90dvh] flex items-center justify-center bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-[90px] md:text-8xl font-medium font-pp-neue-montreal tracking-tight"
          {...({} as MotionHeadingProps)}
        >
          Speak with your money
        </motion.h1>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-10"
          {...({} as MotionDivProps)}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Button onClick={handleGetStarted} className="text-4xl px-12 py-5">
              Get Started ⌘ ⏎
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
