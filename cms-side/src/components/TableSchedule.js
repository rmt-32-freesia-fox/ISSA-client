import { Link } from "react-router-dom";

export default function TableSchedule(props) {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <td className="w-4 p-4">1</td>

      <td className="px-6 py-4">Senin</td>
      <td className="px-6 py-4">
        <Link to="/addSchedule">
          <button
            className="inline-flex items-center text-gray-500 bg-white border border-[#548999] focus:outline-none hover:bg-[#548999] hover:text-white focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 h-10 mr-4"
            type="button"
          >
            Add
          </button>
        </Link>
        <Link to="/editClass">
          <button
            className="inline-flex items-center text-gray-500 bg-white border border-[#548999] focus:outline-none hover:bg-[#548999] hover:text-white focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 h-10 mr-4"
            type="button"
          >
            Edit
          </button>
        </Link>
        <button
          className="inline-flex items-center text-gray-500 bg-white border border-[#548999] focus:outline-none hover:bg-[#548999] hover:text-white focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 h-10 "
          type="button"
        >
          DELETE
        </button>
      </td>
    </tr>
  );
}
