import { NextResponse, type NextRequest } from "next/server";

export default function middleware(req: NextRequest) {
    // Add your middleware here
    return NextResponse.next();
    }