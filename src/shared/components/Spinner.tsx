import React from "react";

interface SpinnerProps {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  variant?: "primary" | "secondary" | "white" | "black";
  className?: string;
  stroke?: number;
}

const Spinner: React.FC<SpinnerProps> = ({
  className = "",
  size = "sm",
  variant = "primary",
}) => {
  const sizeConfig = {
    xs: "size-4 border-2",
    sm: "size-6 border-2",
    md: "size-8 border-2",
    lg: "size-10 border-4",
    xl: "size-12 border-4",
  };
  const colorConfig = {
    primary: "border-main border-l-white",
    secondary: "border-secondary-500 border-l-white",
    white: "border-white border-l-black",
    black: "border-black border-l-transparent",
  };
  return (
    <div
      className={`border ${sizeConfig[size]} ${colorConfig[variant]} rounded-full animate-spin ${className}`}
      data-testid="spinner"
    ></div>
  );
};

export default Spinner;
