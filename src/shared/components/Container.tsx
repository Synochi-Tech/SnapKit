import { ReactNode } from "react";

interface IContainerProps {
  children: ReactNode;
  id: string;

  className?: string;
}
const Container = ({
  children,
  className = "",
  id
}: IContainerProps) => {
  return (
    <div
      className={`max-w-[1400px] mx-auto ${className}`}
      data-testid={`${id}_container`}
    >
      {children}
    </div>
  );
};

export default Container;
