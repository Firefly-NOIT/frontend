import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {useEffect, useRef, useState} from "react";

export default function StreamModel() {
    const [messages, setMessages] = useState<string[]>([]);
    const wsRef = useRef<WebSocket | null>(null);

    useEffect(() => {
        wsRef.current = new WebSocket("ws://127.0.0.1:8000/alert");

        wsRef.current.onopen = () => {
            console.log("WebSocket connected");
        };

        wsRef.current.onmessage = (event: MessageEvent) => {
            setMessages((prev) => [...prev, event.data]);
        }

        wsRef.current.onclose = () => {
            console.log("WebSocket closed");
        }

        return () => {
            if (wsRef.current) wsRef.current.close();
        };
    })

  return (
    <div className={" bg-[#89C2D9] bg-fixed w-screen h-auto  " }>
      <Navbar />
      <div className=" h-auto flex flex-row justify-center m-10 p-10 " >
        <div className="bg-white h-150 w-240 m-10 ">
          <img className="w-full h-full object-cover" src="http://127.0.0.1:8000/video/predictions/1" alt="Fire prediction stream"/>
        </div>
        <div className="bg-gray-800 h-150 w-60 m-10  ">
            <h1 className="text-white text-2xl">Alerts</h1>
            <div className="text-white">
                {messages.map((message, index) => (
                <p key={index}>{message}</p>
                ))}
            </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
