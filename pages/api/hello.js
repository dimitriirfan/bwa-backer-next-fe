// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios"
import baseUrl from "./_baseUrl"

export default async function handler(req, res) {
  try {
    axios.post("localhost:8080/api/v1/users", {})
    res.status(200).json({ name:  console.log(baseUrl()) })

  } catch (err) {
    console.log("error")    
  }
}
