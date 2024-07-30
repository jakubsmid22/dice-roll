import { useState } from "react";
import Dice from "./Dice";
const App = () => {
  const [number1, setNumber1] = useState("one");
  const [number2, setNumber2] = useState("one");
  const [animate, setAnimate] = useState(false);

  const numbers = ["one", "two", "three", "four", "five", "six"];

  const roll = () => {
    let randomIndex = Math.floor(Math.random() * numbers.length);
    setNumber1(numbers[randomIndex]);
    randomIndex = Math.floor(Math.random() * numbers.length);
    setNumber2(numbers[randomIndex]);
    setAnimate(true);
    setTimeout(() => setAnimate(false), 1000);
  };

  return (
    <main className="min-h-screen flex flex-col justify-center items-center gap-10">
      <div className="space-x-10">
        <Dice number={number1} animate={animate} />
        <Dice number={number2} animate={animate} />
      </div>

      <button
        className="bg-[hsl(26,92%,58%)] hover:bg-[hsl(26,92%,70%)] transition-all duration-500 px-8 py-2 text-2xl rounded-md"
        onClick={roll}
      >
        Roll
      </button>
    </main>
  );
};

export default App;
