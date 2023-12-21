import React from "react";
import Banner from "../../Components/Layout/Banner";
import Default from "../../Components/Layout/Default";
import { FaSearch } from "react-icons/fa";
import Product from "./Product";
import Data from "../../data.json";

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
              className="block h-full w-full rounded-lg border"
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
              <FaSearch className="text-white" />
            </span>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="w-1/3 rounded-lg border-r bg-white p-10 text-4xl">
            <div className="border-b px-6 py-4">
              <h1 className="text-5xl font-semibold">CATEGORIES</h1>
            </div>
            <div className="p-6">
              <div className="border-b py-2">
                <a href="/" className="">
                  Máy nén
                </a>
              </div>
              <div className="border-b py-2">
                <a href="/" className="">
                  Máy
                </a>
              </div>
              <div className="py-2">
                <a href="/" className="">
                  Máy
                </a>
              </div>
            </div>
          </div>
          <div className="flex w-2/3 flex-row p-10">
            {Data.products.map((product) => (
              <Product
                key={product.id}
                image={product.image}
                title={product.title}
                description={product.description}
                link={product.link}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default function ProductList() {
  return <Default>{children}</Default>;
}
