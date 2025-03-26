import { useState } from "react";
import {
  fetchPostalDataByPincode,
  fetchPostalDataByCity,
} from "../utils/postalService";
import PostalList from "./PostalList";

export default function PostalSearch() {
  const [input, setInput] = useState("");
  const [searchType, setSearchType] = useState("pincode");
  const [postalData, setPostalData] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    if (!input.trim()) {
      setError("Please enter a valid PIN or City.");
      return;
    }
    setError(null);
    let data;
    if (searchType === "pincode") {
      if (input.length !== 6) {
        setError("Please enter a valid 6-digit PIN code.");
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
    <div className="max-w-lg mx-auto space-y-2">
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-2">
        <h2 className="text-2xl font-bold text-center mb-4">
          Find Postal Details
        </h2>

        {/* Search Type Toggle */}
        <div className="flex flex-col md:flex-row justify-center gap-2 mb-4">
          <button
            onClick={() => setSearchType("pincode")}
            className={`px-4 py-2 rounded-lg text-sm font-semibold ${
              searchType === "pincode"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 dark:bg-gray-700"
            }`}
          >
            Search by PIN Code
          </button>
          <button
            onClick={() => setSearchType("city")}
            className={`px-4 py-2 rounded-lg text-sm font-semibold ${
              searchType === "city"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 dark:bg-gray-700"
            }`}
          >
            Search by City
          </button>
        </div>

        {/* Input and Search Button */}
        <div className="flex gap-2">
          <input
            type="text"
            placeholder={
              searchType === "pincode" ? "Enter PIN Code" : "Enter City Name"
            }
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
          />
          <button
            onClick={handleSearch}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Search
          </button>
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <div className="bg-red-100 dark:bg-red-700 p-4 rounded-lg">
          <p className="text-red-500 text-sm">{error}</p>
        </div>
      )}

      {/* Display Postal Data in Grid Format */}
      {postalData && <PostalList postalData={postalData} />}
    </div>
  );
}
