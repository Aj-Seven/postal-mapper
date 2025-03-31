import { useState } from "react";
import {
  fetchPostalDataByPincode,
  fetchPostalDataByCity,
} from "../utils/postalService";
import PostalList from "./PostalList";

export default function PostalSearch() {
  const [input, setInput] = useState("");
  const [searchType, setSearchType] = useState("city");
  const [postalData, setPostalData] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    if (!input.trim()) {
      setError("Please enter a valid input.");
      return;
    }
    setError(null);
    let data;
    if (searchType === "pincode") {
      if (input.length !== 6) {
        setError("Please enter a valid 6-digit Postal code.");
        return;
      }
      data = await fetchPostalDataByPincode(input);
    } else {
      data = await fetchPostalDataByCity(input);
    }

    if (data && data[0]?.Status === "Success") {
      setPostalData(data[0].PostOffice);
    } else {
      setPostalData(null);
      setError("No data found for the entered input.");
    }
  };

  return (
    <div className="max-w-xl mx-auto flex flex-col items-center space-y-2 p-1">
      {/* Header Section */}
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 w-full flex flex-col items-center">
        <img
          src="/assets/postal-logo.png"
          alt="Postal Logo"
          className="w-16 h-16 mb-3"
        />
        <h2 className="text-2xl font-bold text-center">Find Postal Details</h2>

        {/* Search Type Toggle */}
        <div className="flex w-full gap-2 mt-4">
          <button
            onClick={() => setSearchType("city")}
            className={`w-full px-5 py-3 rounded-lg text-sm font-semibold ${
              searchType === "city"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 dark:bg-gray-700"
            }`}
          >
            Search by City
          </button>
          <button
            onClick={() => setSearchType("pincode")}
            className={`w-full px-5 py-3 rounded-lg text-sm font-semibold ${
              searchType === "pincode"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 dark:bg-gray-700"
            }`}
          >
            Search by Postal Code
          </button>
        </div>

        {/* Input Field & Search Button */}
        <div className="flex w-full mt-4">
          <input
            type="text"
            placeholder={
              searchType === "pincode"
                ? "Enter Postal Code"
                : "Enter City/Area Name"
            }
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full p-1 border border-gray-300 rounded-l-lg outline-none focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
          />
          <button
            onClick={handleSearch}
            className="bg-blue-500 text-white px-5 py-3 rounded-r-lg hover:bg-blue-600 transition"
          >
            Search
          </button>
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <div className="bg-red-100 dark:bg-red-700 text-red-600 dark:text-white p-3 rounded-lg w-full text-center">
          <p className="text-sm">{error}</p>
        </div>
      )}

      {/* Postal Data Display */}
      {postalData && (
        <div className="w-full">
          <PostalList postalData={postalData} />
        </div>
      )}
    </div>
  );
}
