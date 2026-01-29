import { generateKeyPairSync } from "crypto";
import { buildPaymentUrl } from "@/lib/pleenk";

const mockKey = generateKeyPairSync("ec", {
  namedCurve: "secp384r1",
  privateKeyEncoding: { type: "pkcs8", format: "pem" },
  publicKeyEncoding: { type: "spki", format: "pem" },
}).privateKey as string;

beforeAll(() => {
  process.env.PLEENK_PRIVATE_KEY = mockKey;
  process.env.PLEENK_WALLET_ID = "mock-wallet-id";
  process.env.BASE_URL = "https://example.com";
});

describe("buildPaymentUrl", () => {
  it("returns a valid Pleenk sandbox URL", () => {
    const url = buildPaymentUrl();
    expect(url).toContain("https://app.sandbox.pleenk.com/payment?");
  });

  it("includes required payment params", () => {
    const url = buildPaymentUrl();
    expect(url).toContain("pw_confidentiality_wallet=");
    expect(url).toContain("pw_beneficiary_0=");
    expect(url).toContain("pw_description=");
    expect(url).toContain("pw_transaction_ref=");
    expect(url).toContain("signature=");
  });

  it("includes callback URLs", () => {
    const url = buildPaymentUrl();
    const successCb = encodeURIComponent("https://example.com/payment/result?status=success");
    const errorCb = encodeURIComponent("https://example.com/payment/result?status=error");
    const webhook = encodeURIComponent("https://example.com/api/webhook");
    expect(url).toContain(successCb);
    expect(url).toContain(errorCb);
    expect(url).toContain(webhook);
  });
});
