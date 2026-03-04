"use client";

import { useState } from "react";
import SearchBar from "../components/SearchBar";
import MovieCard from "../components/MovieCard";

export default function Home() {

  const [movie, setMovie] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchMovie = async (id: string) => {

    try {

      setLoading(true);
      setError("");
      setMovie(null);

      const res = await fetch(`https://movie-insight-backend-production.up.railway.app/api/movie/${id}`);

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Movie not found");
      }

      setMovie(data);

    } catch (err: any) {

      console.error(err);
      setError(err.message);

    } finally {

      setLoading(false);

    }
  };

  return (
  <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-black flex flex-col items-center p-10 text-white">

    <h1 className="text-5xl font-bold mb-3">
      🎬 AI Movie Insight Builder
    </h1>

    <p className="text-gray-300 mb-6">
      Discover movie insights using IMDb ID
    </p>

    <SearchBar onSearch={fetchMovie} />

    {loading && (
  <div className="mt-10 flex flex-col items-center">
    <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
    <p className="mt-3 text-blue-400">Fetching movie insights...</p>
  </div>
)}

    {error && (
  <div className="mt-8 bg-red-500/20 border border-red-500 text-red-300 px-6 py-4 rounded-lg">
    ⚠ {error}
  </div>
)}

    <MovieCard movie={movie} />

  </div>
);
}