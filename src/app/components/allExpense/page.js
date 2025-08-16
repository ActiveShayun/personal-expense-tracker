'use server'
import { collectionNameObj, dbConnect } from '@/app/lib/dbConnect';
import React from 'react';
import AllExpense from './AllExpense';



const AllExpensePage = async ({ searchParams }) => {
    const { category } = searchParams || {}
    const expenseCollection = await dbConnect(collectionNameObj.expenseCollection);
    const query = category ? { category } : {}
    const result = await expenseCollection.find(query).toArray();
    console.log(result);
    const total = result.reduce((total, item) => total + parseInt(item.amount), 0)
    console.log(total);

    return (
        <div>
            <AllExpense
                total={total}
                result={result.map(item => ({
                    ...item,
                    _id: item._id.toString()
                }))}
            />
        </div>
    );
};

export default AllExpensePage;