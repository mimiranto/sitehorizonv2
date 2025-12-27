import React from "react";
import logo from "../public/Asset/favicon.png";

const Logo = () => {
  return (
    <div className="flex items-center space-x-2 sm:space-x-1 md:space-x-3">
      <div className="text-green-600">
        <img
          src={logo}
          alt="Logo"
          className="h-14 w-auto md:h-16"
        />
      </div>
      <div className="flex flex-col">
        <h1 className="text-xs sm:text-[10px] md:text-lg font-bold text-blue-900 dark:text-blue-100 leading-tight">
          Dr Rabenandrasana Alain
        </h1>
        <p className="text-[9px] sm:text-[8px] md:text-xs text-gray-600 dark:text-gray-300 leading-tight">
          RADIOLOGUE QUALIFIÉ
        </p>
        <p className="text-[9px] sm:text-[8px] md:text-xs text-gray-600 dark:text-gray-300 leading-tight">
          Diplômé du Japon
        </p>
      </div>
    </div>
  );
};

export default Logo;
