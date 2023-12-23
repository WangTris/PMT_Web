import React from "react";
import Default from "../../Components/Layout/Default";

const children = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="row">
        <div className="col-md-12 text-3xl">
          <h2 className="mb-10 text-6xl font-extrabold uppercase">
            Term of Service
          </h2>
          <p className="italic">
            Updated May <strong>2022</strong>
          </p>
          <p>&nbsp;</p>
          {/* ... Rest of the content ... */}

          {/* For links, instead of using 'a' tags, you might want to use 'Link' from 'react-router-dom' if you are using React Router */}
          <p>
            The protection of your personal data is a serious concern for us...
          </p>

          {/* When you have a list of links or sections, you can map over them if they are dynamic */}
          <ol>
            {/* Example of mapping over an array to create list items */}
            {/* This array could come from your state or props */}
            {[
              "Personal data we collect",
              "How we process your personal data",
              "...",
            ].map((item, index) => (
              <li key={index}>
                <a
                  href={`#${item.toLowerCase().split(" ").join("_")}`}
                  className="text-blue-600 hover:text-blue-800"
                >
                  <strong>{item}</strong>
                </a>
              </li>
            ))}
          </ol>

          {/* ... More content ... */}

          {/* For emails, you can still use 'a' with 'mailto:' */}
          <p>
            If you are a California resident, or an authorized agent acting on
            behalf of a California resident...
          </p>

          {/* ... Rest of the content ... */}
        </div>
      </div>
    </div>
  );
};

export default function Term() {
  return <Default>{children}</Default>;
}
