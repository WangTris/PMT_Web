import React from "react";
import Banner from "../../Components/Layout/Banner";
import Default from "../../Components/Layout/Default";
import { FaSearch } from "react-icons/fa";

const children = () => {
  return (
    <>
      <Banner
        title="Products"
        subtitle="Tất cả sản phẩm của PMT được nhập khẩu chính ngạch từ các hãng máy uy tín như Ingersoll Rand, ..."
        buttonText="Contact us"
      />
      <main className="container mx-auto">
        <div className="flex flex-row justify-between">
          <div className="sorting w-1/2 py-5 pr-2">
            <select
              id="countries"
              className="block h-full w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            >
              <option selected>Sorting</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </div>
          <div className="search flex w-1/2 py-5 pl-2">
            <input
              type="text"
              placeholder="Search"
              className="h-full w-full rounded-l-lg border border-gray-300 p-2.5"
            />
            <span className="text-2x flex items-center justify-center rounded-r-lg bg-primary p-5">
              <FaSearch />
            </span>
          </div>
        </div>
      </main>
    </>
  );
};

export default function ProductList() {
  return <Default>{children}</Default>;
}
