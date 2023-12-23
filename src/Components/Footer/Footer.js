import React from "react";
// images
import { ReactComponent as Logo } from "../../assets/img/logo/logo.svg";

const Footer = () => {
  return (
    <footer className="h-auto bg-white py-8">
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
          {/* Company age */}
          <div className="text-center sm:mt-8">
            <span className="text-center text-2xl font-bold md:text-3xl">
              Since 2??? @ Công Ty TNHH Công Nghệ Phương Mạnh Tú
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
