import { get42Token, get42User } from "@/services/42";
import { NextResponse } from "next/server";

export async function GET(req) {
    const params = req.nextUrl.searchParams;
    const code = params.get("code");
    try {
        if (!code)
            throw new Error("No code provided");

        const { access_token } = await get42Token(code);
        const user = await get42User(access_token);
        return NextResponse.json(user);
    } catch (error) {
        console.log(error.message);
        return NextResponse.redirect(new URL("/", req.url).href);
    }

}