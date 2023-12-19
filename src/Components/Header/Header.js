import React from "react";
// images
import { ReactComponent as Logo } from "../../assets/img/logo/logo.svg";
import { ReactComponent as VnFlag } from "../../assets/img/flag/vietnam.svg";
import { ReactComponent as UsFlag } from "../../assets/img/flag/us.svg";

const Header = () => {
  return (
    <header className="h-[190px] bg-white py-8">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo and Company name */}
          <div className="flex items-center justify-center">
            <Logo className="mr-[15px] h-[100px] w-[96px]" />
            <span className="h-[58px] w-[271px] text-[24px] font-bold text-primary">
              PHUONG MANH TU TECHNOLOGY Co. LTD.
            </span>
          </div>
          {/* Languages and Navbar */}
          <div className="flex flex-col">
            <div className="flex items-center justify-end space-x-2">
              <div className="flex  ">
                <VnFlag className="h-[22px] w-[40px]" />
                <UsFlag className="h-[22px] w-[40px]" />
              </div>
              <button className="flex h-24 w-56 items-center justify-center rounded-2xl bg-primary px-4 py-2 text-white transition-colors hover:bg-primary/80">
                <span className="font-primary text-3xl font-bold text-white">
                  Contact Us
                </span>
              </button>
            </div>
            <hr className="my-8 h-px border-0 bg-black" />
            <div className="flex justify-end space-x-16 font-primary text-[24px] font-bold">
              <a
                href="/about"
                className="text-accent transition-colors hover:text-gray-700"
              >
                About
              </a>
              <div className="group relative">
                <a
                  href="/products"
                  className="text-accent transition-colors hover:text-accent/80"
                >
                  Product
                </a>
                <span className="ml-1 text-accent group-hover:text-accent/80">
                  &#x25BC;
                </span>
                {/* Dropdown content goes here, hidden by default and shown on hover */}
              </div>
              <div className="group relative">
                <a
                  href="/services"
                  className="text-accent transition-colors hover:text-accent/80"
                >
                  Service
                </a>
                <span className="ml-1 text-accent group-hover:text-accent/80">
                  &#x25BC;
                </span>
                {/* Dropdown content goes here */}
              </div>
              <div className="group relative">
                <a
                  href="/projects"
                  className="text-accent transition-colors hover:text-accent/80"
                >
                  Project
                </a>
                <span className="ml-1 text-accent group-hover:text-accent/80">
                  &#x25BC;
                </span>
                {/* Dropdown content goes here */}
              </div>
              <div className="group relative">
                <a
                  href="/news"
                  className="text-accent transition-colors hover:text-accent/80"
                >
                  News
                </a>
                <span className="ml-1 text-accent group-hover:text-accent/80">
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
