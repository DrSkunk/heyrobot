import { useState } from "react";
import { Card } from "./Card";
import { words } from "./words";

function App() {
  const [word, setWord] = useState(null);
  const [points, setPoints] = useState(0);

  const randomWord = () => {
    const newWord = words[Math.floor(Math.random() * words.length)];
    setWord(newWord);
    setPoints(Math.ceil(newWord.length / 3));
  };

  return (
    <div className="w-full h-screen bg-gray-800 flex flex-col items-center justify-center py-4">
      {word && <Card word={word} points={points} />}
      <button
        className="mt-5 px-6 py-4 bg-yellow-100 hover:bg-yellow-200 rounded-md"
        onClick={randomWord}
      >
        Nieuw woord
      </button>
    </div>
  );
}

export default App;
