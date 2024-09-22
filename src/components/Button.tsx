import type { ButtonProps } from "../lib/types";

export default function Button({ children, onClick, disabled }: ButtonProps) {
  return (
    <button type='button' onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
