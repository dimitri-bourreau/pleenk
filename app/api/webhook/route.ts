import { NextRequest, NextResponse } from "next/server";

interface PleenkWebhook {
  type: string;
  transactionRef: string;
  paymentId: string;
  metadata: string;
  status: string;
}

export async function POST(request: NextRequest) {
  const body: PleenkWebhook = await request.json();

  console.log("[Pleenk Webhook]", body.status, body.transactionRef);

  return NextResponse.json({ received: true });
}
