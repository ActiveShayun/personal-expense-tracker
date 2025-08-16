

import axios from "axios"
const instant = axios.create({
    baseURL: 'http://192.168.0.100:3000'
})

export const useAxiosPublic = () => {
    return instant
} 