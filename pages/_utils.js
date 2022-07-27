import axios from "axios"
import { BASE_URL } from "./_baseURL"

export const checkEmailAvailable = async (email) => {
    try {
        const data = {
            email: email
        }

        console.log(data)
        const response = await axios.post(`${BASE_URL}/api/v1/email_checkers`, data)

        return response.data.data.is_available

    } catch (error) {

        return false
    }
} 