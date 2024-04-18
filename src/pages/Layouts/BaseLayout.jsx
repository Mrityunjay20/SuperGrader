import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { PreHeader } from "../components/PreHeader";

export default function RootLayout(){

    return(<div className=" min-h-screen  bg-[#010100]">
            <PreHeader />
        <Outlet/>
        <Footer/>
    </div>)
}