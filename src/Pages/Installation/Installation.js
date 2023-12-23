import React from "react";
import Banner from "../../Components/Layout/Banner";
import Default from "../../Components/Layout/Default";
import InstallationGrid from "./InstallationGrid";

const children = () => {
  return (
    <>
      <Banner
        title="Installation"
        subtitle="PMT is the leading provider of industrial gases, including atmospheric and process gases. At PMT, we help you optimize every step of your process."
        buttonText="Contact us"
      />
      <main className="container mx-auto py-14">
        <h1 className="pb-14 text-center text-6xl">
          Chúng tôi cung cấp trọn gói lắp đặt sản phẩm thiết kế phù hợp cho từng
          nhu cầu của đối tác khách hàng.
        </h1>
        <InstallationGrid />
      </main>
    </>
  );
};

export default function Installation() {
  return <Default>{children}</Default>;
}
