"use client";

import { motion, MotionProps } from "framer-motion";
import Image from "next/image";
import React, { HTMLAttributes } from "react";
import companyOne from "../../assets/company_one.svg";
import companyTwo from "../../assets/company_two.svg";
import companyThree from "../../assets/company_three.svg";
import companyFour from "../../assets/company_four.svg";

const companies = [
  { name: "Element", logo: companyOne },
  { name: "Fidelity", logo: companyTwo },
  { name: "Google", logo: companyThree },
  { name: "Meta", logo: companyFour },
];

type MotionDivProps = MotionProps & HTMLAttributes<HTMLDivElement>;

export function TrustedBy() {
  return (
    <div className="py-10 mt-20 mb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-5"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          {...({} as MotionDivProps)} 
        >
          <h2 className="text-lg font-pp-supply-sans text-gray-600">
            Trusted by humans at top companies
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4">
          {companies.map((company, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex justify-center items-center text-4xl border border-r-0 last:border-r border-mute-gray p-4"
              {...({} as MotionDivProps)} // Explicitly using extended props
            >
              <Image src={company.logo} alt={company.name} width={50} height={50} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
