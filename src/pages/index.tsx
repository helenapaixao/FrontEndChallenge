import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
      <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-4 font-medium  font-inter text-gray-500"
            >
              CAR
            </th>
            <th scope="col" className="px-6 py-4 font-medium text-gray-500 ">
              NEXT RESERVATION
            </th>
            <th scope="col" className="px-6 py-4 font-medium text-gray-500 ">
              STATUS
            </th>
            <th scope="col" className="px-6 py-4 font-medium text-gray-500 ">
              RATING
            </th>
            <th scope="col" className="px-6 py-4 font-medium text-gray-500 ">
              ACTIONS
            </th>
          </tr>
        </thead>
        <tbody className="divide-y #6B7280 border-t border-gray-100">
          <tr className="hover:bg-gray-50">
            <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
              <div className="relative h-10 w-10">
                <img
                  className="h-full w-full  object-cover object-center"
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </div>
              <div className="text-sm flex items-center">
                <div className="font-medium text-gray-900">Steven Jobs</div>
              </div>
            </th>

            <td className="px-6 py-4">11/07</td>
            <td className="px-6 py-4">
              <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-800">
                <span className="h-1.5 w-1.5 rounded-full bg-green-800"></span>
                Active
              </span>
            </td>
            <td className="px-6 py-4">
              <div className="flex gap-2">
                <FontAwesomeIcon icon={faStar} className="text-gray-900" />
                <FontAwesomeIcon icon={faStar} className="text-gray-900" />
                <FontAwesomeIcon icon={faStar} className="text-gray-900" />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
