'use client'
import React, { useState } from 'react';
import DeleteExpense from './DeleteExpense';
import UpdatedExpense from './UpdatedExpense';

const AllExpense = ({ result, total }) => {
    const [filterCategory, setFilterCategory] = useState('');
    const filteredData = filterCategory
        ? result.filter(item => item.category === filterCategory)
        : result;

    return (
        <div className='lg:mt-16 mt-8'>
            <h2 className='lg:text-6xl text-4xl mb-4 lg:mb-8 font-medium text-center '>Your All Expense </h2>
            <div className='grid grid-cols-1 lg:grid-cols-2 mb-8'>
                <p className='text-3xl font-medium '>Your Total Expense {total} </p>
                <select className='px-4 py-1 border rounded-md w-full'
                    onChange={(e) => setFilterCategory(e.target.value)}>
                    <option value="" className='text-black!'>
                        Select category
                    </option>
                    <option className='text-black!'
                        value={'food'}>Food</option>
                    <option className='text-black!'
                        value={'transport'}>Transport</option>
                    <option className='text-black!'
                        value={'travel'}>Travel</option>
                    <option className='text-black'
                        value={'shopping'}>Shopping</option>
                    <option className='text-black!'
                        value={'internet'}>Internet Bill</option>
                </select>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-4  w-full'>
                {
                    filteredData.length === 0 ? (
                        <p className="text-center text-xl font-medium col-span-full">
                            No data found
                        </p>
                    ) : (
                        filteredData.map(data => (
                            <div
                                key={data._id}
                                className="shadow-gray-500 p-4 rounded-md first-letter:uppercase border-b-2 border-green-500 space-y-3 relative"
                                style={{
                                    backgroundColor: "#ffffff",
                                    backgroundImage: `
            radial-gradient(ellipse at left top, rgba(0, 255, 255, 0.2), transparent 60%),
            radial-gradient(ellipse at right top, rgba(0, 255, 255, 0.2), transparent 60%)
          `,
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "100% 100%",
                                    backgroundPosition: "left top, right top"
                                }}
                            >
                                <h2 className="text-lg font-medium">{data.title}</h2>
                                <p>Bill : {data.amount}</p>
                                <p>Category : {data.category}</p>
                                <p>
                                    {new Date(data.deadline).toLocaleString("en-GB", {
                                        day: "2-digit",
                                        month: "short",
                                        year: "numeric",
                                        hour: "2-digit",
                                        minute: "2-digit",
                                        hour12: true
                                    })}
                                </p>
                                <div className="absolute top-0 right-0">
                                    <DeleteExpense id={data._id.toString()} />
                                </div>
                                <UpdatedExpense
                                    data={{ ...data, _id: data._id.toString() }}
                                    modalId={`modal_${data._id}`} // unique modal id
                                />
                            </div>
                        ))
                    )
                }

            </div>

        </div>
    );
};

export default AllExpense;