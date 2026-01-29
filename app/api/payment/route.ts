import { NextResponse } from "next/server";
import { buildPaymentUrl } from "@/lib/pleenk";

export async function POST() {
  const url = buildPaymentUrl();
  return NextResponse.json({ url });
}
