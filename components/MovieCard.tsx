type Movie = {
  title: string;
  poster: string;
  year: string;
  rating: string;
  plot: string;
  cast: string;
  sentiment: string;
  aiSummary: string;
};

export default function MovieCard({ movie }: { movie: Movie | null }) {

  if (!movie) return null;

  const sentimentColor =
    movie.sentiment === "Positive"
      ? "text-green-600"
      : movie.sentiment === "Mixed"
      ? "text-yellow-600"
      : "text-red-600";

  return (
  <div className="mt-10 bg-white text-black p-6 rounded-xl shadow-2xl max-w-md w-full transform hover:scale-105 transition duration-300">

    <img
      src={movie.poster}
      alt={movie.title}
      className="rounded-lg mb-4 w-full"
    />

    <h2 className="text-2xl font-bold">{movie.title}</h2>

    <p className="text-gray-600">
      {movie.year} • ⭐ {movie.rating}
    </p>

    <p className="mt-3">
      <b>Cast:</b> {movie.cast}
    </p>

    <p className="mt-3 text-gray-700">
      {movie.plot}
    </p>

    <div className="mt-4">
  <span className="font-semibold">Sentiment:</span>

  <span
    className={`ml-2 px-3 py-1 rounded-full text-sm font-semibold ${
      movie.sentiment === "Positive"
        ? "bg-green-200 text-green-800"
        : movie.sentiment === "Mixed"
        ? "bg-yellow-200 text-yellow-800"
        : "bg-red-200 text-red-800"
    }`}
  >
    {movie.sentiment}
  </span>
</div>

    <div className="flex items-center gap-3 mt-2">
  <span className="bg-yellow-400 text-black px-2 py-1 rounded text-sm">
    ⭐ {movie.rating}
  </span>

  <span className="text-gray-600">
    {movie.year}
  </span>
</div>

  </div>
);
}