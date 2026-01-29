interface BadgeProps {
  text: string;
}

export function Badge({ text }: BadgeProps) {
  return (
    <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-600">
      {text}
    </span>
  );
}
