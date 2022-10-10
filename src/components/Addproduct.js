import React from 'react'
import Navbar from './Navbar'
import { useFormik } from 'formik'
import { addproductSchema } from '../schema'
import '../css/addproduct.css'
import Previewimage from './Previewimage'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct } from '../action/productActions'
import Swal from 'sweetalert2'



const initialValues = {
    brandname: "",
    productname: "",
    picture: "",
    quantity: "",
    price: "",
    description: ""

};




function Addproduct() {

    const product=useSelector((state)=> state)
    const dispatch=useDispatch()


    const { values, setFieldValue, errors, touched, handleBlur, handleChange, handleSubmit} = useFormik({
        initialValues: initialValues,
        validationSchema: addproductSchema,
        onSubmit: async (vḁl̥u̥es,{resetForm}) => {
            console.log('vḁl̥u̥es:', vḁl̥u̥es);
            resetForm({values:initialValues})
        }
    
    })

 

    const PostAdd = async (e) => {
        e.preventDefault();

       

        const { brandname, productname, quantity, price, description } = values;

        const email = localStorage.getItem('email')

        await axios.post("https://productmanagementapplication.herokuapp.com/addproduct", {
            brandname, productname, quantity, price, description, email
        })

            .then((response) => {
                console.log(response.data);
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'Product added Successfully',
                    
                  })
                dispatch(addProduct(values))
                console.log(product)   
                
            })
            .catch((err) => {
                console.log(err)
                console.log(err.response)
                Swal.fire({
                    icon: 'error',
                    title: 'Failed',
                    text: 'Failed to add the Product !!',
                  })
            })

            
    }


    return (
        <div>
            <Navbar />


            <div className='addcontainer' onSubmit={handleSubmit} method="POST">
                <div className='addheading'>
                    <h2>ADD Products</h2>
                    <p>Here you can add all the products and its details you want to add to the inventory</p>
                </div>
                <div className='addcontainer2'>
                    <div className='addform'>
                        <form onSubmit={handleSubmit} method="POST" >
                            <div className='inputdiv one focus'>
                                <div className='i'>
                                    <i className="fab fa-slack-hash"></i>
                                </div>
                                <div>
                                    <h5>Brand Name</h5>
                                    <input className='input'
                                        autoComplete='off'
                                        type='text'
                                        name='brandname'
                                        id='brandname'
                                        value={values.brandname}
                                        accept="image/*"
                                        onChange={handleChange}
                                        onBlur={handleBlur} />
                                    {errors.brandname && touched.brandname ? (<p className='form-error1'>{errors.brandname}</p>) : null}
                                </div>
                            </div>

                            <div className='inputdiv three focus'>
                                <div className='i'>
                                    <i className="fas fa-image"></i>
                                </div>
                                <div>
                                    <h5>Product Image</h5>
                                    <input className='input'

                                        type='file'
                                        id='picture'


                                        onChange={(e) => setFieldValue("picture", e.target.files[0])}

                                        onBlur={handleBlur} />

                                    {values.picture && <Previewimage file={values.picture} />}

                                    {errors.picture && touched.picture ? (<p className='form-error1 imagerror'>{errors.picture}</p>) : null}
                                </div>
                            </div>

                            <div className='inputdiv five focus'>
                                <div className='i'>
                                    <i className="fas fa-sort-numeric-up-alt"></i>
                                </div>
                                <div>
                                    <h5>Quantity</h5>
                                    <input className='input'
                                        autoComplete='off'
                                        type='number'
                                        name='quantity'
                                        id='quantity'
                                        value={values.quantity}
                                        onChange={handleChange}
                                        onBlur={handleBlur} />
                                    {errors.quantity && touched.quantity ? (<p className='form-error1'>{errors.quantity}</p>) : null}
                                </div>
                            </div>

                        </form>
                    </div>
                    <div className='addpicture'>
                        <div className='addform'>
                            <form onSubmit={handleSubmit} method="POST">

                                <div className='inputdiv two focus'>
                                    <div className='i blackicon'>
                                        <i className="fab fa-product-hunt"></i>
                                    </div>
                                    <div>
                                        <h5>Product Name</h5>
                                        <input className='input redside'
                                            autoComplete='off'
                                            type='text'
                                            name='productname'
                                            id='productname'
                                            value={values.productname}
                                            onChange={handleChange}
                                            onBlur={handleBlur} />
                                        {errors.productname && touched.productname ? (<p className='form-error1 e1'>{errors.productname}</p>) : null}
                                    </div>
                                </div>

                                <div className='inputdiv four focus '>
                                    <div className='i blackicon'>
                                        <i className="fas fa-rupee-sign"></i>
                                    </div>
                                    <div>
                                        <h5>Price</h5>
                                        <input className='input redside'
                                            autoComplete='off' type='number'
                                            name='price'
                                            id='price'
                                            value={values.price}
                                            onChange={handleChange}
                                            onBlur={handleBlur} />
                                        {errors.price && touched.price ? (<p className='form-error1 e1'>{errors.price}</p>) : null}
                                    </div>
                                </div>

                                <div className='inputdiv six focus'>
                                    <div className='i blackicon'>
                                        <i className="fas fa-comment-alt"></i>
                                    </div>
                                    <div>
                                        <h5>Description</h5>
                                        <textarea className='input redside description'
                                            autoComplete='off'
                                            type='textarea'
                                            name='description'
                                            id='description'
                                            value={values.description}
                                            onChange={handleChange}
                                            onBlur={handleBlur} />
                                        {errors.description && touched.description ? (<p className='form-error1 e1'>{errors.description}</p>) : null}
                                    </div>
                                </div>


                            </form>
                        </div>
                    </div>

                </div>
                <div className='submit1'>
                    <form onSubmit={handleSubmit} className='submit2' method="POST">
                        <input type='submit' className='submitbutton' value='SUBMIT' onClick={PostAdd} />


                    </form>
                </div>
                <>

                </>

            </div>

        </div>
    )
}

export default Addproduct