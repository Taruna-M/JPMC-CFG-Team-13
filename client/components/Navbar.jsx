"use client";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { motion } from "motion/react";

const Navbar = () => {
  return (
    <>
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.5 }}
        className="flex flex-row justify-around p-8 items-center"
      >
        <div>
          <Link className="font-extrabold text-2xl" href="/">
            Company
          </Link>
        </div>
        <div className="flex gap-7 font-medium">
          <Link
            className="text-black hover:text-gray-500 transition duration-300 ease-in-out"
            href="/"
          >
            About Us
          </Link>
          <Link
            className="text-black hover:text-gray-500 transition duration-300 ease-in-out"
            href="/"
          >
            Services
          </Link>
          <Link
            className="text-black hover:text-gray-500 transition duration-300 ease-in-out"
            href="/"
          >
            Projects
          </Link>
          <Link
            className="text-black hover:text-gray-500 transition duration-300 ease-in-out"
            href="/"
          >
            Contact Us
          </Link>
        </div>
        <div>
          <Button className="cursor-pointer rounded-lg px-6">Sign In</Button>
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
