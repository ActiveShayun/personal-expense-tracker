import { corsHeaders } from "@/app/lib/corsHeader";
import { collectionNameObj, dbConnect } from "@/app/lib/dbConnect";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";


export async function DELETE(req, { params }) {
    // const id = params?.id;
    // console.log('deleted id ', id);
    try {
        const expenseCollectionD = await dbConnect(collectionNameObj.expenseCollection);
        const result = await expenseCollectionD.deleteOne({
            _id: new ObjectId(params.id)
        });
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
                message: 'deleted failed'
            }
        )
    }
}
export async function PATCH(req, { params }) {
    const id = await params;
    console.log('deleted id ', id);
    try {
        const body = await req.json();
        const expenseCollectionD = await dbConnect(collectionNameObj.expenseCollection);
        const result = await expenseCollectionD.updateOne({
            _id: new ObjectId(params.id)
        },
            {
                $set: { ...body }
            });
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
                message: 'updated failed'
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