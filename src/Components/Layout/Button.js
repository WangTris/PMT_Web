import React from "react";
import PropTypes from "prop-types";

export default function Button({ buttonText }) {
  return (
    <div>
      <button className="flex h-24 w-56 items-center justify-center rounded-2xl border-2 border-white bg-button2 px-4 py-2 text-white transition-colors hover:bg-primary/80">
        <span className="font-primary text-3xl font-bold text-white">
          {buttonText}
        </span>
      </button>
    </div>
  );
}

Button.propTypes = {
  buttonText: PropTypes.string,
};
