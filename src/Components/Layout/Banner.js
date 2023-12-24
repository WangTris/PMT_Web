import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

export default function Banner({ title, subtitle, buttonText }) {
  return (
    <div className="bg-primary">
      <div className="container mx-auto flex flex-col py-14 text-center text-white md:text-left">
        <h2 className="text-8xl font-extrabold uppercase">{title}</h2>
        <p className="my-7 text-4xl">{subtitle}</p>
        <div className="flex items-center justify-center">
          <a href="/contactus">
            <Button buttonText={buttonText} />
          </a>
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
