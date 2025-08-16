import { corsHeaders } from "@/app/lib/corsHeader";
import { collectionNameObj, dbConnect } from "@/app/lib/dbConnect";
import { NextResponse } from "next/server";


export async function POST(req) {
    try {
        const body = await req.json();
        const expenseCollectionD = await dbConnect(collectionNameObj.expenseCollection);
        const result = await expenseCollectionD.insertOne(body);
        console.log('expense', result);
        return NextResponse.json(result, {
            status: 200,
            headers: corsHeaders
        })
    } catch (error) {
        console.log('expense error', error);
        return NextResponse.json(
            {
                message: error?.message
            },
            {
                status: 201,
                message: 'data insert failed'
            }
        )
    }
}

export async function OPTIONS() {
    return NextResponse.json({},
        {
            status: 200,
            headers: corsHeaders
        })
}