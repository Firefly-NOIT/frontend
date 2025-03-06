import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
}
from "./ui/card"
import { Link } from "react-router-dom";
import email from "./../assets/email.png"
import github from "./../assets/github.png"
import linkedIn from "./../assets/linkedin.png"

export default function Footer() {

  return (

      <Card className={" footer flex justify-center items-center h-auto  w-full rounded-none text-center bg-[#012A4A] text-white  border-none"}>
        <CardHeader>
          <CardTitle className="text-2xl mb-5 ">Firefly</CardTitle>
          <CardDescription className="text-white flex flex-row flex justify-between w-300 ">
            <div className="flex flex-col items-center w-1/3">
              <div><img src={email} alt="Logo" className="w-18 h-18 mb-2"/></div>
              <div><Link to ="https://outlook.office.com/mail/" className="cursor-pointer text-base hover:text-gray-500">fireflydronevscpi@gmail.com</Link></div>
            </div>
            <div className="flex flex-col items-center w-1/3">
              <div><img src={github} alt="Logo" className="w-18 h-18 mb-2"/></div>
              <div><Link className="cursor-pointer text-base hover:text-gray-500" to="https://github.com/Firefly-NOIT">Our Github</Link></div>
            </div>
            <div className="flex flex-col items-center w-1/3">
              <div><img src={linkedIn} alt="Logo" className="w-18 h-18 mb-2"/></div>
              <div><Link className="cursor-pointer text-base hover:text-gray-500" to="https://www.linkedin.com/in/firefly-drone-b06454354/">Our LinkedIn</Link></div>
            </div>
            
          </CardDescription>
          
        </CardHeader>
        <CardFooter className="text-gray-500">Organisation: VSCPI</CardFooter>
      </Card>

  );
}
