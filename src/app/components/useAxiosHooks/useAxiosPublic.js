

import axios from "axios"
const instant = axios.create({
    baseURL: process.env.NEXT_URL
})

export const useAxiosPublic = () => {
    return instant
} 