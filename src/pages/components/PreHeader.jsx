import React from "react";
import { NavLink, useLocation, useParams } from "react-router-dom";

const Routes = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Dashboard",
    path: "/login",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

export function PreHeader() {
  const location = useLocation();
  const currentUrl = location.pathname + location.search;

  return (
    <div className="max-w-max fixed inset-x-0 mx-auto top-8 border-gray-700 border-2 px-6 py-2 rounded-full backdrop-blur-md bg-opacity-80 bg-black mb-8">
      <div className="flex items-center justify-between text-blue-gray-900">
        {Routes.filter((values) => values.path == currentUrl).map((values) => (
          <NavLink
            key={values.path}
            to={values.path}
            className="mx-5 cursor-pointer  px-4 rounded-md py-1.5 text-white font-semibold"
          >
            {values.name}
          </NavLink>
        ))}
        {Routes.filter((values) => values.path != currentUrl).map((values) => (
          <NavLink
            key={values.path}
            to={values.path}
            className="mx-5 cursor-pointer py-1.5 text-gray-400 duration-300 hover:text-gray-100 hover:bg-slate-700 px-4 hover:bg-opacity-15 rounded-full"
          >
            {values.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
}
