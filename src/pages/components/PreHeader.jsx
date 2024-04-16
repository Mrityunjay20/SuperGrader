import React from "react";
import {
  Navbar,
  Typography,
} from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";


 
 
export function PreHeader() {
 
  return (
    <div className="max-w-screen px-12 py-4 bg-gray-800">
      <div className="flex items-center justify-between text-blue-gray-900">
        <a
          href="#"
          className="mr-4 cursor-pointer py-1.5 text-white"
        >
          Examly.AI
        </a>
        <Button className="bg-blue-400 rounded-md">Login</Button>
      </div>
    </div>
    
  );
}