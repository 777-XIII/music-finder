const API_URL = "/api/user/2529"; // Use proxy path for API requests

export const fetchSongs = async () => {
  try {
    const response = await fetch(API_URL);
    console.log("API Response:", response); // Log the response for debugging
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log("Fetched songs data:", data); // Log the fetched data for debugging
    return data.data; // Assuming data.data contains the songs
  } catch (error) {
    console.error("Error fetching songs:", error);
    throw error;
  }
};
