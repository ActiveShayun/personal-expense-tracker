'use client'

import React from 'react';
import { useAxiosPublic } from '../useAxiosHooks/useAxiosPublic';
import { TiDeleteOutline } from 'react-icons/ti';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const DeleteExpense = ({ id }) => {
    // console.log(id);
    const useAxios = useAxiosPublic();
    const router = useRouter();

    const handleDeleteExpense = async (id) => {
        try {
            const res = await useAxios.delete(`/api/appIes/singleExpense/${id}`);
            if (res?.data?.deletedCount > 0) {
                toast.success('Deleted Successful');
                router.refresh();
            }
            // console.log(res);
        } catch (error) {
            if (error?.message) {
                toast.error('Deleted Failed')
            }
            // console.log(error);
        };

    };
    return (
        <div>
            <button onClick={() => handleDeleteExpense(id)}
                className='text-2xl text-red-700 cursor-pointer'>
                <TiDeleteOutline />
            </button>
        </div>
    );
};

export default DeleteExpense;