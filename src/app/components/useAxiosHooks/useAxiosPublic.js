

import axios from "axios"
const instant = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL
})

export const useAxiosPublic = () => {
    return instant
} 