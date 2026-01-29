interface PriceProps {
  amount: number;
  currency?: string;
}

export function Price({ amount, currency = "€" }: PriceProps) {
  return (
    <span className="text-lg font-semibold text-foreground">
      {amount.toFixed(2)} {currency}
    </span>
  );
}
