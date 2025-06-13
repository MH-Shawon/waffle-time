"use client";

import clsx from "clsx";
import { ReactNode } from "react";

interface ButtonProps {
  id?: string;
  title: string;
  rightIcon?: ReactNode;
  leftIcon?: ReactNode;
  containerClass?: string;
}

const Button: React.FC<ButtonProps> = ({
  id,
  title,
  rightIcon,
  leftIcon,
  containerClass,
}) => {
  return (
    <button
      id={id}
      className={clsx(
        "group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-5 py-3 text-[#EB292A] font-denk",
        containerClass
      )}
    >
      <span className="relative inline-flex items-center gap-2 overflow-hidden font-denk text-2xl">
        {leftIcon && <span className="inline-flex">{leftIcon}</span>}
        <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:translate-y-[-160%] group-hover:skew-y-12">
          {title}
        </div>
        <div className="absolute translate-y-[164%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
          {title}
        </div>
        {rightIcon && <span className="inline-flex">{rightIcon}</span>}
      </span>
    </button>
  );
};

export default Button;
