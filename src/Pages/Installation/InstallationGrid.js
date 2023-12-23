import React from "react";

const services = [
  "Design Services",
  "Project management",
  "Equipment Provider",
  "Maintenance & Operation services",
];

const ServiceCard = ({ title }) => {
  return (
    <div className="bg-gray1 rounded-lg px-5 py-10 text-center shadow-md">
      <p className="text-3xl font-semibold text-gray-700">{title}</p>
    </div>
  );
};

const InstallationGrid = () => {
  return (
    <div className="p-4">
      <div className="bg-gray grid grid-cols-2 gap-6 rounded-lg p-14">
        {services.map((service) => (
          <ServiceCard key={service} title={service} />
        ))}
      </div>
    </div>
  );
};

export default InstallationGrid;
