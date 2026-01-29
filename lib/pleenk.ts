import { createSign } from "crypto";

interface PaymentParams {
  pw_confidentiality_wallet: string;
  pw_description: string;
  pw_transaction_ref: string;
  pw_beneficiary_0: string;
}

function signParams(params: PaymentParams, privateKey: string): string {
  const sorted = Object.keys(params)
    .sort()
    .map((key) => params[key as keyof PaymentParams])
    .join("+");

  const signer = createSign("SHA512");
  signer.update(sorted);
  signer.end();
  return Buffer.from(signer.sign(privateKey).toString("base64url")).toString();
}

export function buildPaymentUrl(): string {
  const privateKey = process.env.PLEENK_PRIVATE_KEY!.replace(/\\n/g, "\n");
  const walletId = process.env.PLEENK_WALLET_ID!;

  const params: PaymentParams = {
    pw_confidentiality_wallet: walletId,
    pw_description: "Product 123",
    pw_transaction_ref: `TXN-${Date.now()}`,
    pw_beneficiary_0: `${walletId}|42`,
  };

  const signature = signParams(params, privateKey);

  const query = Object.entries({ ...params, signature })
    .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
    .join("&");

  return `https://app.sandbox.pleenk.com/payment?${query}`;
}
