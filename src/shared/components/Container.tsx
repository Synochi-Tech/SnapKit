import { ReactNode } from "react";

interface IContainer {
  children: ReactNode;
  className?: string;
  name: string;
}
const Container = ({
  children,
  className = "",
  name
}: IContainer) => {
  return (
    <div
      className={`max-w-[1400px] mx-auto ${className}`}
      data-testid={`${name}_container`}
    >
      {children}
    </div>
  );
};

export default Container;
