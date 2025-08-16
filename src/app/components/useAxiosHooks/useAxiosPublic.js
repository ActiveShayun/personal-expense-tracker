

import axios from "axios"
const instant = axios.create({
    baseURL: 'https://personal-expense-tracker-sigma-six.vercel.app'
})

export const useAxiosPublic = () => {
    return instant
} 