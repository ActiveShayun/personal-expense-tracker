'use client'
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { LuLoaderCircle } from 'react-icons/lu';


const ExpenseForm = ({
    handleSubmit,
    onSubmit,
    loading,
    register,
    errors,
    setStartDate,
    startDate,
    addExpense,
    data
}) => {
    console.log(data);


    return (
        <div className="bg-[url('/expense.jpg')] bg-center bg-cover border h-screen flex items-center relative justify-center">
            <form className='min-w-[400px] mx-auto text-white absolute z-50'
                onSubmit={handleSubmit(onSubmit)}>
                <h2 className='text-4xl font-medium text-white text-center mb-8'>
                    {addExpense ? <span>Add Your Expense Data</span>
                        :
                        <span>Updated Your Expense Data</span>
                    }
                </h2>
                <div className='space-y-4'>
                    {/* title */}
                    <div>
                        <label htmlFor="" className='text-xl block mb-2'>Title*</label>
                        <input
                            className='border rounded-md px-4 py-2 w-full text-white'
                            defaultValue={data?.title}
                            {...register('title', {
                                required: 'title is required',
                                minLength: {
                                    value: 3,
                                    message: 'Title must be at last 2 characters long'
                                }
                            })}
                            type="text"
                            placeholder='Enter your title' />
                        {/* error handle */}
                        {errors?.title &&
                            <p className='text-white'>{errors?.title?.message}</p>}
                    </div>
                    {/* Amount */}
                    <div>
                        <label htmlFor="" className='text-xl block mb-2'>Amount*</label>
                        <div className='relative '>
                            <input
                                className='border rounded-md px-4 py-2 w-full '
                                defaultValue={data?.amount}
                                {...register('amount', {
                                    required: 'Title is required',
                                    min: {
                                        value: 1,
                                        message: "amount must be at least 1"
                                    }
                                })}
                                type='number'
                                placeholder='Enter your Amount' />
                        </div>
                        {/* error handle */}
                        {errors?.amount &&
                            <p className='text-white'>{errors?.amount?.message}</p>}
                    </div>
                    {/* category */}
                    <div>
                        <label htmlFor="" className='text-xl block mb-2'>Category*</label>
                        <select
                            className="px-4 py-2 rounded-md  select-md text-white bg-transparent w-full border border-white"
                            defaultValue={data?.category}
                            {...register('category', { required: 'Category is required' })}
                        >
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
                        {/* error handle */}
                        {errors?.category &&
                            <p className='text-white'>{errors?.category?.message}</p>}
                    </div>
                    {/* DatePicker  */}
                    <div>
                        <label htmlFor="" className='text-xl block mb-2'>Date*</label>
                        <div className='w-full border px-4 py-2 rounded-md'>
                            <DatePicker
                                selected={startDate}
                                onChange={(date) => setStartDate(date)} />
                        </div>
                    </div>
                    <div>
                        <button
                            type='submit'
                            className='px-4 py-2 rounded-md bg-gradient-to-br from-blue-500 to-red-500 w-full text-white font-bold cursor-pointer flex items-center justify-center gap-3'>
                            <span>
                                <LuLoaderCircle className={`${loading ? 'animate-spin block' : 'hidden'} text-3xl`} />
                            </span>
                            {
                                loading ?
                                    <>
                                        {
                                            addExpense ? 'Expense Adding processing...'
                                                :
                                                'Expense Updated processing...'
                                        }
                                    </>
                                    :
                                    <>
                                        {
                                            addExpense ? 'Add Expense' : 'Update Expense'
                                        }
                                    </>
                            }
                        </button>
                    </div>
                </div>
            </form>
            <div className='absolute bg-black top-0 left-0 h-full w-full opacity-50'></div>
        </div>
    );
};

export default ExpenseForm;