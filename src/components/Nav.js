import React from "react";

import { navigation } from "../data";
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <div className="flex space-x-8 capitalize text-[18px]">
      {navigation.map((item, index) => {
        {/* console.log(item.href) */}
        return (
          
          <li
            className="text-white hover:text-accen cursor-pointer"
            key={index}
          >
            <Link
              to={item.href}
              activeClass="active"
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
              className="transition-all duration-300"
            >
              {item.name}
            </Link>
          </li>
        );
      })}
    </div>
  );
};

export default Nav;
