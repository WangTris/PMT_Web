import React from "react";
import PropTypes from "prop-types";

const NewsCard = ({ title, context, imageUrl, link }) => {
  return (
    <div className="flex items-center space-x-4 p-10">
      {/* Image container */}
      <div className="bg-gray-300 h-48 w-48">
        <img src={imageUrl} alt={title} />
      </div>
      {/* Text container */}
      <div>
        <a href={link} className="text-4xl font-bold uppercase">
          {title}
        </a>
        <p className="text-2xl">{context}</p>
      </div>
    </div>
  );
};

NewsCard.propTypes = {
  title: PropTypes.string,
  context: PropTypes.string,
  imageUrl: PropTypes.string,
  link: PropTypes.string,
};

export default NewsCard;
