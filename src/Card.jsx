import react from "react";

export function Card({ word, points }) {
  return (
    <div className="relative flex flex-col justify-center items-center w-96 h-60 bg-yellow-100 rounded-3xl border-8 border-white p-4">
      <div className="absolute right-4 top-4 w-10 h-10 flex justify-center items-center bg-white rounded-full text-black text-lg">
        {points}
      </div>
      <h2 className="bg-pink-400 text-5xl px-6 py-4 rounded-full capitalize">
        {word}
      </h2>
    </div>
  );
}
