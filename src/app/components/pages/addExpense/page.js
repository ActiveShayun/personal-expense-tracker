'use client'
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { LuLoaderCircle } from "react-icons/lu";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const AddExpense = () => {
    const [loading, setLoading] = useState(false)
    const [startDate, setStartDate] = useState(new Date());

    const {
        register,
        formState: { errors },
        handleSubmit,
        reset
    } = useForm()
    const onSubmit = async (data) => {
        setLoading(true)

        try {

        } catch (error) {
            toast.error('')
            console.log(error);
        } finally {
            setLoading(false)
        }
    }
    return (
        <div className="bg-[url('/addExpense.jpg')] bg-center bg-cover border h-screen flex items-center relative justify-center">
            <form className='min-w-[400px] mx-auto text-white absolute z-50'
                onSubmit={handleSubmit(onSubmit)}>
                <div className='space-y-4'>
                    {/* title */}
                    <div>
                        <label htmlFor="" className='text-xl block mb-2'>Title*</label>
                        <input
                            className='border rounded-md px-4 py-2 w-full text-white'
                            {...register('title', { required: 'title is required' })}
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
                                {...register('amount', {
                                    min: { value: 1, message: "amount must be at least 1" }
                                })}
                                type='number'
                                placeholder='Enter your Amount' />
                        </div>
                        {/* error handle */}
                        {errors?.amount &&
                            <p className='text-white'>{errors?.amount?.message}</p>}
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
                                loading ? 'Adding processing...' : 'Add Expense'
                            }
                        </button>
                    </div>
                </div>
            </form>
            <div className='absolute bg-black top-0 left-0 h-full w-full opacity-50'></div>
        </div>
    );
};

export default AddExpense;