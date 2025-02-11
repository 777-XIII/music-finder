export const searchMusic = async (query) => {
    try {
      const response = await fetch(`https://api.deezer.com/search?q=${query}`);
      const data = await response.json();
      return data.data;
    } catch (error) {
      console.error("Fehler beim Abrufen der Musik:", error);
      return [];
    }
  };
  