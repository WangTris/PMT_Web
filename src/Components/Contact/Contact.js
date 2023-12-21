import React from "react";

const Contact = () => {
  return (
    <div className="bg-accent p-8 text-white">
      <div className="flex flex-col justify-between md:flex-row">
        {/* Left Column */}
        <div className="flex flex-1 flex-col items-center justify-center gap-8 text-3xl">
          <p className="px-12 text-center">
            We are steadfast in our dedication to provide unparalleled quality
            and service, empowering our clients with excellence and reliability
            in every endeavor.
          </p>
          <a href="#" className="font-bold italic text-primary hover:underline">
            Terms of service
          </a>
        </div>

        {/* Vertical Divider */}
        {/* This will only be visible on medium and larger screens */}
        <div
          className="mx-8 my-4 hidden md:block md:flex-shrink-0 md:flex-grow-0"
          style={{
            width: "2px",
            backgroundColor: "rgba(255, 255, 255, 0.5)",
          }}
        ></div>

        {/* Right Column */}
        <div className="mt-8 flex-1 text-center text-2xl md:text-left md:text-3xl">
          <div className="mb-8">
            <h3 className="mb-2 font-bold">PHONE NUMBER:</h3>
            <p>T: +84.8.3719-5582</p>
            <p>F: +84.8.3719-5579</p>
          </div>
          <div className="mb-8">
            <h3 className="mb-2 font-bold">EMAIL ADDRESS:</h3>
            <p>Pmt@pmt.vn</p>
          </div>
          <div>
            <h3 className="mb-2 font-bold">OFFICE LOCATION:</h3>
            <p>
              10 Nguyen Hau Street, Tan Thanh Ward, Tan Phu District, Ho Chi
              Minh City, Vietnam.
            </p>
          </div>
          <div className="mt-8 flex items-center justify-center md:justify-start">
            <div className="flex space-x-2">
              <button className="flex h-24 w-56 items-center justify-center rounded-2xl bg-primary px-4 py-2 transition-colors hover:bg-primary/60">
                <span className="font-primary text-3xl font-bold text-white">
                  Contact Us
                </span>
              </button>
              <button className="flex h-24 w-56 items-center justify-center rounded-2xl border-2 border-primary bg-accent px-4 py-2 transition-colors hover:bg-accent/70">
                <span className="font-primary text-3xl font-bold text-primary">
                  Get a Quote
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Links */}
      <div className="mt-12 flex justify-evenly border-t border-white pt-4 text-xl font-bold text-accent2 md:text-3xl">
        <a href="#" className="hover:underline">
          About
        </a>
        <a href="#" className="hover:underline">
          Products
        </a>
        <a href="#" className="hover:underline">
          Services
        </a>
        <a href="#" className="hover:underline">
          Projects
        </a>
        <a href="#" className="hover:underline">
          News
        </a>
      </div>
    </div>
  );
};

export default Contact;
