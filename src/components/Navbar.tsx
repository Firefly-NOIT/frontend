import { Link } from "react-router-dom";
import { Menubar, MenubarMenu } from "./ui/menubar";
export default function Navbar() {
  return (
    <>
      <Menubar
        className={
          "h-25 p-10 rounded-none border-none navbar justify-between bg-[#D3EAFD] text-[#030A1C] drop-shadow-xl"
        }
      >
        <Link className="cursor-pointer text-4xl" to="/">
          FIREFLY
        </Link>
        
          <MenubarMenu>
            <Link className="cursor-pointer text-xl" to="/stream/model">
              Stream Model
            </Link>
          </MenubarMenu>

      </Menubar>
    </>
  );
}
