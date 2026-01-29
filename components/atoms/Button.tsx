interface ButtonProps {
  label: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
}

export function Button({ label, onClick, variant = "primary" }: ButtonProps) {
  const base = "w-full rounded-xl px-6 py-3 font-medium transition-all cursor-pointer";
  const variants = {
    primary: "bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:from-indigo-600 hover:to-purple-600 shadow-md hover:shadow-lg",
    secondary: "border border-indigo-200 text-indigo-600 hover:bg-indigo-50",
  };

  return (
    <button className={`${base} ${variants[variant]}`} onClick={onClick}>
      {label}
    </button>
  );
}
