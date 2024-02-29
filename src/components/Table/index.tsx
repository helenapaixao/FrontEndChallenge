import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faEllipsisV,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import TableData from "../../../data.json";

interface TableProps {
  isImageClicked: boolean;
  handleImageClick: () => void;
}

interface TableData {
  imageSrc: string;
  carName: string;
  nextReservation: string;
  status: string;
  rating: number;
}

export default function Table({
  isImageClicked,
  handleImageClick,
}: TableProps) {
  const tableRows = TableData.tableData.map(
    (data: TableData, index: number) => (
      <tr key={index} className="hover:bg-gray-50">
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
              <FontAwesomeIcon
                key={i}
                icon={faStar}
                className="text-gray-900"
              />
            ))}
          </div>
        </td>

        <td className="px-4 py-2 sm:px-6 sm:py-4">
          <div className="flex items-center justify-center h-full">
            <FontAwesomeIcon icon={faEllipsisV} className="text-gray-800" />
          </div>
        </td>
      </tr>
    )
  );
  return (
    <div className="overflow-hidden border border-gray-200 shadow-md m-5">
      <div className="sm:hidden">
        {/* ... Mobile view ... */}
        {TableData.tableData.map((data: TableData, index: number) => (
          <div key={index} className="p-4 flex items-start">
            <div className="relative h-14 w-14 flex-shrink-0">
              {isImageClicked && (
                <div className="absolute top-0 left-0 h-6 w-6 flex items-center justify-center bg-green-600 rounded-full">
                  <FontAwesomeIcon icon={faCheck} className="text-white" />
                </div>
              )}
              <img
                className="h-full w-full object-cover object-center cursor-pointer"
                src={data.imageSrc}
                alt=""
                onClick={handleImageClick}
              />
            </div>
            <div className="ml-2 flex-grow">
              <div className="text-sm flex items-center">
                <div className="font-inter font-semibold text-gray-900 text-base">
                  {data.carName}
                </div>

                <td
                  className="
          px-4
          py-2
          sm:px-6
          sm:py-4
        "
                >
                  <div className="flex items-center justify-center h-full">
                    <FontAwesomeIcon
                      icon={faEllipsisV}
                      className="text-gray-800"
                    />
                  </div>
                </td>
              </div>
              <div className="flex">
                <div className="mb-2 text-gray-500 text-base font-inter font-regular mr-2">
                  Next reservation:
                </div>
                <div className="mb-2 text-gray-500 text-base font-inter font-regular">
                  {data.nextReservation}
                </div>
              </div>
              <div className="mb-2">
                <div className="flex gap-2">
                  {Array.from({ length: data.rating }, (_, i) => (
                    <FontAwesomeIcon
                      key={i}
                      icon={faStar}
                      className="text-gray-900"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Larger than sm */}
      <div className="table-responsive sm:block hidden">
        <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
          <thead className="bg-gray-50 hidden sm:table-header-group">
            <tr>
              <th className="px-4 py-2 sm:px-6 sm:py-4 font-semibold text-gray-500">
                CAR
              </th>
              <th className="px-4 py-2 sm:px-6 sm:py-4 font-semibold text-gray-500">
                NEXT RESERVATION
              </th>
              <th className="px-4 py-2 sm:px-6 sm:py-4 font-semibold text-gray-500">
                STATUS
              </th>
              <th className="px-4 py-2 sm:px-6 sm:py-4 font-semibold text-gray-500">
                RATING
              </th>
              <th className="px-4 py-2 sm:px-6 sm:py-4 font-semibold text-gray-500">
                ACTIONS
              </th>
            </tr>
          </thead>
          <tbody className="divide-y #6B7280 border-t border-gray-100 ">
            {tableRows}
          </tbody>
        </table>
      </div>
    </div>
  );
}
