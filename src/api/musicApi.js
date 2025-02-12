export const searchMusic = async (query) => {
  try {
    const response = await fetch(
      `https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${query}`
    );
    const data = await response.json();

    return data.data;
  } catch (error) {
    console.error("Error trying to load music:", error);
    return [];
  }
};
