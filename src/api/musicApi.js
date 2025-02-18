export const searchMusic = async (query) => {
  try {
    const response = await fetch(
      `https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${query}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error trying to load music:", error);
    throw new Error("Failed to fetch music. Please try again later.");
  }
};
