import React from "react";
import PropTypes from "prop-types";

const services = [
  "Design Services",
  "Project management",
  "Equipment Provider",
  "Maintenance & Operation services",
];

const ServiceCard = ({ title }) => {
  return (
    <div className="rounded-lg bg-gray1 px-5 py-10 text-center shadow-md">
      <p className="text-gray-700 text-3xl font-semibold">{title}</p>
    </div>
  );
};

const InstallationGrid = () => {
  return (
    <div className="p-4">
      <div className="grid grid-cols-2 gap-6 rounded-lg bg-gray p-14">
        {services.map((service) => (
          <ServiceCard key={service} title={service} />
        ))}
      </div>
    </div>
  );
};

ServiceCard.propTypes = {
  title: PropTypes.string,
};

export default InstallationGrid;
