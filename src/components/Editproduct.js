import React, { useEffect, } from 'react'
import Navbar from './Navbar'
import { useFormik } from 'formik'
import { editproductSchema } from '../schema'
import '../css/editproduct.css'
import Previewimage from './Previewimage'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { getProduct } from '../action/productActions'
import { useDispatch, useSelector } from 'react-redux'


const Editproduct=()=> {

    const dispatch=useDispatch();

    const products = useSelector(state=>state.products)

    const navigate = useNavigate();

    const userid = localStorage.getItem('userid')

    const params = useParams()
    const id = params.id

    
    


    const { values, setFieldValue, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
       
        initialValues: {
            brandname:'',
            productname:'',
            quantity:'',
            price:'',
            description:'', 
        },

        
        validationSchema: editproductSchema,
        onSubmit: (vḁl̥u̥es,action) => {
            action.resetForm()
        }
    })

    const { brandname, productname, quantity, price, description } = values;

    useEffect(() => {
        PostEdit() 
        
        
   
        
    }, [])


    const PostEdit = async (req, res) => {

        

        await axios.get('http://localhost:5000/editproduct', {
            params: {
                'id': id
            }
        })
            .then((res) => {
                dispatch(getProduct(res.data[0].products[0]))
                console.log('res is:',res)
            })
            .catch((err) => {
                console.log(err)
            })

    }


        //for Updating the product details



    const updateproduct = async(req,res) => {
        console.warn(values.brandname, values.productname,values.quantity, values.price, values.description)

        console.warn("userlogin is:,",userid)

        const _id=id;

        await axios.patch(`http://localhost:5000/up`,{

        headers: {
                'Content-type': 'application/json'
            },
            body: {},
            params:{
                'userid':userid
            }
        },
        { withCredentials: true })
            .then((res) => {
                console.log(res)
                navigate('/listproduct')
            })
            .catch((err) => {
                console.log(err)
            })

    }

    return (

        <div>
            <Navbar />


            <div className='addcontainer'>
                <div className='addheading'>
                    <h2>Update Products</h2>
                    <p>Here you update the details of the product added to the inventory</p>
                </div>
                <div className='addcontainer2'>
                    <div className='addform'>
                        <form onSubmit={handleSubmit} >
                            <div className='inputdiv one focus'>
                                <div className='i'>
                                    <i class="fab fa-slack-hash"></i>
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
                                    <i class="fas fa-image"></i>
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
                                    <i class="fas fa-sort-numeric-up-alt"></i>
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
                            <form onSubmit={handleSubmit}>

                                <div className='inputdiv two focus'>
                                    <div className='i blackicon'>
                                        <i class="fab fa-product-hunt"></i>
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
                                        <i class="fas fa-rupee-sign"></i>
                                    </div>
                                    <div>
                                        <h5>Price</h5>
                                        <input className='input redside' 
                                        autoComplete='off' 
                                        type='number' 
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
                                        <i class="fas fa-comment-alt"></i>
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
                    <form onSubmit={handleSubmit} className='submit2'>
                        <input type='submit' className='submitbutton' value='SUBMIT' onClick={updateproduct} />


                    </form>
                </div>
                <>

                </>

            </div>
        </div>
    )
}

export default Editproduct