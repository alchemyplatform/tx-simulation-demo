import { type ButtonHTMLAttributes, type ReactNode } from "react";

type ButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onClick"> & {
  children?: ReactNode;
  onClick?: () => void;
  isLoading?: boolean;
  styles?: string;
};

export default function Button(props: ButtonProps) {
  const { children, isLoading, styles, ...restProps } = props;

  return (
    <button {...restProps} className={`btn font-mono ${styles}`}>
      {children}
    </button>
  );
}
