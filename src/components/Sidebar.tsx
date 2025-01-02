import React from "react";
import Button from "./Button";

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar = () => {
  return (
    <aside
      className={`
      hidden sm:block col-start-1 col-end-2 row-start-1 row-end-4
      transition-transform duration-300
      md:translate-x-0
      z-40
      p-4
      rounded-md
      bg-dark
    `}
    >
      <h1 className="text-transparent bg-clip-text hover:bg-gradient-to-l bg-gradient-to-r from-yellow-500 to-pink-500 text-2xl md:text-3xl lg:text-4xl text-center font-bold hover:cursor-pointer bg-300% animate-gradient content-center border-b border-secondary h-12">
        <span>Fantasy</span>
      </h1>
      <div className="flex flex-col gap-4 sticky top-[100px] border-2 border-green-400 w-full p-4">
      </div>
    </aside>
  );
};

export default Sidebar;
