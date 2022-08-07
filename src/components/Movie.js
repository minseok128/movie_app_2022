import { Link } from "react-router-dom";

function Movie({ id, img, title, year, genres, summary }) {
  return (
    <div>
      <Link
        to={`/movie/${id}`}
        className="flex p-3 bg-gray-200 hover:shadow-lg hover:bg-gray-100 rounded-xl"
      >
        <img src={img} className="rounded-xl" alt={title} />
        <div className="py-3 pl-3 mx-auto text-center">
          <p className="text-2xl">{title}</p>
          <p className="text-gray-400">{year}</p>
          <p className="pt-5 text-xs">
            |
            {genres.map((g) => {
              return ` ${g} | `;
            })}
          </p>
          <p>
            {summary.length < 200 ? summary : `${summary.substr(0, 200)}...`}
          </p>
        </div>
      </Link>
    </div>
  );
}

export default Movie;
