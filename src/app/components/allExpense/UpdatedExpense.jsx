'use client'
import React, { useState } from 'react';
import ExpenseForm from '../shared/expenseForm/ExpenseForm';
import { useAxiosPublic } from '../useAxiosHooks/useAxiosPublic';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const UpdatedExpense = ({ data: expenseData, modalId }) => {
    const [loading, setLoading] = useState(false);
    const useAxios = useAxiosPublic();
    const [startDate, setStartDate] = useState(new Date());
    const router = useRouter();

    const openModal = () => {
        const modal = document.getElementById(modalId);
        if (modal && typeof modal.showModal === 'function') {
            modal.showModal();
        }
    };

    const {
        register,
        formState: { errors },
        handleSubmit,
        reset
    } = useForm();

    const onSubmit = async (data) => {
        setLoading(true);

        try {
            const expense = {
                title: data.title,
                amount: data.amount,
                category: data.category,
                deadline: startDate
            };

            const res = await useAxios.patch(`/api/appIes/singleExpense/${expenseData?._id}`, expense);

            if (res?.data?.modifiedCount > 0) {
                toast.success('Expense Updated Successful');
                reset();
                const modal = document.getElementById(modalId);
                if (modal) modal.close();
                router.refresh();
            }
        } catch (error) {
            toast.error('Expense Updated Failed');
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <button
                onClick={openModal}
                className="bg-radial-[at_40%_50%] cursor-pointer from-black to-100% mx-auto to-[#2CCEBA]/60 text-center py-1 px-3 rounded-full border border-[#2CCEBA] text-white font-medium"
            >
                Edit Expense
            </button>

            <dialog id={modalId} className="modal modal-bottom sm:modal-middle">
                <div className="modal-box px-4">
                    <ExpenseForm
                        register={register}
                        handleSubmit={handleSubmit}
                        onSubmit={onSubmit}
                        loading={loading}
                        errors={errors}
                        setStartDate={setStartDate}
                        startDate={startDate}
                        data={expenseData}
                    />
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default UpdatedExpense;
