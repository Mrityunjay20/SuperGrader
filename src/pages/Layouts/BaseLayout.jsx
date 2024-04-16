import { Outlet } from "react-router-dom";
import { PreHeader } from "../components/PreHeader";

export default function RootLayout(){

    return(<div className=" min-h-screen">
        <PreHeader />
        <Outlet/>
    </div>)
}