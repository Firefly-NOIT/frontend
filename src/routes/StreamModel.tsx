import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function StreamModel() {
  return (
    <div className={" bg-[#89C2D9] bg-fixed w-screen h-auto  " }>
      <Navbar />
      <div className=" h-auto flex flex-row justify-center m-10 p-10 " >
        <div className="bg-white h-150 w-240 m-10 ">
          <video className="w-full h-full object-cover" playsInline loop muted autoPlay src="https://cdn.pixabay.com/video/2022/11/04/137720-767473363_large.mp4"/>

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
