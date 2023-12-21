import React from "react";
// images
import { ReactComponent as Logo } from "../../assets/img/logo/logo.svg";
import { ReactComponent as VnFlag } from "../../assets/img/flag/vietnam.svg";
import { ReactComponent as UsFlag } from "../../assets/img/flag/us.svg";

const Header = () => {
  return (
    <header className="h-auto bg-white py-8">
      <div className="container mx-auto">
        <div className="items-center justify-between md:flex">
          {/* Logo and Company name */}
          <div className="flex items-center justify-center ">
            <div className="flex-shrink-0">
              <Logo className="mr-4 h-40 w-40" />
            </div>
            <span className="h-20 w-[30rem] text-4xl font-bold text-primary">
              PHUONG MANH TU TECHNOLOGY Co. LTD.
            </span>
          </div>
          {/* Languages and Navbar */}
          <div className="flex flex-col">
            <div className="flex items-center justify-between space-x-2 md:justify-end">
              <div className="flex">
                <VnFlag className="h-16 w-24" />
                <UsFlag className="h-16 w-24" />
              </div>
              <div className="flex space-x-2">
                <button className="flex h-24 w-56 items-center justify-center rounded-2xl border-2 border-primary bg-primary px-4 py-2 text-white transition-colors hover:bg-white hover:text-primary">
                  <span className="font-primary text-3xl font-bold ">
                    Contact Us
                  </span>
                </button>
                <button className="flex h-24 w-56 items-center justify-center rounded-2xl border-2 border-primary px-4 py-2 text-primary transition-colors hover:bg-primary hover:text-white">
                  <span className="font-primary text-3xl font-bold ">
                    Get a Quote
                  </span>
                </button>
              </div>
            </div>
            <hr className="my-8 h-px border-0 bg-black" />
            <div className="flex justify-center space-x-16 font-primary text-3xl font-bold md:justify-end md:text-4xl">
              <a
                href="/about"
                className="text-accent transition-colors hover:text-accent/40"
              >
                About
              </a>
              <div className="group relative">
                <a
                  href="/products"
                  className="text-accent transition-colors hover:text-accent/40"
                >
                  Product
                </a>
              </div>
              <div className="group relative">
                <a
                  href="/services"
                  className="text-accent transition-colors hover:text-accent/40"
                >
                  Service
                </a>
              </div>
              <div className="group relative">
                <a
                  href="/projects"
                  className="text-accent transition-colors hover:text-accent/40"
                >
                  Project
                </a>
              </div>
              <div className="group relative">
                <a
                  href="/news"
                  className="text-accent transition-colors hover:text-accent/40"
                >
                  News
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
