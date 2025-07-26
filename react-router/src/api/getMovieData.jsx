export const getMovieData = async ({ params }) => {
  const { id } = params;
  try {
    const res = await fetch(
      `https://www.omdbapi.com/?i=${id}&apikey=${import.meta.env.VITE_API_KEY}`
    );
    const data = res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
