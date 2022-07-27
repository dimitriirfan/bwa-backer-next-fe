import axios from "axios"
import { Form, Field, Formik, ErrorMessage  } from "formik"
import { useReducer, useState } from "react"
import { BASE_URL } from "./_baseURL"
import Button from '../components/Button'
import * as Yup from 'yup'
import { checkEmailAvailable } from "./_utils"

const Signup = () => {

    const [signupData, setSignupData] = useState({
        name: "", 
        occupation: "",
        email: "",
        password: ""
    })

    const [formError, setFormError] = useState({
        name: "", 
        occupation: "",
        email: "",
        password: ""
    })

    const SignupSchema = Yup.object().shape({
        name: Yup.string().required("Name cannot be empty"),
        occupation: Yup.string().required("Occupation cannot be empty"),
        email: Yup.string()
            .email("Not a valid email")
            .required("Email cannot be empty"),
        password: Yup
            .string()
            .required("Password cannot be empty")
            
    })

    const handleInputChange = (key, e) => {
        signupData[key] = e.target.value
        formError[key] = ""

        setSignupData((prev) => ({
            ...prev,
            [key]: e.target.value
        }))
        setFormError((prev) => ({
            ...prev,
            [key]: ""
        }))

    }

    const handleSignup = async (values, actions) => {
        try {
            const isEmailAvailable = await checkEmailAvailable(values.email)

            if (!isEmailAvailable) {
                actions.setFieldError("email", "Email is already used")
                return
            }
            
            const _ = await axios.post(`${BASE_URL}/api/v1/users`, values)

            const loginData = {
                email: values.email,
                password: values.password
            }
            const loginResponse = await axios.post(`${BASE_URL}/api/v1/sessions`, loginData)
            console.log(loginResponse)

            

        } catch (err) {
            const _ = err.response

        }
    }

    return (
        <div className="bg-primary-400 h-screen w-screen flex relative justify-center">
            <div className="hidden sm:block sm:w-4/5 rounded-r-3xl bg-cover " style={{backgroundImage: `url('/images/signup-image.png')`}}></div>
            <div className="relative container z-10 flex flex-col px-8 md:px-44 justify-center gap-8 text-white">
                <p className="text-4xl font-semibold">Daftar Sekarang!</p>
                <Formik
                    initialValues={{
                        name: "",
                        occupation: "",
                        email: "",
                        password: "",
                    }}
                    validationSchema={SignupSchema}
                    onSubmit={(values, action) => handleSignup(values, action)}
                >
                    {({ errors, touched, values }) => (
                        <Form className="flex flex-col gap-4 text-gray-900">
                            <div>
                                <label className="text-white font-semibold" htmlFor="name">Name</label>
                                <Field 
                                    className={`${errors.name && touched.name && 'text-red-500 border border-red-500'}  ${values.name && "bg-primary-300 text-white border-2 border-indigo-500"} w-full rounded-full h-12 pl-6 mt-2`}
                                    id="name"
                                    name="name"
                                    placeholder="example name"
                                    type="text"
                                />
                                {errors.name && touched.name && <div className="text-red-500">{errors.name}</div>}
                            </div>

                            <div>
                                <label className="text-white font-semibold" htmlFor="name">Occupation</label>
                                <Field 
                                    className={`${errors.occupation && touched.occupation && 'text-red-500 border border-red-500'} ${values.occupation && "bg-primary-300 text-white border-2 border-indigo-500"} w-full rounded-full h-12 pl-6 mt-2`}
                                    id="occupation"
                                    name="occupation"
                                    placeholder="example occupation"
                                    type="text"
                                />
                                {errors.occupation && touched.occupation && <div className="text-red-500">{errors.occupation}</div>}

                            </div>

                            <div>
                                <label className="text-white font-semibold" htmlFor="name">Email</label>
                                <Field 
                                    className={`${errors.email && touched.email && 'text-red-500 border border-red-500 '} ${values.email && "bg-primary-300 text-white border-2 border-indigo-500"} w-full rounded-full h-12 pl-6 mt-2`}
                                    id="email"
                                    name="email"
                                    placeholder="example@email.com"
                                    type="email"
                                />
                                {errors.email && touched.email && <div className="text-red-500">{errors.email}</div>}
                            </div>

                            <div>
                                <label className="text-white font-semibold" htmlFor="name">Password</label>
                                <Field 
                                    className={`${errors.password && touched.password && 'text-red-500 border border-red-500 '} ${values.password && "bg-primary-300 text-white border-2 border-indigo-500"} w-full rounded-full h-12 pl-6 mt-2`}
                                    id="password"
                                    name="password"
                                    placeholder="enter your password"
                                    type="password"
                                />
                                {errors.password && touched.password && <div className="text-red-500">{errors.password}</div>}
                    
                            </div>
                            <Button onClick={handleSignup} type="primary-rounded" className="text-center mt-4 text-white ">
                                Lanjutkan
                            </Button>
                        </Form>
                    )}
                </Formik>
                   

                <div className="text-center">
                    <span className="inline-flex gap-1">
                        <p>Sudah punya akun?</p>
                        <a className="text-orange-400 cursor-pointer">Sign In</a>
                    </span>
                </div>
            </div>
            <img className="w-96 absolute -top-0 right-0 z-0" src="/images/signup-radial.svg"></img>
        </div>
    )
}

export default Signup