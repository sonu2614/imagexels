import React, { useState } from 'react'
import ImageList from './Componnents/ImageList'
import ImageSearch from './Componnents/ImageSearch'

const App = () => {
  const [images,setImages]=useState([]);
  return (
    <div>
       <ImageSearch setImages={setImages}/>
      <ImageList images={images}/>
     
    </div>
  )
}

export default App