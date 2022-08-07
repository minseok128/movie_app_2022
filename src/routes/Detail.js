import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function Detail() {
  const id = useParams().id;
  const [isLoading, setIsLoading] = useState(true);
  const [details, setDetails] = useState([]);

  const getDetails = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
    );
    const json = await response.json();
    setDetails(json.data.movie);
    setIsLoading(false);
  };
  useEffect(() => {
    getDetails();
  }, []);
  console.log(details);

  return (
    <div className="p-12 font-serif text-center bg-yellow-400">
      {isLoading ? (
        <p className="text-3xl">Loading</p>
      ) : (
        <div className="flex bg-gray-200 rounded-xl">
          <img src={details.large_cover_image} className="rounded-xl grow-0" />
          <div className="p-8 grow">
            <h1 className="text-4xl font-bold">{details.title}</h1>
            <p className="text-gray-500">{details.year}</p>
            <p className="py-8">
              | {details.mpa_rating === "" ? "?" : details.mpa_rating} |
              Runtime: {details.runtime} | Rating: {details.rating} |
            </p>
            <p>
              |
              {details.genres.map((g) => {
                return ` ${g} | `;
              })}
            </p>
            <p>{details.description_full}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Detail;
