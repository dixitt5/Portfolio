import React from "react";
import { social } from "../data";

const Footer = () => {
  return (
    <footer className="bg-tertiary h-full lg:h-14 py-4">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 items-center lg:justify-between">
          <div className="flex space-x-6  items-center justify-center">
            {social.map((item, index) => {
              const { href, icon } = item;
              return (
                <a classname="text-accent text-base" href={href} key={index}>
                  {icon}
                </a>
              );
            })}
          </div>
          <div className="h-full">
            {/* <img className="h-[150px]" src={Logo} alt="" /> */}
            <p className="text-white">Dixit Tilaji</p>
          </div>
          <p>&copy; 2022 Dixit Tilaji. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
