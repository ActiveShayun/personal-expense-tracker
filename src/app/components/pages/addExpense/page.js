'use client'
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useAxiosPublic } from '../../useAxiosHooks/useAxiosPublic';
import toast from 'react-hot-toast';
import ExpenseForm from '../../shared/expenseForm/ExpenseForm';


const AddExpense = () => {
    const [loading, setLoading] = useState(false)
    const useAxios = useAxiosPublic()
    const [startDate, setStartDate] = useState(new Date());
    const [addExpense, setAddExpense] = useState(true)
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
                reset();
            }
        } catch (error) {
            toast.error('Expense Add Failed')
            console.log(error);
        } finally {
            setLoading(false)
        }
    }
    return (
        <div>
            <ExpenseForm
                handleSubmit={handleSubmit}
                onSubmit={onSubmit}
                loading={loading}
                register={register}
                errors={errors}
                setStartDate={setStartDate}
                startDate={startDate}
                addExpense={addExpense}
            />
        </div>
    );
};

export default AddExpense;   