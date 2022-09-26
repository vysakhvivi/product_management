import * as Yup from 'yup'

export const registerSchema=Yup.object({
    username:Yup.string().min(2).max(25).required("Please Enter the Name"),
    email:Yup.string().email().required("Please Enter the Email"),
    place:Yup.string().required("Enter your Location"),
    password:Yup.string().min(6).required("Please Enter the Password")
})

export const addproductSchema=Yup.object({
    brandname:Yup.string().min(3).max(25).required("Please Enter the Brand Name !!"),
    productname:Yup.string().min(3).max(25).required("Please Enter the Product Name !!"),
    picture:Yup.mixed().required("Image is Required !!")
    .test("FILE_TYPE","Invalid File type",(value) => value && ['image/png','image/jpeg','image/jpg'].includes(value.type)),
    quantity:Yup.number().min(1).max(1000).required("Enter the Quantity of the product !!"),
    price:Yup.number().min(10).max(10000000).required("Enter the price of the product !!"),
    description:Yup.string().min(10).max(1000).required("Enter the product description !!")

})

export const loginSchema=Yup.object({
    email:Yup.string().email().required("Please Enter the Email"),
    password:Yup.string().min(6).required("Please Enter the password")
})