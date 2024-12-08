"use client";

import { motion, MotionProps } from "framer-motion";
import React, { HTMLAttributes } from "react";
import Link from "next/link";
import Image from "next/image";
import humanbaseLogo from "../../assets/humanbase_logo.svg";
import Button from "../ui/button";

type MotionNavProps = MotionProps & HTMLAttributes<HTMLElement>;

export function Navbar() {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed w-full z-50 bg-white/80 backdrop-blur-sm"
      {...({} as MotionNavProps)}
    >
      <div className="max-w-[1642px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex justify-between items-center h-16">
          <div>
            <Link href="/" className="text-xl font-medium flex items-center gap-2">
              <Image src={humanbaseLogo} alt="Humanbase" width={40} height={40} />
              <span className="inline-block font-pp-neue-montreal">Humanbase</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6 text-sm">
            <Link href="/docs" className="text-gray-700 hover:text-gray-900">
              Docs
            </Link>
            <Link href="/usecases" className="text-gray-700 hover:text-gray-900">
              Usecases
            </Link>
            <Link href="/pricing" className="text-gray-700 hover:text-gray-900">
              Pricing
            </Link>
          </div>
          <Button className="font-pp-neue-montreal">Try for free</Button>
        </div>
      </div>
    </motion.nav>
  );
}
