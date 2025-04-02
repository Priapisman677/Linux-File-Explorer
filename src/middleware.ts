import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {

    const whiteList = ['::ffff:189.248.162.41', '::1', '::ffff:127.0.0.1'];

    console.log(request.headers.get('x-forwarded-for'));

    if(!whiteList.includes(request.headers.get('x-forwarded-for') as string)) {
        return NextResponse.json({Denied: "Please authenticate"});
    }

    




    return NextResponse.next();
}