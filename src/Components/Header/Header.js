import React from "react";
// images
import { ReactComponent as Logo } from "../../assets/img/logo/logo.svg";
import { ReactComponent as VnFlag } from "../../assets/img/flag/vietnam.svg";
import { ReactComponent as UsFlag } from "../../assets/img/flag/us.svg";

const Header = () => {
  return (
    <header className="bg-white py-8 h-[190px]">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo and Company name */}
          <div className="flex items-center justify-center">
            <Logo className="h-[100px] w-[96px] mr-[15px]" />
            <span className="text-primary font-bold w-[271px] h-[58px] text-[24px]">
              PHUONG MANH TU TECHNOLOGY Co. LTD.
            </span>
          </div>
          {/* Languages and Navbar */}
          <div className="flex flex-col">
            <div className="flex justify-end items-center space-x-2">
              <div className="flex  ">
                <VnFlag className="h-[22px] w-[40px]" />
                <UsFlag className="h-[22px] w-[40px]" />
              </div>
              <button className="bg-primary text-white px-4 py-2 rounded-2xl hover:bg-primary/80 transition-colors flex justify-center items-center w-[164px] h-[52px]">
                <span className="text-[22px] text-white font-bold font-primary">
                  Contact Us
                </span>
              </button>
            </div>
            <hr className="h-px my-8 bg-black border-0" />
            <div className="flex space-x-16 justify-end font-primary font-bold text-[24px]">
              <a
                href="/about"
                className="text-accent hover:text-gray-700 transition-colors"
              >
                About
              </a>
              <div className="relative group">
                <a
                  href="/products"
                  className="text-accent hover:text-accent/80 transition-colors"
                >
                  Product
                </a>
                <span className="text-accent ml-1 group-hover:text-accent/80">
                  &#x25BC;
                </span>
                {/* Dropdown content goes here, hidden by default and shown on hover */}
              </div>
              <div className="relative group">
                <a
                  href="/services"
                  className="text-accent hover:text-accent/80 transition-colors"
                >
                  Service
                </a>
                <span className="text-accent ml-1 group-hover:text-accent/80">
                  &#x25BC;
                </span>
                {/* Dropdown content goes here */}
              </div>
              <div className="relative group">
                <a
                  href="/projects"
                  className="text-accent hover:text-accent/80 transition-colors"
                >
                  Project
                </a>
                <span className="text-accent ml-1 group-hover:text-accent/80">
                  &#x25BC;
                </span>
                {/* Dropdown content goes here */}
              </div>
              <div className="relative group">
                <a
                  href="/news"
                  className="text-accent hover:text-accent/80 transition-colors"
                >
                  News
                </a>
                <span className="text-accent ml-1 group-hover:text-accent/80">
                  &#x25BC;
                </span>
                {/* Dropdown content goes here */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
