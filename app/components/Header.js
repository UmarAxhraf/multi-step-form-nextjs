"use client";
import { FaArrowLeft } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";

const Header = ({ handleBack, handleExit }) => {
  return (
    <header className="bg-white flex justify-between items-center p-4 h-[52px]">
      <button
        onClick={handleBack}
        className="flex items-center px-4 py-2 rounded space-x-2"
      >
        <FaArrowLeft />
        <span>Go Back</span>
      </button>
      <button
        onClick={handleExit}
        className="flex items-center px-4 py-2 rounded space-x-2"
      >
        <span>Exit</span>
        <RxCross2 className="font-bold text-xl" />
      </button>
    </header>
  );
};

export default Header;
