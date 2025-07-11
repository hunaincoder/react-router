export const getMoviesData = async () => {
  try {
    const res = await fetch(
      `http://www.omdbapi.com/?i=tt3896198&apikey=${
        import.meta.env.VITE_API_KEY
      }&s=titanic&page=1`
    );
    const data = res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
