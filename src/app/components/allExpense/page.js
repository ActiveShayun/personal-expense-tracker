'use server'
import { collectionNameObj, dbConnect } from '@/app/lib/dbConnect';
import React from 'react';
import DeleteExpense from './DeleteExpense';


const AllExpensePage = async () => {
    const expenseCollection = await dbConnect(collectionNameObj.expenseCollection);
    const result = await expenseCollection.find({}).toArray();
    console.log(result);
    const total = result.reduce((total, item) => total + parseInt(item.amount), 0)
    console.log(total);
    return (
        <div className='lg:mt-16 mt-8'>
            <h2 className='lg:text-6xl text-4xl mb-4 lg:mb-8 font-medium text-center '>Your All Expense </h2>
            <p className='text-3xl mb-6 font-medium'>Your Total Expense {total} </p>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-4  w-full'>
                {
                    result.map(data => {
                        return (
                            <div key={data._id}
                                className='shadow-gray-500 p-4 rounded-md first-letter:uppercase border-b-2 border-green-500 space-y-3 relative
                     '
                                style={{
                                    backgroundColor: "#ffffff", // Base dark background
                                    backgroundImage: `
                           radial-gradient(ellipse at left top, rgba(0, 255, 255, 0.2),
                            transparent 60%),
                           radial-gradient(ellipse at right top, rgba(0, 255, 255, 0.2),
                            transparent 60%)
  `,
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "100% 100%",
                                    backgroundPosition: "left top, right top"
                                }}
                            >
                                <h2 className='text-lg font-medium'>{data.title}</h2>
                                <p>Bill : {data.amount}</p>
                                <p>Category : {data.category}</p>
                                <p>{
                                    new Date("2025-08-21T19:01:30.000Z").toLocaleString("en-GB", {
                                        day: "2-digit",
                                        month: "short",
                                        year: "numeric",
                                        hour: "2-digit",
                                        minute: "2-digit",
                                        hour12: true
                                    })}</p>
                                <div className='absolute top-0 right-0'>
                                    <DeleteExpense id={data._id.toString()} />
                                </div>
                                <button className='bg-radial-[at_40%_50%] cursor-pointer
                              from-black to-100%  mx-auto to-[#2CCEBA]/60 text-center py-1 px-3
                                rounded-full border border-[#2CCEBA] text-white font-medium'>
                                    Edit Expense
                                </button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default AllExpensePage;