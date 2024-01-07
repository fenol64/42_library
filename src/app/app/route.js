import { get42Token } from "@/services/42";
import { NextResponse } from "next/server";

export async function GET(req) {
    const params = req.nextUrl.searchParams;
    const code = params.get("code");
    try {
        if (!code)
            throw new Error("No code provided");

        const { access_token } = await get42Token(code);
        const redirect_url = "/me?token=" + access_token;
        return NextResponse.redirect(new URL(redirect_url, req.url).href);
    } catch (error) {
        console.log(error.message);
        return NextResponse.redirect(new URL("/", req.url).href);
    }

}