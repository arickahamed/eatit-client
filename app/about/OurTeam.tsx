"use client";
import React from "react";
import Image from "next/image";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { TeamMemberInfo } from "@/data/TeamMember";
import Link from "next/link";

const OurTeam = () => {
  return (
    <main className="py-8">
      <div>
        <div>
          <div className="text-center">
            <h3 className="text-35 font-bold">Our Team</h3>
            <p className="text-18 max-w-[80%] mx-auto">
              Our dynamic team members for your support
            </p>
          </div>
          <div className="pt-4 w-[90%] flex flex-col md:flex-row md:justify-evenly mx-auto">
            {TeamMemberInfo.map((member, index) => {
              return (
                <div className="max-w-[80%] mt-7 flex flex-col justify-center items-center md:block mx-auto relative" key={index}>
                  <div className="border border-primary flex flex-col justify-end items-center p-10 w-[80%] sm:w-[70%] md:w-[85%] rounded-full">
                    <h3 className="text-25 text-primary font-bold">
                      {member.name}
                    </h3>
                    <p className="text-18 pt-3">{member.description}</p>
                  </div>
                  <div className="absolute top-0 left-[70%] md:left-[65%]">
                    <Image
                      src={member.image}
                      alt="Team Member"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="py-7 text-primary w-[80%] md:w-[70%] flex justify-evenly md:justify-between items-center mx-auto">
                    <Link href={member.facebook}>
                      <FaTwitter className="w-[25px] h-[25px] hover:text-secondary" />
                    </Link>
                    <Link href={member.facebook}>
                      <FaFacebookSquare className="w-[25px] h-[25px] hover:text-secondary" />
                    </Link>
                    <Link href={member.instagram}>
                      <FaInstagram className="w-[25px] h-[25px] hover:text-secondary" />
                    </Link>
                    <Link href={member.linkedIn}>
                      <FaLinkedinIn className="w-[25px] h-[25px] hover:text-secondary" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
};

export default OurTeam;
