import React from "react";
import { Link } from "react-router-dom";

interface BreadCrumbsProps {
  data: {
    name: string;
    link: string;
  }[];
}
// this code added navigation paths in the page top
const BreadCrumbs: React.FC<BreadCrumbsProps> = ({ data }) => {
  return (
    <div className="flex items-center py-4 overflow-x-auto whitespace-nowrap">
      {data.map((item, index) => (
        <div
          key={index}
          className="text-black opacity-50 text-xs font-Ubuntu md:text-sm"
        >
          <Link to={item.link}>{item.name}</Link>
          {index !== data.length - 1 && <span className="px-3">/</span>}
        </div>
      ))}
    </div>
  );
};

export default BreadCrumbs;