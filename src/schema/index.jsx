import * as Yup from 'yup'

export const registerSchema=Yup.object({
    username:Yup.string().min(2).max(25).required("Please Enter the Name"),
    email:Yup.string().email().required("Please Enter the Email"),
    place:Yup.string().required("Enter your Location"),
    password:Yup.string().min(6).required("Please Enter the Password")
})

export const loginSchema=Yup.object({
    email:Yup.string().email().required("Please Enter the Email"),
    password:Yup.string().min(6).required("Please Enter the password")
})