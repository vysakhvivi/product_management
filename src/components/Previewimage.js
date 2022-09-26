import React from 'react'
import {useState} from 'react'
import '../css/previewimage.css'

function Previewimage({file}) {
  
    const [preview,setPreview]=useState({})
   
   
 if(file){
        const reader=new FileReader()
        reader.readAsDataURL(file)
        reader.onload=()=>{
            setPreview(reader.result)
        }
    }

    return (
    <div className='previewcontainer'>
        <img src={preview} alt=""/>
    </div>
  )
}

export default Previewimage