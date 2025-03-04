import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import droneImage from "../assets/droneimage.png";
import idea from "../assets/idea.png";
import team  from "../assets/team.png";
import aim  from "../assets/aim.png";
import teamBack from "../assets/teamBack.svg";

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
      <div className=" w-screen h-100">
        <video
          className="w-screen h-100 object-cover"
          playsInline
          loop
          muted
          autoPlay
          src="https://cdn.pixabay.com/video/2022/11/04/137720-767473363_large.mp4"
        />
      </div>
      <div className=" bg-[#D3EAFD] h-120 flex items-center ">
        <div className=" flex justify-between flex-row items-center w-full h-100 m-10 p-10">
          <div className="flex justify-start flex-col break-words w-150">
            <h1 className="text-black text-6xl">Welcome to Firefly!</h1>
            <p>
            Проектът „FIREFLY“ представлява иновативна инициатива, която има за цел да намалим щетите и жертвите, които причинява Проектът „FIREFLY“ представлява иновативна инициатива, която има за цел да намалим щетите и жертвите, които причинява пожарът.
            </p>
          </div>

          <img className="w-100 h-100" src={droneImage} />
        </div>
      </div>
      <div className=" bg-[#89C2D9] h-100 flex justify-around items-center border-t-white border-t-4">
        <div
          className={` relative w-90 h-60 cursor-pointer transition-transform duration-500 transform-style-3d ${
            flipped1 ? "rotate-y-180" : ""
          }`}
          onClick={flipCard1}
        >
          <div className=" rounded-md absolute w-full h-full bg-[#0066FF] text-white flex justify-center items-center text-xl font-bold  shadow-lg backface-hidden">
            <img className="w-45 h-45"src={idea}/>
          </div>
          <div className="rounded-md absolute w-full h-full bg-[#0066FF] text-center text-white flex justify-center items-center text-xl font-bold  shadow-lg rotate-y-180 backface-hidden">
            <p>Идеята ни, възродена миналата година, е да създадем дрон, който разпознава пожара и предвижда появата му.</p>
          </div>
        </div>
        <div
          className={`relative w-90 h-60 cursor-pointer transition-transform duration-500 transform-style-3d ${
            flipped2 ? "rotate-y-180" : ""
          }`}
          onClick={flipCard2}
        >
          <div className=" rounded-md absolute w-full h-full bg-[#0066FF] text-white flex justify-center items-center text-xl font-bold shadow-lg backface-hidden">
          <img className="w-45 h-45" src={team}/>
          </div>
          <div className="rounded-md absolute w-full h-full bg-[#0066FF] text-white flex justify-center items-center text-xl font-bold shadow-lg rotate-y-180 backface-hidden">
            <img className="w-auto h-45" src={teamBack} />
          </div>
        </div>
        <div
          className={`relative  w-90 h-60 cursor-pointer transition-transform duration-500 transform-style-3d ${
            flipped3 ? "rotate-y-180" : ""
          }`}
          onClick={flipCard3}
        >
          <div className="bg-[#0066FF] rounded-md absolute w-full h-full  text-white flex justify-center items-center text-xl font-bold shadow-lg backface-hidden">
          <img className="text-red-500 w-45 h-45" src={aim}/>
          </div>
          <div className="rounded-md absolute w-full h-full bg-[#0066FF] text-center text-white flex justify-center items-center text-xl font-bold shadow-lg rotate-y-180 backface-hidden">
            <p>Целта ни е да намалим бъдещите жертви и щети от природното бедствие </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
