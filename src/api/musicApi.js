const API_URL = "https://api.codetabs.com/v1/proxy/?quest=https://api.deezer.com/user/2529";

export const fetchSongs = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.data; // Assuming data.data contains the songs
  } catch (error) {
    console.error("Error fetching songs:", error);
    throw error;
  }
};
