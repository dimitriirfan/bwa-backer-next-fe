import axios from "axios"
import { BASE_URL } from "./_baseUrl"

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default async function handler(req, res) {
    try {
        const body = req.body
        const response = await axios.post(`${BASE_URL}/api/v1/users`, body)

        res.status(response.data.meta.code).json({...response.data})

    } catch (err) {
        const response = err.response

        res.status(response.data.meta.code).json({...response.data})
    }

}
  