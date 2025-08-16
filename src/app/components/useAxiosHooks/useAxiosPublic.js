

import axios from "axios"
const instant = axios.create({
    baseURL: process.env.NEXT_URL || 'http://192.168.0.104:3000'
})

export const useAxiosPublic = () => {
    return instant
} 