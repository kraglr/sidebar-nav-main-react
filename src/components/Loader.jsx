import React from "react";

export const LoadingThreeDots = () => {
  return (
    <div className=" min-h-screen min-w-screen w-full h-full flex align-middle items-center justify-center bg-white">
      <div className="flex gap-2">
        <div className="w-5 h-5 bg-gradient-to-tr from-gray-900 to-gray-100 rounded-full animate-bounce"></div>
        <div className="w-5 h-5 bg-gradient-to-tr from-gray-100 to-gray-900 rounded-full animate-bounce [animation-delay:0.1s]"></div>
        <div className="w-5 h-5 bg-gradient-to-tr from-gray-900 to-gray-100 rounded-full animate-bounce [animation-delay:0.2s]"></div>
      </div>
    </div>
  );
};

export const LoadingThreeDotsRelative = () => {
  return (
    <div className=" flex-grow-1 min-h-full h-[100%] flex align-middle items-center justify-center bg-white">
      <div className="flex gap-2">
        <div className="w-5 h-5 bg-gradient-to-tr from-gray-900 to-gray-100 rounded-full animate-bounce"></div>
        <div className="w-5 h-5 bg-gradient-to-tr from-gray-100 to-gray-900 rounded-full animate-bounce [animation-delay:0.1s]"></div>
        <div className="w-5 h-5 bg-gradient-to-tr from-gray-900 to-gray-100 rounded-full animate-bounce [animation-delay:0.2s]"></div>
      </div>
    </div>
  );
};
