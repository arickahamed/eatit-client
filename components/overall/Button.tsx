import React from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any

const Button = ({ children }: any) => {
  return (
    <div className="transition ease-in-out duration-300 delay-150 bg-primary text-customWhite px-4 py-2 rounded-xl hover:border hover:border-primary hover:py-[0.45rem] hover:bg-customWhite  hover:text-primary hover:translate-all">
      {children}
    </div>
  );
};

export default Button;
