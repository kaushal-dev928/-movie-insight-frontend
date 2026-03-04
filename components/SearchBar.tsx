"use client";

import { useState } from "react";

type Props = {
  onSearch: (id: string) => void;
};

export default function SearchBar({ onSearch }: Props) {

  const [movieId, setMovieId] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const imdbRegex = /^tt\d{7,8}$/;

    if (!imdbRegex.test(movieId.trim())) {
      alert("Please enter a valid IMDb ID like tt0133093");
      return;
    }

    onSearch(movieId.trim());
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-3 bg-white p-3 rounded-lg shadow-lg mt-6"
    >
      <input
        type="text"
        placeholder="Enter IMDb ID (tt0133093)"
        value={movieId}
        onChange={(e) => setMovieId(e.target.value)}
        className="outline-none text-black px-3 py-2 w-64"
      />

      <button
        type="submit"
        className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg transition"
      >
        Search
      </button>
    </form>
  );
}