import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Basic validation
    const { name, phone, industry } = body;
    if (!name || !phone || !industry) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    // MVP: Log to console for manual tracking
    console.log("=== New AI Assessment Submission ===");
    console.log("Timestamp:", new Date().toISOString());
    console.log("Payload:", JSON.stringify(body, null, 2));
    console.log("====================================");

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
