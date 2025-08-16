

import axios from "axios"
const instant = axios.create({
    baseURL: 'https://personal-expense-tracker-4i3zkj2wa-apu-roys-projects.vercel.app'
})

export const useAxiosPublic = () => {
    return instant
} 