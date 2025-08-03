import React from "react";
import Logo from "@/public/images/Udvash-Unmesh-Online-Care-Logo-White.png";
import Image from "next/image";
import Link from "next/link";
import YT from "@/public/images/youtube.png";
import IG from "@/public/images/instagram.png";
import IN from "@/public/images/linkedIn.png";

export default function Footer() {
  return (
    <div className="bg-[#550000] text-white px-4">
      <div className="grid grid-cols-6 gap-10 pt-12 pb-5">
        <div className="col-span-2">
          <Image src={Logo} alt="Logo" />
        </div>
        <div>
          <h3 className="text-2xl">Help</h3>
          <Link href={"#"} className="block mt-2 text-sm hover:text-[#ffc107]">
            About Us
          </Link>
          <Link href={"#"} className="block mt-2 text-sm hover:text-[#ffc107]">
            Privacy Policy
          </Link>
          <Link href={"#"} className="block mt-2 text-sm hover:text-[#ffc107]">
            Terms & Conditions
          </Link>
          <Link href={"#"} className="block mt-2 text-sm hover:text-[#ffc107]">
            FAQs
          </Link>
          <Link href={"#"} className="block mt-2 text-sm hover:text-[#ffc107]">
            Contact Us
          </Link>
        </div>
        <div>
          <h3 className="text-2xl">Explore</h3>
          <Link href={"#"} className="block mt-2 text-sm hover:text-[#ffc107]">
            Udvash
          </Link>
          <Link href={"#"} className="block mt-2 text-sm hover:text-[#ffc107]">
            Unmesh
          </Link>
        </div>
        <div className="col-span-2">
          <h3 className="text-2xl">Get in Touch</h3>
          <p className="mt-2 text-sm">
            Address: Hossain Tower (5th Floor), 75, Green Road,
            <br /> Farmgate; Sher-e-Bangla Nagar PS; Dhaka-1205.
          </p>
          <p className="mt-2 text-sm">
            Helpline:{" "}
            <span className="cursor-pointer hover:text-[#ffc107]">
              09666775566
            </span>
          </p>
          <p className="mt-2 text-sm">
            Email:{" "}
            <span className="cursor-pointer hover:text-[#ffc107]">
              info@udvash-unmesh.com
            </span>
          </p>
          <div className="mt-4 flex items-center gap-4">
            <Image
              src={YT}
              alt="YouTube"
              width={37}
              height={37}
              className="inline-block mr-2 cursor-pointer"
            />
            <Image
              src={IG}
              alt="YouTube"
              width={37}
              height={37}
              className="inline-block mr-2 cursor-pointer"
            />
            <Image
              src={IN}
              alt="YouTube"
              width={37}
              height={37}
              className="inline-block mr-2 cursor-pointer"
            />
          </div>
        </div>
      </div>

      <hr className="opacity-25" />

      <p className="py-6 text-center text-sm">
        Copyright © Udvash-Unmesh Online Care. All rights reserved. 2025 | P-184
        | V-UMS-VM-3.190 | Portal&apos;s Backend
      </p>
    </div>
  );
}
