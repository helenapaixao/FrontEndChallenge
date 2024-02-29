// MobileViewRow.tsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV, faCheck, faStar } from "@fortawesome/free-solid-svg-icons";

interface MobileViewRowProps {
  data: {
    imageSrc: string;
    carName: string;
    nextReservation: string;
    rating: number;
  };
  isImageClicked: boolean;
  handleImageClick: () => void;
}

const MobileViewRow: React.FC<MobileViewRowProps> = ({
  data,
  isImageClicked,
  handleImageClick,
}) => (
  <div className="p-4 flex items-start">
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
        <div className="flex items-center justify-center">
        <FontAwesomeIcon icon={faEllipsisV} className="text-gray-800" />
      </div>
      </div>
      <div className="text-gray-500 text-base font-inter font-regular mt-2">
        Next reservation: {data.nextReservation}
      </div>
      <div className="mb-2">
        <div className="flex gap-2">
          {Array.from({ length: data.rating }, (_, i) => (
            <FontAwesomeIcon key={i} icon={faStar} className="text-gray-900" />
          ))}
        </div>
      </div>
      
    </div>
  </div>
);

export default MobileViewRow;
