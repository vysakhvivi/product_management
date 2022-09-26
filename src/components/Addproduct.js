import React from 'react'
import Navbar from './Navbar'
import {useFormik} from 'formik'
import { addproductSchema } from '../schema'
import '../css/addproduct.css'


const initialValues={
    brandname:"",
    productname:"",
    productimage:"",
    quantity:"",
    price:"",
    description:""

    };




function Addproduct() {

    const {values,errors,touched,handleBlur,handleChange,handleSubmit} = useFormik({
        initialValues:initialValues,
        validationSchema:addproductSchema,
        onSubmit:(vḁl̥u̥es) => {
          console.log('vḁl̥u̥es: ', vḁl̥u̥es);
         
        }
      })





    return (
        <div>
            <Navbar />
            <div className='addcontainer'>
                <div className='addheading'>
                    <h2>ADD Products</h2>
                    <p>Here you can add all the products and its details you want to add to the inventory</p>
                </div>
                <div className='addcontainer2'>
                    <div className='addform'>
                        <form>
                            <div className='inputdiv one focus'>
                                <div className='i'>
                                    <i class="fas fa-at"></i>
                                </div>
                                <div>
                                    <h5>Brand Name</h5>
                                    <input className='input' autoComplete='off' type='text' name='brandname' id='brandname' value={values.brandname} onChange={handleChange} onBlur={handleBlur} />
                                    {errors.brandname && touched.brandname ? (<p className='form-error1'>{errors.brandname}</p>) : null}
                                </div>
                            </div>
                            
                            <div className='inputdiv three focus'>
                                <div className='i'>
                                    <i class="fas fa-at"></i>
                                </div>
                                <div>
                                    <h5>Product Image</h5>
                                    <input className='input' autoComplete='off' type='file' name='productimage' id='productimage' value={values.productimage} onChange={handleChange} onBlur={handleBlur} />
                                    {errors.productimage && touched.productimage ? (<p className='form-error1 imagerror'>{errors.productimage}</p>) : null}
                                </div>
                            </div>
                            
                            <div className='inputdiv five focus'>
                                <div className='i'>
                                    <i class="fas fa-at"></i>
                                </div>
                                <div>
                                    <h5>Quantity</h5>
                                    <input className='input' autoComplete='off' type='number' name='quantity' id='quantity' value={values.quantity} onChange={handleChange} onBlur={handleBlur} />
                                    {errors.quantity && touched.quantity ? (<p className='form-error1'>{errors.quantity}</p>) : null}
                                </div>
                            </div>
                            
                        </form>
                    </div>
                    <div className='addproductimage '>
                    <div className='addform'>
                        <form>
                           
                            <div className='inputdiv two focus'>
                                <div className='i'>
                                    <i class="fas fa-at"></i>
                                </div>
                                <div>
                                    <h5>Product Name</h5>
                                    <input className='input' autoComplete='off' type='text' name='productname' id='productname' value={values.productname} onChange={handleChange} onBlur={handleBlur} />
                                    {errors.productname && touched.productname ? (<p className='form-error1 e1'>{errors.productname}</p>) : null}
                                </div>
                            </div>
                           
                            <div className='inputdiv four focus'>
                                <div className='i'>
                                    <i class="fas fa-at"></i>
                                </div>
                                <div>
                                    <h5>Price</h5>
                                    <input className='input' autoComplete='off' type='number' name='price' id='price' value={values.price} onChange={handleChange} onBlur={handleBlur} />
                                    {errors.price && touched.price ? (<p className='form-error1 e1'>{errors.price}</p>) : null}
                                </div>
                            </div>
                           
                            <div className='inputdiv six focus'>
                                <div className='i'>
                                    <i class="fas fa-at"></i>
                                </div>
                                <div>
                                    <h5>Description</h5>
                                    <input className='input' autoComplete='off' type='textarea' name='description' id='description' value={values.description} onChange={handleChange} onBlur={handleBlur} />
                                    {errors.description && touched.description ? (<p className='form-error1 e1'>{errors.description}</p>) : null}
                                </div>
                            </div>
                        </form>
                    </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Addproduct