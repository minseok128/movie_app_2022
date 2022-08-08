import { useState, useEffect } from "react";
import Movie from "../components/Movie";

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const response = await fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=7.5&sort_by=year"
    );
    const json = await response.json();
    setMovies(json.data.movies);
    setIsLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  console.log(movies);

  return (
    <div className="bg-yellow-400">
      <div className="px-8 pb-8 font-serif">
        <h1 className="py-16 font-bold text-center underline decoration-wavy underline-offset-8 decoration-gray-200 text-rose-800 text-8xl">
          Movie App 2022
        </h1>
        {isLoading ? (
          <p className="py-48 text-xl text-center text-rose-800">Loading...</p>
        ) : (
          <div className="grid grid-cols-2 gap-8">
            {movies.map((item) => {
              return (
                <Movie
                  key={item.id}
                  id={item.id}
                  img={item.medium_cover_image}
                  title={item.title}
                  year={item.year}
                  genres={item.genres}
                  summary={item.summary}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
