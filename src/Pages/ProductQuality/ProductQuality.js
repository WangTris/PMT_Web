import React from "react";
import Banner from "../../Components/Layout/Banner";
import Default from "../../Components/Layout/Default";
// images
import logoInger from "../../assets/img/logo/logoIngersoll.png";

const children = () => {
  return (
    <>
      <Banner
        title="Products Quality"
        subtitle="Cam kết nhập hàng chính hãng, phù hợp nhu cầu khách hàng"
        buttonText="Contact us"
      />
      <main className="bg-white p-8 text-accent">
        <div className="flex flex-col justify-between md:flex-row">
          {/* Left Column */}
          <div className="flex flex-1 flex-col items-center justify-center gap-20">
            <p className="px-12 text-center text-6xl font-bold uppercase">
              Our partners
            </p>
            <a href="https://www.ingersollrand.com/en-us/">
              <img src={logoInger} alt="Ingersoll Range" />
            </a>
            <p className="px-12 text-center text-4xl font-medium uppercase">
              Sub about brand
            </p>
          </div>

          {/* Vertical Divider */}
          {/* This will only be visible on medium and larger screens */}
          <div
            className="mx-8 my-4 hidden md:block md:flex-shrink-0 md:flex-grow-0"
            style={{
              width: "2px",
              backgroundColor: "black",
            }}
          ></div>

          {/* Right Column */}
          <div className="mt-8 flex-1 text-center text-2xl font-medium md:text-left md:text-4xl">
            <div className="mb-12">
              <h3 className="mb-2">Là nhà phân phối chính hãng</h3>
            </div>
            <div className="mb-12">
              <h3 className="mb-2">Cập nhập mẫu mới thường xuyên</h3>
            </div>
            <div className="mb-12">
              <h3 className="mb-2">Chất lượng đảm bảo</h3>
            </div>
            <div className="mb-12">
              <h3 className="mb-2">
                Hàng chính hãng từ các thương hiệu uy tín
              </h3>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default function ProductQuality() {
  return <Default>{children}</Default>;
}
