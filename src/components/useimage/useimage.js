import './useimage.css'
import {useState ,useRef,useEffect} from 'react'
import React from 'react'


function UseImage (){
    const[imageIndex,setImageIndex] = useState(0)

    const imgRef = useRef(null)
      
    const img = [
      'https://images.pexels.com/photos/2607544/pexels-photo-2607544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/3361739/pexels-photo-3361739.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ]
    
    useEffect(() => {
      imgRef.current.src = img[imageIndex]
    },[imageIndex])
    
      return (
        <div>
        <img src={img[0]} alt = "dog" width="500px" ref ={imgRef}/>
        <br/>

        <button onClick= {() => {
          setImageIndex((imageIndex + 1) % img.length)
        }} className='changeBtn'>
            change img</button>

        </div>
      );
    }



export default UseImage;