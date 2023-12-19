import React from "react";
// images
import { ReactComponent as Logo } from "../../assets/img/logo/logo.svg";

const Footer = () => {
  return (
    <footer className="h-auto bg-white py-8">
      <div className="container mx-auto">
        <div className="items-center justify-between md:flex">
          {/* Logo and Company name */}
          <div className="flex items-center justify-center">
            <Logo className="mr-[15px] h-[100px] w-[96px]" />
            <span className="h-[58px] w-[271px] text-[24px] font-bold text-primary">
              PHUONG MANH TU TECHNOLOGY Co. LTD.
            </span>
          </div>
          {/* Company age */}
          <div className="text-center sm:mt-8">
            <span className="text-center text-2xl font-bold md:text-3xl">
              Since 2023 @ Công Ty Tnhh Công Nghệ Phương Mạnh Tú
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
