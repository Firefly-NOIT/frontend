import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";

export default function Home() {
  const [flipped1, setFlipped1] = useState(false);
  const [flipped2, setFlipped2] = useState(false);
  const [flipped3, setFlipped3] = useState(false);

  const flipCard1 = () => {
    setFlipped1(!flipped1);
  };

  const flipCard2 = () => {
    setFlipped2(!flipped2);
  };
  const flipCard3 = () => {
    setFlipped3(!flipped3);
  };
  return (
    <div className={"bg-black bg-fixed w-screen h-auto m-0 p-0"}>
      <Navbar />
      <div className=" w-full h-100">

        <video className="w-full h-100" playsInline loop muted autoPlay src="https://stream.mux.com/6fiGM5ChLz8T66ZZiuzk1KZuIKX8zJz00/medium.mp4"/>

      </div>
      <div className=" bg-[#D3EAFD] h-100 text-center flex justify-center items-center">
        <h1 className="text-black text-6xl">We are Firefly!</h1>
      </div>
      <div className=" bg-[#89C2D9] h-100 flex justify-around items-center border-t-white border-t-4">
          <div
            className={`relative w-90 h-60 cursor-pointer transition-transform duration-500 transform-style-3d ${
              flipped1 ? "rotate-y-180" : ""
            }`}
            onClick={flipCard1}
          >
            <div className="absolute w-full h-full bg-gray-500 text-white flex justify-center items-center text-xl font-bold  shadow-lg backface-hidden">
            <p>Front</p>
            </div>
            <div className="absolute w-full h-full bg-gray-500 text-white flex justify-center items-center text-xl font-bold  shadow-lg rotate-y-180 backface-hidden">
            <p>BACK</p>
            </div>
          </div>
          <div
            className={`relative w-90 h-60 cursor-pointer transition-transform duration-500 transform-style-3d ${
              flipped2 ? "rotate-y-180" : ""
            }`}
            onClick={flipCard2}
          >
            <div className="absolute w-full h-full bg-gray-500 text-white flex justify-center items-center text-xl font-bold shadow-lg backface-hidden">
              <p>FRONT</p>
            </div>
            <div className="absolute w-full h-full bg-gray-500 text-white flex justify-center items-center text-xl font-bold shadow-lg rotate-y-180 backface-hidden">
              <p>BACK</p>
            </div>
          </div>
          <div
            className={`relative w-90 h-60 cursor-pointer transition-transform duration-500 transform-style-3d ${
              flipped3 ? "rotate-y-180" : ""
            }`}
            onClick={flipCard3}
          >
            <div className="absolute w-full h-full bg-gray-500 text-white flex justify-center items-center text-xl font-bold shadow-lg backface-hidden">
              <p>Front</p>
            </div>
            <div className="absolute w-full h-full bg-gray-500 text-white flex justify-center items-center text-xl font-bold shadow-lg rotate-y-180 backface-hidden">
              <p>BACK</p>
            </div>
          </div>
        
      </div>
      <Footer />
    </div>
  );
}
