import { useNavigate } from "react-router-dom";
import { Menubar, MenubarMenu, MenubarTrigger } from "./ui/menubar";

export default function Navbar() {
  const navigator = useNavigate();
  return (
    <>
      <Menubar className={"h-25 p-10 rounded-none border-none navbar justify-between bg-[#D3EAFD] text-[#030A1C] drop-shadow-xl"}>
        <MenubarMenu>
          <h1  className="cursor-pointer text-4xl"onClick={() => navigator("/")}>FIREFLY</h1>
        </MenubarMenu>
        <div className="flex flex-row ">

          <MenubarMenu>
            <MenubarTrigger className="cursor-pointer text-xl"  onClick={() => navigator("/stream/video")}>
              Stream Camera
            </MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger  className="cursor-pointer text-xl" onClick={() => navigator("/stream/model")}>
              Stream Model
            </MenubarTrigger>
          </MenubarMenu>
        </div>
      </Menubar>
    </>
  );
}
