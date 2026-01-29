import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const raw = await request.text();
  console.log("[Pleenk Webhook] Raw body:", raw);
  return NextResponse.json({ received: true });
}
