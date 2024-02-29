import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faEllipsisV } from "@fortawesome/free-solid-svg-icons";

interface TableRowsProps {
  data: {
    carName: string;
    nextReservation: string;
    status: string;
    rating: number;
    imageSrc: string;
  };
}

const TableRows: React.FC<TableRowsProps> = ({ data }) => (
  <tr className="hover:bg-gray-50">
    <td className="px-4 py-2 sm:px-6 sm:py-4">
      <div className="flex items-center">
        <div className="relative h-10 w-10">
          <img
            className="h-full w-full object-cover object-center"
            src={data.imageSrc}
            alt=""
          />
        </div>
        <div className="ml-2">
          <div className="font-inter font-medium text-gray-900 text-base">
            {data.carName}
          </div>
        </div>
      </div>
    </td>

    <td className="px-4 py-2 sm:px-6 sm:py-4">{data.nextReservation}</td>

    <td className="px-4 py-2 sm:px-6 sm:py-4">
      <span
        className={`inline-flex items-center gap-1 rounded-full ${
          data.status === "Available"
            ? "bg-green-50 text-green-800"
            : "bg-red-50 text-red-800"
        } px-2 py-1 text-xs font-semibold border-6 border-gray-800`}
      >
        {data.status}
      </span> 
    </td>
    <td className="px-4 py-2 sm:px-6 sm:py-4">
      <div className="flex gap-2">
        {Array.from({ length: data.rating }, (_, i) => (
          <FontAwesomeIcon key={i} icon={faStar} className="text-gray-900" />
        ))}
      </div>
    </td>
    <td className="px-4 py-2 sm:px-6 sm:py-4">
      <div className="flex items-center justify-center h-full">
        <FontAwesomeIcon icon={faEllipsisV} className="text-gray-800" />
      </div>
    </td>
  </tr>
);

export default TableRows;
