import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function StreamCamera() {
  return (
    <div className={"bg-[#89C2D9] bg-fixed w-screen h-auto  " }>
      <Navbar />
      <div className=" h-auto flex flex-row justify-center m-10 p-10" >
        <div className="bg-white h-150 w-240 m-10 ">
          <video className="w-full h-full" playsInline loop muted autoPlay src="https://stream.mux.com/6fiGM5ChLz8T66ZZiuzk1KZuIKX8zJz00/medium.mp4"/>

        </div>
        <div className="bg-red-500 h-150 w-60 m-10  ">
          <textarea name="Incoming text from the model"
            className="w-full h-full bg-[#2E3257] break-words border-none text-white p-2" readOnly />
        </div>
      </div>
      <Footer/>
    </div>
  );
}
