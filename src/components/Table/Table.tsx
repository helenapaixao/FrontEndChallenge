import React from "react";
import MobileViewRow from "./MobileViewRow";
import TableRows from "./TableRows";
import TableData from "../../../data.json";

interface TableProps {
  isImageClicked: boolean;
  handleImageClick: () => void;
}

const Table: React.FC<TableProps> = ({ isImageClicked, handleImageClick }) => {
  const mobileViewRows = TableData.tableData.map((data, index) => (
    <MobileViewRow
      key={index}
      data={data}
      isImageClicked={isImageClicked}
      handleImageClick={handleImageClick}
    />
  ));

  const tableRows = TableData.tableData.map((data, index) => (
    <TableRows key={index} data={data} />
  ));

  return (
    <div className="overflow-hidden border border-gray-200 shadow-md m-5">
      <div className="sm:hidden">
        {/* ... Mobile view ... */}
        {mobileViewRows}
      </div>

      {/* Larger than sm */}
      <div className="table-responsive sm:block hidden">
        <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
        <thead className="bg-gray-50 hidden sm:table-header-group">
            <tr>
              <th className="px-4 py-2 sm:px-6 sm:py-4 font-semibold text-gray-500 text-inter text-base">
                CAR
              </th>
              <th className="px-4 py-2 sm:px-6 sm:py-4 font-semibold text-gray-500 text-inter text-base">
                NEXT RESERVATION
              </th>
              <th className="px-4 py-2 sm:px-6 sm:py-4 font-semibold text-gray-500 text-inter text-base">
                STATUS
              </th>
              <th className="px-4 py-2 sm:px-6 sm:py-4 font-semibold text-gray-500 text-inter text-base">
                RATING
              </th>
              <th className="px-4 py-2 sm:px-6 sm:py-4 font-semibold text-gray-500 text-inter text-base">
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
};

export default Table;
