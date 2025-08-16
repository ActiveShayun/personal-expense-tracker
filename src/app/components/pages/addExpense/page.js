'use client'
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { LuLoaderCircle } from "react-icons/lu";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useAxiosPublic } from '../../useAxiosHooks/useAxiosPublic';
import toast from 'react-hot-toast';


const AddExpense = () => {
    const [loading, setLoading] = useState(false)
    const [startDate, setStartDate] = useState(new Date());
    const useAxios = useAxiosPublic()
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset
    } = useForm()
    const onSubmit = async (data) => {
        setLoading(true)

        try {
            const expense = {
                "title": data.title,
                "amount": data.amount,
                "category": data.category,
                "deadline": startDate
            }
            const res = await useAxios.post('/api/appIes/addExpense', expense)
            console.log('add expense', res);
            if (res?.data?.insertedId) {
                toast.success('Expense Add Successful')
            }
        } catch (error) {
            toast.error('Expense Add Failed')
            console.log(error);
        } finally {
            setLoading(false)
        }
    }
    return (
        <div className="bg-[url('/expense.jpg')] bg-center bg-cover border h-screen flex items-center relative justify-center">
            <form className='min-w-[400px] mx-auto text-white absolute z-50'
                onSubmit={handleSubmit(onSubmit)}>
                <div className='space-y-4'>
                    {/* title */}
                    <div>
                        <label htmlFor="" className='text-xl block mb-2'>Title*</label>
                        <input
                            className='border rounded-md px-4 py-2 w-full text-white'
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
                            defaultValue="Medium"
                            className="px-4 py-2 rounded-md  select-md text-white bg-transparent w-full border border-white"
                            {...register('category', { required: 'Category is required' })}
                        >
                            <option className='text-black! text-lg'
                                disabled={true}>Select category</option>
                            <option className='text-black!'
                                value={'food'}>Food</option>
                            <option className='text-black!'
                                value={'transport'}>Transport</option>
                            <option className='text-black'
                                value={'shopping'}>Shopping</option>
                            <option className='text-black!'
                                value={'internet'}>Internet Bill</option>
                        </select>
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
                                loading ? 'Expense Adding processing...' : 'Add Expense'
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