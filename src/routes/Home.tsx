import { useState } from "react";
import Spline from "@splinetool/react-spline";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,

  ChartLegendContent,
} from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import droneImage from "../assets/droneimage.png";
import idea from "../assets/idea.png";
import team from "../assets/team.png";
import aim from "../assets/aim.png";
import teamBack from "../assets/teamBack.svg";

const chartData = [
  { month: "January", burnt_areas_without_drone: 1, burnt_areas_with_drone: 0.3 },
  {
    month: "February",
    burnt_areas_without_drone: 0.5,
    burnt_areas_with_drone: 0.15,
  },
  { month: "March", burnt_areas_without_drone: 1, burnt_areas_with_drone: 0.3 },
  {
    month: "April",
    burnt_areas_without_drone: 1.5,
    burnt_areas_with_drone: 0.5,
  },
  { month: "May", burnt_areas_without_drone: 2, burnt_areas_with_drone: 0.8 },
  { month: "June", burnt_areas_without_drone: 3, burnt_areas_with_drone: 1 },
  { month: "July", burnt_areas_without_drone: 5, burnt_areas_with_drone: 1.5 },
  { month: "August", burnt_areas_without_drone: 6, burnt_areas_with_drone: 2 },
  {
    month: "September",
    burnt_areas_without_drone: 4,
    burnt_areas_with_drone: 1.5,
  },
  {
    month: "October",
    burnt_areas_without_drone: 2,
    burnt_areas_with_drone: 0.8,
  },
  {
    month: "November",
    burnt_areas_without_drone: 1,
    burnt_areas_with_drone: 0.3,
  },
  {
    month: "December",
    burnt_areas_without_drone: 0.5,
    burnt_areas_with_drone: 0.15,
  },
];

const chartConfig = {
  burnt_areas_without_drone: {
    label: "Burnt forest area without drone ",
    color: "hsl(var(--chart-1))",
  },
  burnt_areas_with_drone: {
    label: "Burnt forest area with drone ",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

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
    <div className={"bg-[#1A1C30] bg-fixed w-screen h-auto m-0 p-0"}>
      <Navbar />
      <div className=" w-screen h-110 flex flex-row">
        <div className="w-1/2 h-full ">
          <Spline scene="https://prod.spline.design/B4SO35iWcqkrll7u/scene.splinecode" />
        </div>
        <div className="w-1/2 h-full flex justify-items-center ms-0">
          <ChartContainer config={chartConfig} className="min-h-[200px] w-full">

            <BarChart accessibilityLayer data={chartData}>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={{ stroke: 'white' }}
                tickMargin={10}

                axisLine={{ stroke: 'white' }}
                tickFormatter={(value) => value.slice(0, 3)}
                stroke="white"
              />
              <YAxis tickLine={{ stroke: 'white' }} stroke="white" className="text-white" tick={{fill:'wjite'}}/>
              <ChartTooltip content={<ChartTooltipContent />} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <ChartTooltip  content={<ChartTooltipContent />} />
              <ChartLegend wrapperStyle={{ color: 'white' }} content={<ChartLegendContent />} />
              <Bar
                dataKey="burnt_areas_without_drone"
                fill="var(--color-burnt_areas_without_drone)"
                radius={4}
              />
              <Bar
                dataKey="burnt_areas_with_drone"
                fill="var(--color-burnt_areas_with_drone)"
                radius={4}
              />
            </BarChart>
            
          </ChartContainer>
        </div>
      </div>
      <div className=" bg-[#D3EAFD] h-120 flex items-center ">
        <div className=" flex justify-between flex-row items-center w-full h-100 m-10 p-10">
          <div className="flex justify-start flex-col break-words w-150">
            <h1 className="text-black text-6xl">Welcome to Firefly!</h1>
            <p>
              Проектът „FIREFLY“ представлява иновативна инициатива, която има
              за цел да намалим щетите и жертвите, които причинява Проектът
              „FIREFLY“ представлява иновативна инициатива, която има за цел да
              намалим щетите и жертвите, които причинява пожарът.
            </p>
          </div>

          <img className="w-100 h-100" src={droneImage} />
        </div>
      </div>
      <div className=" bg-[#89C2D9] h-100 flex justify-around items-center border-t-white border-t-4 flex flex-col">
        <div className="text-6xl text-white">Малко повече за нас.</div>
        <div className="flex flex-row flex justify-around items-center w-full">
          <div
            className={` relative w-90 h-60 cursor-pointer transition-transform duration-500 transform-style-3d ${
              flipped1 ? "rotate-y-180" : ""
            }`}
            onClick={flipCard1}
          >
            <div className=" rounded-md absolute w-full h-full bg-[#0066FF] text-white flex justify-center items-center text-xl font-bold  shadow-lg backface-hidden">
              <img className="w-45 h-45" src={idea} />
            </div>
            <div className="rounded-md absolute w-full h-full bg-[#0066FF] text-center text-white flex justify-center items-center text-xl font-bold  shadow-lg rotate-y-180 backface-hidden">
              <p>
                Идеята ни, възродена миналата година, е да създадем дрон, който
                разпознава пожара и предвижда появата му.
              </p>
            </div>
          </div>
          <div
            className={`relative w-90 h-60 cursor-pointer transition-transform duration-500 transform-style-3d ${
              flipped2 ? "rotate-y-180" : ""
            }`}
            onClick={flipCard2}
          >
            <div className=" rounded-md absolute w-full h-full bg-[#0066FF] text-white flex justify-center items-center text-xl font-bold shadow-lg backface-hidden">
              <img className="w-45 h-45" src={team} />
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
              <img className="text-red-500 w-45 h-45" src={aim} />
            </div>
            <div className="rounded-md absolute w-full h-full bg-[#0066FF] text-center text-white flex justify-center items-center text-xl font-bold shadow-lg rotate-y-180 backface-hidden">
              <p>
                Целта ни е да намалим бъдещите жертви и щети от природното
                бедствие{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
