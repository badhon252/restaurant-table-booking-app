"use client";
import Image from "next/image";
import React from "react";
import logo from "@/assests/image/logo.png";
import VehicalIcon from "@/assests/image/top-vehical logo.png";

export default function Nav() {
  return (
    <section className="py-2">
      <div className="py-3 flex justify-end items-end gap-3">
        <Image className="" src={VehicalIcon} alt="VehicalIcon icon" />
        <p className="font-2xl font-bold text-">
          Express Delivery +880 123 456 78
        </p>
      </div>
      <div className=" flex justify-between gap-5">
        <Image className="logo cursor-pointer " src={logo} alt="BURGER HOUSE" />

        <ul className="nav flex justify-between align-middle items-center gap-8 my-5 cursor-pointer">
          <li id="Home" className=" font-mono text-xl cursor-pointer">
            HOME
          </li>
          <li id="Menu" className=" font-mono text-xl cursor-pointer">
            MENU
          </li>
          <li id="our_story" className=" font-mono text-xl cursor-pointer">
            OUR STORY
          </li>
          <li id="Home" className=" font-mono text-xl cursor-pointer">
            CONTACT US
          </li>
        </ul>
      </div>
    </section>
  );
}
