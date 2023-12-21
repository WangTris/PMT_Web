import React from "react";
import PropTypes from "prop-types";

export default function Banner({ title, subtitle, buttonText }) {
  return (
    <div className="bg-primary">
      <div className="container mx-auto flex flex-col py-14 text-white">
        <h2 className="text-8xl font-extrabold uppercase">{title}</h2>
        <p className="my-7 text-4xl">{subtitle}</p>
        <div className="flex items-center justify-center">
          <button className="bg-button2 flex h-24 w-56 items-center justify-center rounded-2xl border-2 border-white px-4 py-2 text-white transition-colors hover:bg-primary/80">
            <span className="font-primary text-3xl font-bold text-white">
              {buttonText}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

Banner.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  buttonText: PropTypes.string,
};
