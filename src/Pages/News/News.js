import React from "react";
import Banner from "../../Components/Layout/Banner";
import Default from "../../Components/Layout/Default";
import NewsCard from "./NewsCard";
import data from "../../data.json";

const New = data.news;

const children = () => {
  return (
    <>
      <Banner title="Latest News" subtitle="" buttonText="Contact us" />
      <main className="container mx-auto flex flex-row py-14">
        <div className="h-80 w-3/4 overflow-scroll">
          {New.map((item) => (
            <NewsCard
              key={item.id}
              title={item.title}
              context={item.context}
              imageUrl={item.image}
              link={item.link}
            />
          ))}
        </div>
        {/* Create a Enter Email to contact */}
        <div className="bg-gray-300 flex h-80 w-1/4 items-end justify-start">
          <div className="flex w-full flex-col space-y-4">
            <h1 className="text-4xl font-bold uppercase">News Letter</h1>
            <input
              className="placeholder-gray-500 w-full border px-2"
              type="text"
              placeholder="Email Address"
            />
            {/* <button className="bg-gray-800 tet-white rounded-lg p-2">
              Submit
            </button> */}
          </div>
        </div>
      </main>
    </>
  );
};

export default function News() {
  return <Default>{children}</Default>;
}
