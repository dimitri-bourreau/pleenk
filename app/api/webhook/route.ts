import { NextRequest, NextResponse } from "next/server";

// In production: validate signature, update order status in DB,
// send confirmation email, trigger fulfillment, etc.
export async function POST(request: NextRequest) {
  const body = await request.json();
  console.log("[Pleenk Webhook]", JSON.stringify(body, null, 2));
  return NextResponse.json({ received: true });
}
