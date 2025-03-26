export const fetchPostalDataByPincode = async (pincode) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_BASE_URL}/pincode/${pincode}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching postal data:", error);
    return null;
  }
};

export const fetchPostalDataByCity = async (city) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_BASE_URL}/postoffice/${city}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching postal data:", error);
    return null;
  }
};
