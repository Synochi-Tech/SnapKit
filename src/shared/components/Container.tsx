import { ReactNode } from "react";

interface IContainerProps {
  children: ReactNode;
  id: string;
  mode?: "fixed" | "stretch" | "custom";
  className?: string;
}
const Container = ({
  children,
  className = "",
  id,
  mode = "fixed",
}: IContainerProps) => {
  const widthConfig = {
    fixed: "max-w-[1400px]",
    stretch: "w-full px-4",
    custom: "",
  };
  return (
    <div
      className={`${widthConfig[mode]} mx-auto ${className}`}
      data-testid={`${id}_container`}
    >
      {children}
    </div>
  );
};

export default Container;
